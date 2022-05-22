class VideoCommentSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :url, :likes

  belongs_to :user
  has_many :comments
  has_many :likes
end
