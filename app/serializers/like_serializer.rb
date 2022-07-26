class LikeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :video_id

  belongs_to :user
  belongs_to :video
end
