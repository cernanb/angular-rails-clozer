class OpportunitySerializer < ActiveModel::Serializer
  attributes :id, :product, :amount, :client_name, :won
  has_many :notes
end
