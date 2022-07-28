class CreateAnimes < ActiveRecord::Migration[7.0]
  def change
    create_table :animes do |t|
      t.integer :user_id
      t.string :title
      t.string :genre
      t.text :bio
      t.string :image
      t.string :studio
      t.integer :episodes
      t.boolean :watching
      t.boolean :finished
      t.integer :episodes_watched
      t.boolean :favorite

      t.timestamps
    end
  end
end
