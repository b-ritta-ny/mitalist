# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ title: "Star Wars" }, { title: "Lord of the Rings" }])
#   Character.create(title: "Luke", movie: movies.first)
User.destroy_all
# Anime.destroy_all

# Users 

User.create(username: "rittakelly", password: 'brittany', password_confirmation: 'brittany', first_name: 'Ritta', last_name: 'Kelly', bio: 'Model, Athlete, Engineer')
User.create(username: "jodanprice", password: 'ballislife', password_confirmation: 'ballislife', first_name: 'Jodan', last_name: 'Price', bio: 'Athlete and Entrepreneur')

# Animes added by users

# Anime.create(user_id: 1, title: "Jujutsu Kaisen", genre: "Shounen Action Fantasy", bio: "Yuji Itadori is an unnaturally fit high school student living in Sendai. On his deathbed, his grandfather instills two powerful messages within Yuji: always help others and die surrounded by people. Yuji's friends at the Occult Club attract Curses to their school when they unsealed a rotten finger talisman which Yuji swallowed to protect Megumi Fushiguro and their friends, becoming host to a powerful curse titled Ryomen Sukuna.", image: "true", studio: "MAPPA", episodes: "24", watching: true, finished: true, episodes_watched: 24, favorite: true)
# Anime.create(user_id: 2, title: "Jujutsu Kaisen", genre: "Shounen, Action, Fantasy", bio: "Yuji Itadori is an unnaturally fit high school student living in Sendai. On his deathbed, his grandfather instills two powerful messages within Yuji: always help others and die surrounded by people. Yuji's friends at the Occult Club attract Curses to their school when they unsealed a rotten finger talisman which Yuji swallowed to protect Megumi Fushiguro and their friends, becoming host to a powerful curse titled Ryomen Sukuna.", image: "true", studio: "MAPPA", episodes: "24", watching: true, finished: true, episodes_watched: 24, favorite: true)
# Anime.create(user_id: 1, title: "Seven Deadly Sins", genre: "Shounen, Action, Adventure, Fantasy", bio: "he Seven Deadly Sins are a band of knights in the land of Britannia who had disbanded ten years earlier after being framed for plotting a coup of the Liones Kingdom, the Holy Knights who sequestered them before taking control in the wake of a rebellion they organized. Liones' third princess, Elizabeth Liones, finds the Seven Deadly Sins' leader, Meliodas, before they search out his comrades so they can clear their titles and liberate Liones from the Holy Knights", image: "true", studio: "A-1 Pictures", episodes: "75", watching: true, finished: true, episodes_watched: 75, favorite: true)
# Anime.create(user_id: 2, title: "Seven Deadly Sins", genre: "Shounen, Action, Adventure, Fantasy", bio: "he Seven Deadly Sins are a band of knights in the land of Britannia who had disbanded ten years earlier after being framed for plotting a coup of the Liones Kingdom, the Holy Knights who sequestered them before taking control in the wake of a rebellion they organized. Liones' third princess, Elizabeth Liones, finds the Seven Deadly Sins' leader, Meliodas, before they search out his comrades so they can clear their titles and liberate Liones from the Holy Knights", image: "true", studio: "A-1 Pictures", episodes: "75", watching: true, finished: true, episodes_watched: 62, favorite: true)

puts "Seeding done."