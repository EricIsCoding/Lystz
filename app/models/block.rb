class Block < ApplicationRecord
    has_many :items, :dependent => :destroy
    belongs_to :vendor
end
