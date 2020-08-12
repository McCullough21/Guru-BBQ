# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "jenna", password: "happy")
Comment.create(content: "Cooked pork butt at 275 degrees until internal temp of 160.  Wrapped in foil and maintained temp until internal temp hit 198.", user_id: 1, user_username: "jenna", meatType: "ribs")
Comment.create(content: "Cooked pork butt at 250 degrees until internal temp of 160.  Wrapped in foil and maintained temp until internal temp hit 198.", user_id: 1, user_username: "jenna", meatType: "porkButt")
Comment.create(content: "Cooked pork butt at 200 degrees until internal temp of 160.  Wrapped in foil and maintained temp until internal temp hit 198.", user_id: 1, user_username: "jenna", meatType: "porkButt")
Comment.create(content: "Cooked pork butt at 300 degrees until internal temp of 160.  Wrapped in foil and maintained temp until internal temp hit 198.", user_id: 1, user_username: "jenna", meatType: "ribs")