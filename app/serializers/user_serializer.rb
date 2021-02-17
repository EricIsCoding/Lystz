class UserSerializer
  include JSONAPI::Serializer
  attributes :email, :avatar_url
  
  attribute :fullName do |user|
    "#{user.first_name} " + "#{user.last_name}"
  end

  attribute :group do |user|
    if user.group
    {groupId: user.group_id, 
    groupName: user.group.group_name,
    sharedBlockCount: user.group.blocks.shared.count}
    elsif user.group_invite && user.group_invite.status == "pending"
      {invite: {
        groupId: user.group_invite.group_id,
        groupName: user.group_invite.group_name,
        invitedBy: user.group_invite.invited_by,
        status: user.group_invite.status
      }}
    else
      {}
    end
  end
end