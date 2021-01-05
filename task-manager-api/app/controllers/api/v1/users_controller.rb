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
end
