# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.create!(username: Faker::Internet.username, password: Faker::Internet.password)

video1 = Video.create!(title: "Cute Little Red Cat Sleeping", description: Faker::Lorem.sentence, url: "https://www.shutterstock.com/video/clip-1055349194-cute-little-red-cat-sleeping-on-floor", user_id: user1.id)
