class Video < ApplicationRecord
  has_many :users
  has_many :comments
  has_many :likes
  has_many :users, through: :comments
  has_many :users, through: :likes

  validates :url, presence: true
end
