class CreateAgendars < ActiveRecord::Migration
  def change
    create_table :agendars do |t|
      t.string :description
      t.datetime :from_date
      t.datetime :to_date
      t.references :phuot, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
