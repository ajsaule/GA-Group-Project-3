require 'sinatra'
require 'sinatra/reloader' if development?
require 'sinatra/json'
require_relative 'database/database_config'
require_relative 'models/story'
require_relative 'models/user'

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

# ======================STORY==========================

# ===CREATE===

post '/api/stories' do
    story = Story.new
    story.title = json_body(request).title
    story.story = json_body(request).story
    story.name = json_body(request).name
    story.likes = 0
    story.save
    status 201
    json(story)
end  

# ===READ===

get '/' do
  redirect '/index.html'
end

get '/api/stories' do
  stories = Story.all
  json data: stories 
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
  story.content = body.content
  story.save
  json({ message: "patch works"})
end




