class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :url, :short_description

  def short_description
    "#{self.object.description[0..34]}..."
  end

  belongs_to :user
  has_many :likes
end
