# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_20_195604) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "library_components", force: :cascade do |t|
    t.string "name"
    t.string "img_src"
    t.string "html_code"
    t.string "css_code"
    t.string "js_code"
  end

  create_table "user_components", force: :cascade do |t|
    t.string "name"
    t.string "img_src"
    t.integer "user_id"
    t.string "html_code"
    t.string "css_code"
    t.string "js_code"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
  end

end
