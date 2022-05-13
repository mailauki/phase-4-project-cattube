class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :url, :short_description

  def short_description
    "#{self.object.description[0..34]}..."
  end

  belongs_to :user
end
