class ApplicationController < ActionController::API

    def react_app
        render :file => 'public/index.html'
    end

end
