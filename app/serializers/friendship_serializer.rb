class FriendshipSerializer < ActiveModel::Serializer
  attributes :followee_id, :follower_id
end
