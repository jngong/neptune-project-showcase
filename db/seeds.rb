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

students = [
  ["Zain Sattar", "https://www.linkedin.com/in/zain-sattar-0368611b0/"],
  ["Wannamaker Charles", "https://www.linkedin.com/in/wannamaker-charles-5718a41b0/"],
  ["Kelly Bergin", "https://www.linkedin.com/in/kelly-b-b07b2980/"],
  ["Bryce Langille", "https://www.linkedin.com/in/bryce-langille1995/"],
  ["Charaf Boulafaa", "https://www.linkedin.com/in/charaf-boulafaa/"],
  ["Jacky Yang", "https://www.linkedin.com/in/jackycyang/"],
  ["Christian Matos", "https://www.linkedin.com/in/christianrmatos/"],
  ["Colin Malcolm", "https://www.linkedin.com/in/colinpmalcolm/"],
  ["Shean Johnson", "https://www.linkedin.com/in/sheanj/"],
  ["Dan Dalgatov", "https://www.linkedin.com/in/dandalgatov/"],
  ["Estevan Acevedo", "https://www.linkedin.com/in/estevan-acevedo/"],
  ["Felicia Csolak", "https://www.linkedin.com/in/felicia-csolak/"],
  ["Gerand McDowell", "https://www.linkedin.com/in/gerand-mcdowell-6102851b1/"],
  ["Jack South", "https://www.linkedin.com/in/jack-south-69a7a8167/"],
  ["Johnathan Umana", "https://www.linkedin.com/in/johnathan-umana-658b06170/"],
  ["Joshua Rizek", "https://www.linkedin.com/in/joshua-rizek-1a6a28199/"],
  ["Kate Fang", "https://www.linkedin.com/in/katefang33/"],
  ["Nikita Savelev", "https://www.linkedin.com/in/nikita-savelev-129994140/"],
  ["Olu Kareem", "https://www.linkedin.com/in/olu-kareem-a227591b0/"],
  ["Peter Cho", "https://www.linkedin.com/in/pcho90/"],
  ["Peter Skrzypczak", "https://www.linkedin.com/in/peter-skrzypczak/"],
  ["Scott Pick", "https://www.linkedin.com/in/scott-pick-121a5519b/"],
  ["Shayne Sebro", "https://www.linkedin.com/in/shaynesebro/"],
  ["Zach Glassman", "https://www.linkedin.com/in/zacharyglassman/"]
]

students.each do |student| 
  Student.create!(
    full_name: student[0],
    linkedin_url: student[1]
  )
end

puts "#{Student.count} students created"

# Projects seed data 

chefs_choice = Project.create!(title: "Chef's Choice", project_url: "http://chefs-choice.surge.sh/", github_url: "https://github.com/snsebro/chefs-choice", img_url: "https://cdn.pixabay.com/photo/2015/10/26/07/21/soup-1006694_1280.jpg", unit: 3)

good_cuisine = Project.create!(title: "Good Cuisine", project_url: "http://slow-potato.surge.sh/", github_url: "https://github.com/kcip/good-cuisine", img_url: "https://cdn.pixabay.com/photo/2014/10/22/16/38/ingredients-498199_1280.jpg", unit: 3)

spork = Project.create!(title: "Spork", project_url: "http://spork-app.surge.sh/", github_url: "https://github.com/kellymakesstuff/spork", img_url: "https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_1280.jpg", unit: 3)

recipe_box = Project.create!(title: "Recipe Box", project_url: "http://foodiesandgoodiesrecipebox.surge.sh/", github_url: "https://github.com/malcolmc10/P3-recipebox", img_url: "https://cdn.pixabay.com/photo/2017/03/17/10/29/breakfast-2151201_960_720.jpg", unit: 3)

yummy_dish = Project.create!(title: "Yummy Dish", project_url: "http://tan-wrench.surge.sh/", github_url: "https://github.com/pcho90/yummy-dish", img_url: "https://cdn.pixabay.com/photo/2016/08/01/17/28/table-1561597_960_720.jpg", unit: 3)

p1_zain = Project.create!(title: "Pokedex", project_url: "https://pages.git.generalassemb.ly/zainsattar18/Pokedex-Neptune-Navy/", github_url: "https://git.generalassemb.ly/zainsattar18/Pokedex-Neptune-Navy", img_url: "https://media.giphy.com/media/10LKovKon8DENq/giphy.gif", unit: 1)

p2_zain = Project.create!(title: "One World", project_url: "https://one-world-p2.netlify.app/", github_url: "https://github.com/zainsattar18/one-world", img_url: "https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497_960_720.jpg", unit: 2)

p1_wannamaker = Project.create!(title: "NYC HHC Patient Satisfaction Insight", project_url: "https://pages.git.generalassemb.ly/Wannamaker/NYC-HHC-Patient-Satisfaction-Insight/", github_url: "https://git.generalassemb.ly/Wannamaker/NYC-HHC-Patient-Satisfaction-Insight", img_url: "https://cdn.pixabay.com/photo/2016/08/10/20/26/stethoscope-1584223_960_720.jpg", unit: 1)

p2_kelly = Project.create!(title: "Tarou", project_url: "https://tarou.netlify.app/", github_url: "https://github.com/kellymakesstuff/tarou-tarot-card-reader", img_url: "https://media.giphy.com/media/8lOsZwQ9wLnhu/giphy.gif", unit: 2)

Student.find_by(full_name: "Zain Sattar").projects.push(p1_zain, p2_zain)
Student.find_by(full_name: "Wannamaker Charles").projects.push(p1_wannamaker)
Student.find_by(full_name: "Kelly Bergin").projects.push(p2_kelly)


puts "#{Project.count} projects created"