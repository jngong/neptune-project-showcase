# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Student.destroy_all
Project.destroy_all

# Students seed data


@bryce = Student.create!(full_name: "Bryce Langille", linkedin_url: "https://www.linkedin.com/in/bryce-langille1995/")
@charaf = Student.create!(full_name: "Charaf Boulafaa", linkedin_url: "https://www.linkedin.com/in/charaf-boulafaa/") 
@christian = Student.create!(full_name: "Christian Matos", linkedin_url:"https://www.linkedin.com/in/christianrmatos/")
@colin = Student.create!(full_name: "Colin Malcolm", linkedin_url: "https://www.linkedin.com/in/colinpmalcolm/")
@dan = Student.create!(full_name: "Dan Dalgatov", linkedin_url: "https://www.linkedin.com/in/dandalgatov/")
@estevan = Student.create!(full_name: "Estevan Acevedo", linkedin_url: "https://www.linkedin.com/in/estevan-acevedo/")
@felicia = Student.create!(full_name: "Felicia Csolak", linkedin_url: "https://www.linkedin.com/in/felicia-csolak/")
@gerand = Student.create!(full_name: "Gerand McDowell", linkedin_url: "https://www.linkedin.com/in/gerand-mcdowell-6102851b1/")
@jack = Student.create!(full_name: "Jack South", linkedin_url: "https://www.linkedin.com/in/jack-south-69a7a8167/")
@jacky = Student.create!(full_name: "Jacky Yang", linkedin_url: "https://www.linkedin.com/in/jackycyang/")
@johnathan = Student.create!(full_name: "Johnathan Umana", linkedin_url: "https://www.linkedin.com/in/johnathan-umana-658b06170/")
@joshua = Student.create!(full_name: "Joshua Rizek", linkedin_url: "https://www.linkedin.com/in/joshua-rizek-1a6a28199/")
@kate = Student.create!(full_name: "Kate Fang", linkedin_url: "https://www.linkedin.com/in/katefang33/")
@kelly = Student.create!(full_name: "Kelly Bergin", linkedin_url: "https://www.linkedin.com/in/kelly-b-b07b2980/")
@nikita = Student.create!(full_name: "Nikita Savelev", linkedin_url: "https://www.linkedin.com/in/nikita-savelev-129994140/")
@olu = Student.create!(full_name: "Olu Kareem", linkedin_url: "https://www.linkedin.com/in/olu-kareem-a227591b0/")
@peterc = Student.create!(full_name: "Peter Cho", linkedin_url: "https://www.linkedin.com/in/pcho90/")
@peters = Student.create!(full_name: "Peter Skrzypczak", linkedin_url: "https://www.linkedin.com/in/peter-skrzypczak/")
@scott = Student.create!(full_name: "Scott Pick", linkedin_url: "https://www.linkedin.com/in/scott-pick-121a5519b/")
@shean = Student.create!(full_name: "Shean Johnson", linkedin_url: "https://www.linkedin.com/in/sheanj/")
@shayne = Student.create!(full_name: "Shayne Sebro", linkedin_url: "https://www.linkedin.com/in/shaynesebro/")
@wannamaker = Student.create!(full_name: "Wannamaker Charles", linkedin_url: "https://www.linkedin.com/in/wannamaker-charles-5718a41b0/")
@zain = Student.create!(full_name: "Zain Sattar", linkedin_url: "https://www.linkedin.com/in/zain-sattar-0368611b0/")
@zach = Student.create!(full_name: "Zach Glassman", linkedin_url: "https://www.linkedin.com/in/zacharyglassman/")

puts "#{Student.count} students created"

# Projects seed data 

Project.create!(title: "Pokedex", project_url: "https://pages.git.generalassemb.ly/zainsattar18/Pokedex-Neptune-Navy/", github_url: "https://git.generalassemb.ly/zainsattar18/Pokedex-Neptune-Navy", img_url: "https://media.giphy.com/media/10LKovKon8DENq/giphy.gif", unit: 1, students:[@zain])

Project.create!(title: "NYC HHC Patient Satisfaction Insight", project_url: "https://pages.git.generalassemb.ly/Wannamaker/NYC-HHC-Patient-Satisfaction-Insight/", github_url: "https://git.generalassemb.ly/Wannamaker/NYC-HHC-Patient-Satisfaction-Insight", img_url: "https://cdn.pixabay.com/photo/2016/08/10/20/26/stethoscope-1584223_960_720.jpg", unit: 1, students:[@wannamaker])

Project.create!(title: "PrepChef", project_url: "https://prepchef.netlify.app/", github_url: "https://github.com/snsebro/prepnchef", img_url: "https://media.giphy.com/media/eeYtwiYHARla8/giphy.gif", unit: 2, students:[@shayne])


