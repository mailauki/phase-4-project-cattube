class Video < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :likes

  validates :title, :url, presence: true
  validates :url, uniqueness: true

  validate :cat_title

  def cat_title
    unless ["Cat", "Kitten", "cat", "kitten"].any? { |word| title.include?(word) }
      errors.add :title, "must contain 'Cat' or 'Kitten'"
    end
  end
end
