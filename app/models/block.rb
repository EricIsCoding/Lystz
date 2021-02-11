class Block < ApplicationRecord
    has_many :items, :dependent => :destroy
    belongs_to :vendor

    has_many :shared_blocks
    has_many :users, through: :shared_blocks
end