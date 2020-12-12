class Permission < ApplicationRecord
    has_many :users_permissions
    has_many :users, through: :users_permissions

    validates :name, presence: true

    enum user_types: [:guest, :clerk, :manager, :admin]
end
