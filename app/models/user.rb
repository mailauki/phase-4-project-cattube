class User < ApplicationRecord
  has_many :videos
  has_many :comments
  has_many :likes
  # has_many :videos, through: :likes
  # has_many :videos, through: :comments

  validates :username, presence: true, uniqueness: true

  has_secure_password
end
