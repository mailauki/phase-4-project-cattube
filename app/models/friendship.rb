class Friendship < ApplicationRecord
  belongs_to :follower, class_name: "User"
  belongs_to :followee, class_name: "User"

  # validates :follower, presence: { message: "must be Logged In"}
end
