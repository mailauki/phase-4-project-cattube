class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :url, :short_description, :description, :user_id, :likes, :likes_total

  def short_description
    "#{self.object.description[0..34]}..." unless self.object.description.length === 0
  end

  def likes_total
    self.object.likes.length
  end

  belongs_to :user
  has_many :likes
end
