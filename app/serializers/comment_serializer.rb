class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_name

  def user_name
    object.user.username
  end

  belongs_to :user
end
