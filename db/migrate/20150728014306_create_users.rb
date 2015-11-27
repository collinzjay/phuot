class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :encrypted_password
      t.string :reset_password
      t.datetime :reset_password_sent_at
      t.datetime :remember_created_at
      t.integer :remember_created_at
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.string :current_sign_in_ip
      t.string :last_sign_in_ip
      t.string :name
      t.string :token
      t.string :avatar
      t.integer :status
      t.string :facebook_id

      t.timestamps null: false
    end
  end
end
