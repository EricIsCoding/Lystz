class BlockSerializer
  include JSONAPI::Serializer
  attributes :name, :share

  attribute :creator do |block|
    "#{User.find(block.user_id).first_name}"
  end

  attribute :vendorName do |block|
    "#{block.vendor.name}"
  end

  has_many :items
  belongs_to :vendor

  included :items
end