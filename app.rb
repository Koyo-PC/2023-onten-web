require 'bundler/setup'
Bundler.require
require 'sinatra/reloader' if development?

get '/' do
  erb :index
end

get '/message' do
  erb :message
end

get '/access' do
  erb :access
end

get '/map' do
  erb :map
end

get '/timetable' do
  erb :timetable
end

get '/circle' do
  erb :circle
end