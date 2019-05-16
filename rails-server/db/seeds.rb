# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dragon.destroy_all
User.destroy_all

user = User.create({ 
    name: 'Hiccup',
    password: '1234'
})

dragons = [
    {
        "name": "Toothless",
        "description": "A Night Fury",
        "image": "https://www.wikihow.com/images/b/b2/Draw-Toothless-Step-24.jpg",
        "atWar": false,
        "user_id": user.id
    },
    {
        "name": "Smaug",
        "description": "He is Fire, He is Death",
        "image": "http://media.comicbook.com/uploads1/2015/08/cumbersmaug-147620.jpg",
        "atWar": false,
        "user_id": user.id
    },
    {
        "name": "Bozar",
        "description": "An uninteresting dragon",
        "image": "https://static.boredpanda.com/blog/wp-content/uploads/2015/05/What-are-dragons-doing-nowadays-fb3.jpg",
        "atWar": false,
        "user_id": user.id
    },
    {
        "name": "Tomar",
        "description": "An interesting dragon",
        "image": "https://media.giphy.com/media/bU660Y0VKPvCE/giphy.gif",
        "atWar": false,
        "user_id": user.id
    }
]

dragons.each do | dragon |
    Dragon.create(dragon)
end