class Vendor < ApplicationRecord
    validates :name, presence: true

    belongs_to :user

    has_many :blocks, :dependent => :destroy
    has_many :items, through: :blocks, :dependent => :destroy
end