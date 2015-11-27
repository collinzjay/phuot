# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150728014904) do

  create_table "phuots", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.integer  "status"
    t.datetime "start_time"
    t.datetime "end_time"
    t.integer  "user_id"
    t.string   "thumbnail"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "phuots", ["user_id"], name: "index_phuots_on_user_id"

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "encrypted_password"
    t.string   "reset_password"
    t.datetime "reset_password_sent_at"
    t.integer  "remember_created_at"
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "name"
    t.string   "token"
    t.string   "avatar"
    t.integer  "status"
    t.string   "facebook_id"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

end
