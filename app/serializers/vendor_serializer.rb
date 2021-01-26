class VendorSerializer
  include JSONAPI::Serializer
  attributes :name, :website

  has_many :items
  has_many :blocks
end
