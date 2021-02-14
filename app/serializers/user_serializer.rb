class UserSerializer
  include JSONAPI::Serializer
  attributes :email, :avatar_url, :group_id, :group_invite
  
  attribute :full_name do |user|
    "#{user.first_name} " + "#{user.last_name}"
  end
end