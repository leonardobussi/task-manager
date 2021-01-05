class Api::V1::UsersController < ApplicationController

  # respond_to :json

  def show 
    begin
      @user = User.find(params[:id])
      render :json => @user
    rescue
      head 404
    end
  end

  def create 
    user = User.new(user_params)

    if user.save
      render :json => user, status: 201
    end
  end



  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
