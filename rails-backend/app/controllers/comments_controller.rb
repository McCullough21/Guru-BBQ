class CommentsController < ApplicationController

    def index
        @comments = Comment.all
        render json: @comments.to_json
    end

    def create
        params.inspect
        @comment = Comment.create(content: params[:content], user_id: params[:id], user_username: params[:username])

    end
end
