class Block < ApplicationRecord
    has_many :items, :dependent => :destroy
    belongs_to :vendor
    belongs_to :user

    has_one :group

    scope :shared, -> { where(share: true) }
end