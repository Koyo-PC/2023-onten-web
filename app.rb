require 'bundler/setup'
Bundler.require
require 'sinatra'
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

get '/buturidoukoukai' do
  erb :buturidoukoukai   
end
 
get '/kagakubu' do
  erb:kagakubu
end

get '/shougibu' do
  erb:shougibu
end

get '/tirekibu' do
  erb:tirekibu
end

get '/tennmonnbu' do
  erb:tennmonnbu
end

get '/bizyutubu' do
  erb:bityutubu
end

get '/annsannburubu' do
  erb:annsannburubu
end

get '/essbu' do
  erb:essbu
end

get '/shasinnbu' do
  erb:shasinnbu
end

get '/sugakudoukoukai' do
  erb:sugakudoukoukai
end

get '/pcdoukoukai' do
  erb:pcdoukoukai
end

get '/keionndoukoukai' do
  erb:keionndoukoukai
end

get '/kizyutudoukoukai' do
  erb:kizyutudoukoukai
end

get '/tetudoudoukoukai' do
  erb:tetudoudoukoukai
end

get '/ryokoudoukoukai' do
  erb:ryokoudoukoukai
end

get '/supuradoukoukai' do
  erb:supuradoukoukai
end
