class VideosController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]

  def index
    videos = Video.all
    render json: videos
  end

  def search
    keyword = params[:keyword]
    byTitle = Video.where("title like ?", "%#{keyword}%")
    byDescription = Video.where("description like ?", "%#{keyword}%")
    videos = byTitle.to_a.concat(byDescription.to_a)
    render json: videos
  end

  def random_nine
    videos = Video.all.shuffle.take(9)
    render json: videos
  end

  def show
    video = find_video
    render json: video, serializer: VideoCommentSerializer
  end

  def create
    video = @current_user.videos.create!(video_params)
    render json: video, status: :created
  end

  def update
    video = find_video
    video.update!(video_params)
    render json: video
  end

  def destroy
    video = find_video
    video.destroy
    head :no_content
  end

  private

  def find_video
    Video.find(params[:id])
  end

  def video_params
    params.permit(:title, :description, :url, :user_id)
  end

end
