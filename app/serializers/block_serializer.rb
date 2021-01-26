class BlockSerializer
  include JSONAPI::Serializer
  attributes :name, :creator

  has_many :items
  belongs_to :vendor
end
