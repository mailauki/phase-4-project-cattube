class LikeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :video_id, :video_title, :video_likes_total

  def video_title
    object.video.title
  end

  def video_likes_total
    object.video.likes.length
  end

  belongs_to :user
  belongs_to :video
end
