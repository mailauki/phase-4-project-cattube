class UsersController < ApplicationController
  skip_before_action :authorize, only: [:index, :show, :me, :create]

  def index
    users = User.all
    render json: users
  end

  def me
    render json: @current_user
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end
