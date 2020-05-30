class CreatePictures < ActiveRecord::Migration[6.0]
  def change
    create_table :pictures do |t|
      t.references :imageable, null: false, polymorphic: true  
      t.string :name

      t.timestamps
    end 
  end
end
