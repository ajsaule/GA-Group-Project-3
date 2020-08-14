require 'sinatra'
require 'sinatra/reloader' if development?
require 'sinatra/json'
require 'bcrypt'
require 'net/http'
require 'uri'
require 'json'
require 'pry'
require_relative 'database/database_config'
require_relative 'models/story'
require_relative 'models/user'
require 'pry'


enable :sessions

# ===BODY PARSER===

def json_body(request)
  body = OpenStruct.new(JSON.parse(request.body.read))
  request.body.rewind
  body
end

# ===LOGIN===

def logged_in?
  if session["user_id"]
    true
  else
    false
  end
end

def current_user
  User.find(session["user_id"])
end

# ======================SESSION======================

post '/session' do 
  user = User.find_by(email: (json_body(request).email))
  if user && BCrypt::Password.new(user.password_digest) == json_body(request).password
    session["user_id"] = user.id
    json({ message: "logged in", id: user.id}) 
  else
    json({ message: "not logged in"}) 
  end

end

get '/session' do
  if logged_in? 
    json({ message: "logged in" }) 
  else
    json({ message: "NOT logged in" }) 
  end

end

delete "/session" do
  session["user_id"] = nil
  json({ message: "logged out"}) 
end

# ======================USER==========================

# ===CREATE===

post '/user/new' do 
    already_registered_email = User.find_by(email: (json_body(request).email))
    user = User.new
    # json({ message: already_registered_email }) 
    if already_registered_email == nil
        user.email = json_body(request).email
        user.password_digest = BCrypt::Password.create(json_body(request).password)
        user.save
        session["user_id"] = user.id
        status 201
        json({})
    else
        json({ message: "email already registered" }) 
    end
end  

# ===READ===

get '/user/new' do

  json({ message: "read"}) 
end

# ===DELETE===

delete '/user/delete' do
  id = json_body(request).id
  user = User.find(id)
  user.delete
  # delete_user(current_user["id"])
  session["user_id"] = nil
  json({ message: "deleted"})
end

# delete ‘/user/delete’ do
#   id = json_body(request).id
#   if logged_in? && (current_user[“id”] == id)
#     user = User.find(id)
#     user.delete
#     session[“user_id”] = nil
#     json({ message: “deleted”})
#   end
# end

# ======================STORY==========================

# ===CREATE===


post '/api/stories' do
    subscription_key = ENV["MSFT_TEXT_ANALYSIS_API"]
    endpoint = "https://andrej.cognitiveservices.azure.com"
    path = '/text/analytics/v3.0/sentiment'
    uri = URI(endpoint + path)

    documents = { 'documents': [
        { 'id' => '1', 'text' => "#{json_body(request).story}" },
    ]}

    p 'Please wait a moment for the results to appear.'

    api_request = Net::HTTP::Post.new(uri)
    api_request['Content-Type'] = "application/json"
    api_request['Ocp-Apim-Subscription-Key'] = subscription_key
    api_request.body = documents.to_json

    response = Net::HTTP.start(uri.host, uri.port, :use_ssl => uri.scheme == 'https') do |http|
        http.request (api_request)
    end

    response_parsed = JSON.parse(response.body)

    if response_parsed["documents"][0]["confidenceScores"]["positive"] > 0.5
      story = Story.new
      story.userid = session["user_id"]
      story.title = json_body(request).title
      story.story = json_body(request).story
      story.name = json_body(request).name
      story.likes = 0
      story.save
      status 201
      # json(story)
      json({ message: "AI thinks your story is cool"})
     else 
      json({ message: "AI thinks your story is negative :) "})
    end
end  

# ===READ===

get '/' do 
  redirect "/index.html"
end

get '/api/stories/story' do
  # redirect '/index.html'
  if logged_in? 
    json({ id: session["user_id"] }) 
  end
end

get '/api/stories' do
  stories = Story.all
  json data: stories 
end

get '/api/stories/edit' do 
  story = Story.find(params["id"])
  json(data: story)
end

# ===DELETE===

delete '/api/stories' do
  id = json_body(request).id
  story = Story.find(id)
  story.delete
  json({ id: id })
  json({ message: "delete works"})
end

# ===UPDATE===

patch '/api/stories' do
  body = json_body(request)
  story = Story.find(body.id)
  story.story = body.story
  story.title = body.title
  story.name = body.name
  story.save
  json({ message: "patch works"})
end




