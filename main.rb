require 'sinatra'
require 'sinatra/reloader' if development?
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




