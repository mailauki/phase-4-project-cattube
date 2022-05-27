class LikesController < ApplicationController

  def create
    like = @current_user.likes.create!(like_params)
    render json: like, status: :created
  end

  def destroy
    like = @current_user.likes.find_by(video_id: params[:id])
    like.destroy
    head :no_content
  end

  private

  def like_params
    params.permit(:user_id, :video_id)
  end

end
