class AddAvatarToPictures < ActiveRecord::Migration[6.0]
  def change
    add_column :pictures, :avatar, :string
  end
end
