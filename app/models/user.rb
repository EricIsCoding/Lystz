class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :vendors, :dependent => :destroy 
  has_many :blocks

  belongs_to :group, optional: true

  scope :group_added, -> { where(group_invite: "accepted")}
end