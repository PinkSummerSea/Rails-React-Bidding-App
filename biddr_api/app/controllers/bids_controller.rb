class BidsController < ApplicationController
    
    before_action :authenticate_user!

    def create
        bid = Bid.new(params.require(:bid).permit!)
        auction = Auction.find(params[:auction_id])
        bid.auction = auction
        bid.user = current_user
        if bid.save
            #redirect_to auction_path(auction)
            render json: {id: bid.id}
        else   
            render json: {stauts: 303}
        end
    end
end
