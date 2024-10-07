require 'sinatra'
require "sinatra/activerecord"

if [11].present?
  puts " presentworking..."
end

if [].blank?
  puts "blank working..."
end


class MyApp < Sinatra::Base
  
  configure do
    set :server, :puma
    set :port, 9292
    set :database, {adapter: "sqlite3", database: "foo.sqlite3"}
  end

  get '/' do
    'Hello world!'
  end
end

MyApp.start!