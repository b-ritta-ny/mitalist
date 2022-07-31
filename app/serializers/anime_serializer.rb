class AnimeSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :bio, :image, :studio, :episodes, :watching, :finished, :episodes_watched, :favorite
  has_one :user
end
