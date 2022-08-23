class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    include CurrentUserConcern

    # def current_user2
    #     @current_user ||= User.find_by_id session[:user_id]
    # end
    # helper_method :current_user2

    def authenticate_user!
        redirect_to auctions_path, notice: "Please Sign In" unless @current_user
    end
end
