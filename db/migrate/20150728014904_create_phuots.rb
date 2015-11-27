class CreatePhuots < ActiveRecord::Migration
  def change
    create_table :phuots do |t|
      t.string :title
      t.text :description
      t.integer :status
      t.datetime :start_time
      t.datetime :end_time
      t.references :user, index: true, foreign_key: true
      t.string :thumbnail

      t.timestamps null: false
    end
  end
end
