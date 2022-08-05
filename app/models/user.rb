class User < ApplicationRecord
    has_secure_password
    # validates :first_name, presence: true
    # validates :last_name, presence: true
    
    has_many :animes
    has_many :favorites
    has_one :watchlist

    validates :username, uniqueness: true
    validates :username, presence: true
end
