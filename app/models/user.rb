class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # , :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,  :lockable, :confirmable
  has_many :pictures, as: :imageable
end
