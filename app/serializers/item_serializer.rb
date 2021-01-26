class ItemSerializer
  include JSONAPI::Serializer
  attributes :name, :brand, :description, :quantity, :active

  belongs_to :block
  belongs_to :vendor
end
