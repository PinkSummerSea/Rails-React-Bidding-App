class AuctionsController < ApplicationController

    before_action :authenticate_user!, except: [:index, :show]
    
    def create
        auction = Auction.new(params.require(:auction).permit!)
        auction.user = current_user
        if auction.save
            render json: {id: auction.id}
        else  
            render(
                json: { errors: auction.errors.messages },
                status: 422
            )
        end
    end

    def show
        auction = Auction.find params[:id]
        render(json: auction)
    end

    def index
        auctions = Auction.order created_at: :desc
        render(json: auctions, each_serializer: AuctionCollectionSerializer)
    end
end
