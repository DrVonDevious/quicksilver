class CreateLibraryComponents < ActiveRecord::Migration[6.0]
  def change
    create_table :library_components do |t|
      t.string :name
      t.string :img_src
      t.string :html_code
      t.string :css_code
      t.string :js_code
    end
  end
end
