class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :project_url
      t.string :img_url
      t.string :github_url
      t.integer :unit

      t.timestamps
    end
  end
end
