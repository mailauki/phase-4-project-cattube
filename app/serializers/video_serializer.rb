class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :url, :user_id
end
