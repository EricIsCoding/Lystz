class API::VendorsController < ApplicationController
  before_action :set_vendor, only: [:show, :update, :destroy]

  # GET /vendors
  def index
    @vendors = Vendor.all.filter{|vendor| vendor.user_id == current_user.id}

    render json: VendorSerializer.new(@vendors).serializable_hash.to_json
  end

  # GET /vendors/1
  def show
    render json: VendorSerializer.new(@vendor).serializable_hash.to_json
  end

  # POST /vendors
  def create

    @vendor = Vendor.new(vendor_params)

    @vendor.user = current_user

    if @vendor.save

      render json: VendorSerializer.new(@vendor).serializable_hash.to_json
    else
      render json: @vendor.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /vendors/1
  def update
    if @vendor.update(vendor_params)
      render json: @vendor
    else
      render json: @vendor.errors, status: :unprocessable_entity
    end
  end

  # DELETE /vendors/1
  def destroy
    @vendor.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vendor
      @vendor = Vendor.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def vendor_params
      params.require(:vendor).permit(:name, :website, :user_id)
    end
end
