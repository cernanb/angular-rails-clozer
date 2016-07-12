class Api::OpportunitiesController < ApplicationController
  skip_before_filter :verify_authenticity_token
  respond_to :json

  def index
    user = User.find(params[:user_id])
    respond_with(user.opportunities)
  end

  def create
    @opp = Opportunity.new(opp_params)
    if @opp.save
      respond_to do |f|
        f.json {render json: @opp}
      end
    end
  end

  def update
    @opp = Opportunity.find(params[:id])
    if @opp.update(opp_params)
      respond_to do |f|
        f.json {render json: @opp}
      end
    end
  end

  def show
    # raise params.inspect
    respond_with(Opportunity.find(params[:id]))
  end

  def destroy
    respond_with Opportunity.destroy(params[:id])
  end

  private
    def opp_params
      params.require('opportunity').permit(:product, :amount, :client_name, :won)
    end
end
