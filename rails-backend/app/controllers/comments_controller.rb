class CommentsController < ApplicationController

    def index
        
        @comments = Comment.all
        render json: @comments.to_json
    end
# is username needed, maybe for fetching comments to display in meats with user's name
    def create
        
        @comment = Comment.create(content: params[:content], user_id: params[:id], user_username: params[:username], meatType: params[:meatType])

    end
end
