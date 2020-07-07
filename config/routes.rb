# frozen_string_literal: true

Rails.application.routes.draw do
  use_doorkeeper

  devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'users/registrations' }
  mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql' if Rails.env.development?
  post '/graphql', to: 'graphql#execute'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'app#index'
  post '/images/new', to: 'image#create'
  get '*path', to: 'app#index', via: [:get]
end

