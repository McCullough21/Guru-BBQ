class User < ApplicationRecord
    has_many :comments
    has_secure_password
    validates :name, uniqueness: true

end
