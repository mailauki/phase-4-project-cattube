# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding users..."

user1 = User.create!(username: Faker::Internet.username(separators: ""), password: Faker::Internet.password)

user2 = User.create!(username: Faker::Internet.username(separators: ""), password: Faker::Internet.password)

user3 = User.create!(username: Faker::Internet.username(separators: ""), password: Faker::Internet.password)

puts "Done seeding users"
puts "Seeding videos..."

video1 = Video.create!(title: "Jurassic Park but with a Cat", description: Faker::Lorem.paragraph(sentence_count: 6), url: "https://www.youtube.com/embed/W85oD8FEF78", user_id: user1.id)

video2 = Video.create!(title: "World's smallest cat", description: Faker::Lorem.paragraph(sentence_count: 6), url: "https://www.youtube.com/embed/W86cTIoMv2U", user_id: user1.id)

video3 = Video.create!(title: "Little cat on a fence in the garden", description: Faker::Lorem.paragraph(sentence_count: 6), url: "https://assets.mixkit.co/videos/preview/mixkit-little-cat-on-a-fence-in-the-gaden-33152-large.mp4", user_id: user2.id)

video4 = Video.create!(title: "Cute red kitten sleeping in the couch", description: Faker::Lorem.paragraph(sentence_count: 6), url: "https://assets.mixkit.co/videos/preview/mixkit-cute-red-kitten-sleeping-in-the-couch-32319-large.mp4", user_id: user2.id)

video5 = Video.create!(title: "White cat lying among the grasses seen up close", description: Faker::Lorem.paragraph(sentence_count: 6), url: "https://assets.mixkit.co/videos/preview/mixkit-white-cat-lying-among-the-grasses-seen-up-close-22732-large.mp4", user_id: user2.id)

video6 = Video.create!(title: "Newborn fluffy kittens", description: Faker::Lorem.paragraph(sentence_count: 6), url: "https://assets.mixkit.co/videos/preview/mixkit-newborn-fluffy-kittens-31978-large.mp4", user_id: user2.id)

video7 = Video.create!(title: "White, blue-eyed cat", description: Faker::Lorem.paragraph(sentence_count: 6), url: "https://assets.mixkit.co/videos/preview/mixkit-white-blue-eyed-cat-1538-large.mp4", user_id: user3.id)

video8 = Video.create!(title: "Siamese cat inside a hat", description: Faker::Lorem.paragraph(sentence_count: 6), url: "https://assets.mixkit.co/videos/preview/mixkit-siamese-cat-inside-a-hat-4103-large.mp4", user_id: user3.id)

video9 = Video.create!(title: "A couple of cats in the snow", description: Faker::Lorem.paragraph(sentence_count: 6), url: "https://assets.mixkit.co/videos/preview/mixkit-a-couple-of-cats-in-the-snow-9949-large.mp4", user_id: user3.id)

puts "Done seeding videos"
puts "Seeding comments..."

Comment.create!(text: Faker::Lorem.sentence, user_id: user1.id, video_id: video1.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user3.id, video_id: video1.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user2.id, video_id: video1.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user1.id, video_id: video1.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user2.id, video_id: video1.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user3.id, video_id: video1.id)

Comment.create!(text: Faker::Lorem.sentence, user_id: user1.id, video_id: video2.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user3.id, video_id: video2.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user2.id, video_id: video2.id)

Comment.create!(text: Faker::Lorem.sentence, user_id: user1.id, video_id: video3.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user2.id, video_id: video3.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user3.id, video_id: video3.id)

Comment.create!(text: Faker::Lorem.sentence, user_id: user1.id, video_id: video4.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user3.id, video_id: video4.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user2.id, video_id: video4.id)

Comment.create!(text: Faker::Lorem.sentence, user_id: user1.id, video_id: video5.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user2.id, video_id: video5.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user3.id, video_id: video5.id)

Comment.create!(text: Faker::Lorem.sentence, user_id: user1.id, video_id: video6.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user3.id, video_id: video6.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user2.id, video_id: video6.id)

Comment.create!(text: Faker::Lorem.sentence, user_id: user1.id, video_id: video7.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user2.id, video_id: video7.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user3.id, video_id: video7.id)

Comment.create!(text: Faker::Lorem.sentence, user_id: user1.id, video_id: video8.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user3.id, video_id: video8.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user2.id, video_id: video8.id)

Comment.create!(text: Faker::Lorem.sentence, user_id: user1.id, video_id: video9.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user2.id, video_id: video9.id)
Comment.create!(text: Faker::Lorem.sentence, user_id: user3.id, video_id: video9.id)

puts "Done seeding comments"
