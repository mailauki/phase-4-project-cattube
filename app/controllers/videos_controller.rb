class VideosController < ApplicationController

  def index
    videos = Video.all
    render json: videos
  end

  def show
    video = find_video
    render json: video
  end

  def create
    video = Video.create!(video_params)
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
    params.permit(:title, :description, :url)
  end

end
