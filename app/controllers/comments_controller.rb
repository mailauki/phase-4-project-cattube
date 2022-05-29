class CommentsController < ApplicationController

  def create
    comment = @current_user.comments.create!(comment_params)
    render json: user, status: :created
  end

  private

  def comment_params
    params.permit(:text, :video_id)
  end

end
