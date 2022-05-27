class Video < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :likes

  validates :title, :url, presence: true
  validates :url, uniqueness: true
end
