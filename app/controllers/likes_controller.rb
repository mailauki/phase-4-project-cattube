class LikesController < ApplicationController

  def create
    like = @current_user.likes.create!(like_params)
    render json: like, status: :created
  end

  private

  def like_params
    params.permit(:user_id, :video_id)
  end

end
