class CollaborationSerializer
  include JSONAPI::Serializer
  attributes :collaborator, :piece, :format, :information
end
