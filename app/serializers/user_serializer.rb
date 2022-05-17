class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :videos_total

  def videos_total
    object.videos.length
  end

  # def followers_total
  #   object.users.map{ |user| user.follower }
  # end

  has_many :videos
  has_many :comments
end
