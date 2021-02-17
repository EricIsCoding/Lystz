class GroupSerializer
  include JSONAPI::Serializer
  attributes :group_name

  attribute :user_ids do |group|
    group.users.group_added.map do |user|
      user.id
    end
  end

  attribute :blocks do |group|
    group.blocks.shared.map do |block|
      BlockSerializer.new(block, {include: [:items]}).serializable_hash
    end
  end

  attribute :blockIds do |group|
    group.blocks.shared.map do |block|
      "#{block.id}"
    end
  end
end