class FriendshipsController < ApplicationController

  def create
    # friendship = @current_user.followees.create!(friendship_params)
    friendship = Friendship.create!(friendship_params)
    render json: friendship, status: :created
  end

  private

  def friendship_params
    params.permit(:followee_id, :follower_id)
  end

end