Project.create!(title: "Searchies", project_url: "https://epic-goldberg-ef1551.netlify.app/", github_url: "https://github.com/kcip/searchies", img_url: "https://cdn.pixabay.com/photo/2017/11/24/10/43/admission-2974645_960_720.jpg", unit: 2, students:[@scott])

Project.create!(title: "Tarou", project_url: "https://tarou.netlify.app/", github_url: "https://github.com/kellymakesstuff/tarou-tarot-card-reader", img_url: "https://media.giphy.com/media/8lOsZwQ9wLnhu/giphy.gif", unit: 2, students: [@kelly])

Project.create!(title: "YouLearn", project_url: "https://loving-lumiere-00a7ae.netlify.app/", github_url: "https://github.com/Charafboulafaa/YouLearn", img_url: "https://cdn.pixabay.com/photo/2017/10/10/21/48/filmmaker-2838932_1280.jpg", unit: 2, students:[@charaf])

Project.create!(title: "Blockbusted", project_url: "https://blockbusted.netlify.app/", github_url: "https://git.generalassemb.ly/brycelangille/BlockBusted", img_url: "https://cdn.pixabay.com/photo/2017/07/31/18/28/room-2559790_960_720.jpg", unit: 2, students:[@bryce])

Project.create!(title: "Greedos", project_url: "https://greedosbb.netlify.app/", github_url: "https://github.com/malcolmc10/GreedosBB/", img_url: "https://media.giphy.com/media/YfCuW2maPixri/giphy.gif", unit: 2, students:[@colin])

Project.create!(title: "Apollo Weather", project_url: "http://ap-weather.surge.sh/", github_url: "https://github.com/glolorun/AP-Weather", img_url: "https://media.giphy.com/media/QRhtqYeEywJI4/giphy.gif", unit: 2, students:[@olu])

Project.create!(title: "One World", project_url: "https://one-world-p2.netlify.app/", github_url: "https://github.com/zainsattar18/one-world", img_url: "https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497_960_720.jpg", unit: 2, students: [@zain])

Project.create!(title: "Studio Ghibli", project_url: "https://distracted-galileo-46d909.netlify.app/", github_url: "https://github.com/jackyclyang/studio-ghibli", img_url: "https://www.theedgesusu.co.uk/wp-content/uploads/2016/01/studio_ghibli.jpg", unit: 2, students: [@jacky])

Project.create!(title: "Book Viewer", project_url: "http://bookviewer.surge.sh/", github_url: "https://github.com/deucemac/book-viewer", img_url: "https://media.giphy.com/media/1TgECF0mNVirC/giphy.gif", unit: 2, students: [@gerand])

Project.create!(title: "Un-Bored Me", project_url: "https://un-bored-me.netlify.app/", github_url: "https://github.com/rizekj12/unboredMe", img_url: "https://media.giphy.com/media/5gUnOrltPvZzW/giphy.gif", unit: 2, students: [@joshua])

Project.create!(title: "aMDB", project_url: "https://unruffled-curran-775cfe.netlify.app/", github_url: "https://github.com/pcho90/amdb", img_url: "https://media.giphy.com/media/VxbP9tLeKzazm/giphy.gif", unit: 2, students: [@peterc])

chefs_choice = Project.create!(title: "Chef's Choice", project_url: "http://chefs-choice.surge.sh/", github_url: "https://github.com/snsebro/chefs-choice", img_url: "https://cdn.pixabay.com/photo/2015/10/26/07/21/soup-1006694_1280.jpg", unit: 3, students: [@gerand, @shayne, @shean, @jack, @bryce])

good_cuisine = Project.create!(title: "Good Cuisine", project_url: "http://slow-potato.surge.sh/", github_url: "https://github.com/kcip/good-cuisine", img_url: "https://cdn.pixabay.com/photo/2014/10/22/16/38/ingredients-498199_1280.jpg", unit: 3, students: [@scott, @jacky, @johnathan, @christian])

spork = Project.create!(title: "Spork", project_url: "http://spork-app.surge.sh/", github_url: "https://github.com/kellymakesstuff/spork", img_url: "https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_1280.jpg", unit: 3, students: [@kelly, @felicia, @zain, @joshua, @zach])

recipe_box = Project.create!(title: "Recipe Box", project_url: "http://foodiesandgoodiesrecipebox.surge.sh/", github_url: "https://github.com/malcolmc10/P3-recipebox", img_url: "https://cdn.pixabay.com/photo/2017/03/17/10/29/breakfast-2151201_960_720.jpg", unit: 3, students: [@colin, @dan, @charaf, @nikita, @peters])

yummy_dish = Project.create!(title: "Yummy Dish", project_url: "http://tan-wrench.surge.sh/", github_url: "https://github.com/pcho90/yummy-dish", img_url: "https://cdn.pixabay.com/photo/2016/08/01/17/28/table-1561597_960_720.jpg", unit: 3, students: [@peterc, @kate, @estevan, @olu, @wannamaker])




puts "#{Project.count} projects created"