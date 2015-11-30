class CreateTokens < ActiveRecord::Migration
  def change
    create_table :tokens do |t|
      t.string :token
      t.datetime :expired_date
      t.references :user, index: true, foreign_key: true
      t.boolean :status

      t.timestamps null: false
    end
  end
end
