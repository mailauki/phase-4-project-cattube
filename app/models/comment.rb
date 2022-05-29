class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :video

  validates :text, presence: true
end
