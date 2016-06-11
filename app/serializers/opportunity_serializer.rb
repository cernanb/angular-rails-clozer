class OpportunitySerializer < ActiveModel::Serializer
  attributes :id, :product, :amount, :client_name, :won, :created_at
  has_many :notes
end
