class Collaboration < ApplicationRecord
    validates :collaborator, presence: true
    validates :piece, presence: true
    validates :format, presence: true
end
