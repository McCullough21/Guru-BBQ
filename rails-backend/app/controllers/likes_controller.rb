class LikesController < ApplicationController

    def index
    @likes = Like.all 
    render json: @likes.to_json
    end

    def create
        @like = Like.create(user_id: params[:userId], comment_id: params[:commentId])
    end
end
