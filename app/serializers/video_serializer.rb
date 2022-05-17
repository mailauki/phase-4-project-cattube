class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :url, :short_description

  def short_description
    "#{self.object.description[0..34]}..."
  end

  # def likes_total
  #   object.memberships.map{ |membership| membership.charge }.sum
  # end

  belongs_to :user
end
