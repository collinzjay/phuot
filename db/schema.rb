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

ActiveRecord::Schema.define(version: 20151130030205) do

  create_table "agendars", force: :cascade do |t|
    t.string   "description"
    t.datetime "from_date"
    t.datetime "to_date"
    t.integer  "phuot_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "agendars", ["phuot_id"], name: "index_agendars_on_phuot_id"

  create_table "albums", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.integer  "user_id"
    t.integer  "phuot_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "albums", ["phuot_id"], name: "index_albums_on_phuot_id"
  add_index "albums", ["user_id"], name: "index_albums_on_user_id"

  create_table "comments", force: :cascade do |t|
    t.string   "content"
    t.integer  "status"
    t.integer  "post_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "comments", ["post_id"], name: "index_comments_on_post_id"
  add_index "comments", ["user_id"], name: "index_comments_on_user_id"

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

  create_table "pictures", force: :cascade do |t|
    t.string   "URL"
    t.string   "description"
    t.integer  "album_id"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "pictures", ["album_id"], name: "index_pictures_on_album_id"
  add_index "pictures", ["user_id"], name: "index_pictures_on_user_id"

  create_table "posts", force: :cascade do |t|
    t.string   "content"
    t.integer  "status"
    t.integer  "phuot_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "posts", ["phuot_id"], name: "index_posts_on_phuot_id"
  add_index "posts", ["user_id"], name: "index_posts_on_user_id"

  create_table "tasks", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.integer  "user_id"
    t.integer  "phuot_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "tasks", ["phuot_id"], name: "index_tasks_on_phuot_id"
  add_index "tasks", ["user_id"], name: "index_tasks_on_user_id"

  create_table "tokens", force: :cascade do |t|
    t.string   "token"
    t.datetime "expired_date"
    t.integer  "user_id"
    t.boolean  "status"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "tokens", ["user_id"], name: "index_tokens_on_user_id"

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

  create_table "videos", force: :cascade do |t|
    t.string   "URL"
    t.string   "description"
    t.integer  "album_id"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "videos", ["album_id"], name: "index_videos_on_album_id"
  add_index "videos", ["user_id"], name: "index_videos_on_user_id"

end
