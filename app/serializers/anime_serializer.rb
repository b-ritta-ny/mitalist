class AnimeSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :bio, :image, :studio, :episodes
  
  has_one :user
end
