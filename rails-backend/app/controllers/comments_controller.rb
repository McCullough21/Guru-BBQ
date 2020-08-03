class CommentsController < ApplicationController

    def index
        @comments = Comment.all
    end
    
    def create
        @comment = Comment.create(content: params[:content], user_id: params[:id], user_username: params[:username])

    end
end
