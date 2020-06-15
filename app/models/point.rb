# frozen_string_literal: true

class Point < ApplicationRecord
  default_scope { order(read_time: :asc) }
end
