class CreatePoints < ActiveRecord::Migration[6.0]
  def change
    create_table :points do |t|
      t.float :latitude
      t.float :longitude
      t.datetime :read_time

      t.timestamps
    end
  end
end
