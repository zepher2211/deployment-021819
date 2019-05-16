class DragonsController < ApplicationController
    before_action :define_current_dragon

    def create
        dragon = Dragon.create(dragon_params)
        render json: dragon
    end

    def index
        render json: Dragon.all
    end

    def show
        render json: current_dragon
    end

    def update 
        current_dragon.update(dragon_params)
        render json: current_dragon
    end

    def destroy
        current_dragon.destroy
        render json: current_dragon
    end

    def dragon_params
        params.permit(:name, :image, :description, :atWar)
    end

    def define_current_dragon
        if params[:id]
            @current_dragon = Dragon.find(params[:id])
        else
            @current_dragon = Dragon.new
        end
    end

    def current_dragon
        @current_dragon
    end
end