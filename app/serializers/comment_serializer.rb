class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_id, :video_id
end
