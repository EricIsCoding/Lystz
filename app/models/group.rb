class Group < ApplicationRecord
    has_many :users
    has_many :blocks, through: :users
end