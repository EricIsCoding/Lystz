class Item < ApplicationRecord
    belongs_to :block
    belongs_to :vendor
end