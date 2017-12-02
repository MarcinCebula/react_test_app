require 'faker'

inq = (0..20).map do |index|
  {
    "id" => index,
    "key" => index,
    "avatar" => Faker::Avatar.image,
    "petName" => Faker::Cat.name,
    "petID" => "P#{Faker::Number.number(6)}",
    "name" => Faker::Name.name,
    "address" => "#{Faker::Address.street_address}, #{Faker::Address.city} #{Faker::Address.state} #{Faker::Address.zip_code}",
    "received_at" => Faker::Date.between(Date.today - 10, Date.today).to_s,
    "email" => Faker::Internet.email,
    "phoneNumber" => Faker::PhoneNumber.cell_phone
  }
end
