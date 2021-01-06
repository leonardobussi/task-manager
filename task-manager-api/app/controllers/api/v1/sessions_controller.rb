class Api::V1::SessionsController < ApplicationController

  def create 
    user = User.find_by(email: sessions_params[:email])

    if user && user.valid_password?(sessions_params[:password]) 
      render json: user, status: 200
    end
  end

  private
  def sessions_params 
    params.require(:session).permit(:email, :password)
  end
end
