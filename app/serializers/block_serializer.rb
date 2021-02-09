class BlockSerializer
  include JSONAPI::Serializer
  attributes :name, :creator

  attribute :vendorName do |object|
    "#{object.vendor.name}"
  end

  has_many :items
  belongs_to :vendor
end
