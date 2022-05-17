class Video < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :likes
  has_many :users, through: :comments
  has_many :users, through: :likes

  validates :url, presence: true
end
