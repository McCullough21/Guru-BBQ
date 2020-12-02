class LikesController < ApplicationController

    def index
    @likes = Like.all 
    render json: @likes.to_json
    end

    def show
        @like = Like.all.find_by(id: params[:id])
        render json: @like.to_json
    end
    def create
        @like = Like.create(user_id: params[:userId], comment_id: params[:commentId])
         redirect_to like_path(@like) 
    end

    def destroy
        @like = Like.find_by(id: params[:id])
        @like.delete
    end

    
end
