class User < ApplicationRecord
  
  has_many :users_permissions
  has_many :permissions, through: :users_permissions
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable
  
  def name
    first_name.to_s + ' ' + last_name.to_s
  end

  def permission(permission, user_type)
    return  self.permissions.where(name: permission, user_type: user_type).count > 0 ? true : false
  end

  def has_permission(permission_id)
    self.permissions.where(id: permission_id).count > 0 ? true : false    
  end

  def user_type_in(users_types)
    users_types.include?(self.user_types)
  end
      
end
