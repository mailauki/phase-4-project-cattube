class User < ApplicationRecord
  has_many :videos
  has_many :comments
  has_many :likes

  has_many :followed_users, foreign_key: :follower_id, class_name: "Friendship"
  has_many :followees, through: :followed_users
  has_many :following_users, foreign_key: :followee_id, class_name: "Friendship"
  has_many :followers, through: :following_users

  # has_many :videos, through: :likes
  # has_many :videos, through: :comments

  validates :username, presence: true, uniqueness: true

  has_secure_password
end
