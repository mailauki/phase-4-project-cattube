class LikeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :video_id

  # def video_title
  #   object.video.title
  # end

  # def video_likes_total
  #   object.video.likes.length
  # end

  belongs_to :user
  belongs_to :video
end
