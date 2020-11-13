class CommentsController < ApplicationController

    def index
        
        @comments = Comment.all
        render json: @comments.to_json
    end

    def create
        
        @comment = Comment.create(content: params[:content], user_id: params[:id], user_username: params[:username], meatType: params[:meatType])

    end

    def update
        # raise params when action created in frontend
        @comment = Comment.find_by(id: params[:id])
        
    end
end
