class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :vendors, :dependent => :destroy 
  
  has_many :shared_blocks
  has_many :blocks, through: :shared_blocks
end