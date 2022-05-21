class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :video

  # validates :user, presence: { message: "must be Logged In"}
end
