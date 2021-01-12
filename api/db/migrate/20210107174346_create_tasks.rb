class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description
      t.boolean :done, default: false
      t.datetime :deadline
      t.references :user,  foreign_key: true #null: false,

      t.timestamps
    end
  end
end
