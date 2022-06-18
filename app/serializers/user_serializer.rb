class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :videos_total, :followers_total

  def videos_total
    object.videos.length
  end

  def followers_total
    object.followers.length
  end

  has_many :videos
  has_many :followers
  has_many :followees
  has_many :likes
end
