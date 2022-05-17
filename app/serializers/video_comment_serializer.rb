class VideoCommentSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :url

  belongs_to :user
  has_many :comments
end
