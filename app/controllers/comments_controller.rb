class CommentsController < ApplicationController

  def create
    # comment = Comment.create!(comment_params)
    comment = @current_user.comments.create!(comment_params)
    render json: user, status: :created
  end

  private

  def comment_params
    params.permit(:text, :user_id, :video_id)
  end

end
