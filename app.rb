require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :index
end

get '/platform' do
  RUBY_PLATFORM
end

get '/servertime' do
  Time.new.getlocal.to_s
end
