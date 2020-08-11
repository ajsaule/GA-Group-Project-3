require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/json'
require_relative 'database/database_config'
require_relative 'database/stories'

# ===BODY PARSER===

def json_body(request)
  body = OpenStruct.new(JSON.parse(request.body.read))
  request.body.rewind
  body
end

# ------------------------STORY----------------------------

# ===CREATE===

post '/api/stories' do
    story = Story.new
    story.content = json_body(request).content
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
  json({ message: "should we take a break?"})
end

# ===UPDATE===

patch '/api/stories' do
  body = json_body(request)
  story = Story.find(body.id)
  story.content = body.content
  story.save
  json({ message: "should we take a break?"})
end




