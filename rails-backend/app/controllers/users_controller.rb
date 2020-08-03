class UsersController < ApplicationController
   def create
        @user = User.create(username: params[:username], password: params[:password])
    end

    def show
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            render json: UserSerializer.new(@user).serialized_user
        end
    end
end
