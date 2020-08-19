class UsersController < ApplicationController
   def create
        @user = User.create(username: params[:username], password: params[:password])
    end
    def index
        @user = User.find_by(username: params[:username])
        render json: @user.to_json
    end

    def show
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            render json: @user.to_json
        end
    end
    
    
    
end

