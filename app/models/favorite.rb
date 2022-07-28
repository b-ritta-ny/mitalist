class Favorite < ApplicationRecord
    belongs_to :user
    has_many :animes, through: :user
end
