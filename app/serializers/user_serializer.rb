class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :videos_total

  def videos_total
    object.videos.length
  end

  has_many :videos
end
