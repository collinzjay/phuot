class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :URL
      t.string :description
      t.references :album, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
