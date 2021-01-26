class Vendor < ApplicationRecord
    validates :name, presence: true

    has_many :blocks, :dependent => :destroy
    has_many :items, through: :blocks, :dependent => :destroy
end
