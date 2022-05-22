class FriendshipsController < ApplicationController

  def create
    # friendship = Friendship.create!(friendship_params)
    friendship = @current_user.followers.create!(friendship_params)
    render json: friendship, status: :created
  end

  private

  def friendship_params
    params.permit(:followee_id, :follower_id)
  end

end
