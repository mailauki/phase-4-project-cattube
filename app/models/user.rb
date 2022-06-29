class User < ApplicationRecord
  has_many :videos, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy

  has_many :liked_videos, through: :likes, source: :video

  has_many :followed_users, foreign_key: :follower_id, class_name: "Friendship"
  has_many :followees, through: :followed_users
  has_many :following_users, foreign_key: :followee_id, class_name: "Friendship"
  has_many :followers, through: :following_users

  validates :username, presence: true, uniqueness: true, format: { with: /\A[a-zA-Z0-9\s]+\z/i, message: "can only contain letters and numbers"}

  has_secure_password
end
