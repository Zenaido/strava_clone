class ImageController < ApplicationController
    def image_params
        params.permit(:image)
    end

    def create
        image = params[:image]
        byebug
        Image.new
    end

end