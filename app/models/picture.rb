class Picture < ApplicationRecord
  mount_uploader :avatar, AvatarUploader
  belongs_to :imageable, polymorphic: true
end
