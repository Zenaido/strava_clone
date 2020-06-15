class AddGeogrphaic < ActiveRecord::Migration[6.0]
  def change
    change_table :routes do |t|
      t.column :route_2, :geometry, geographic: true
    end
  end
end
