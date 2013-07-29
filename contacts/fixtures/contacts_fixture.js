var Contacts_Fixture_Contact = [{
    id: 1,
    name: 'William',
    address: '1 CanJS Way',
    email: 'william@husker.com',
    phone: '0123456789',
    category: 'co-workers'
}, {
    id: 2,
    name: 'Laura',
    address: '1 CanJS Way',
    email: 'laura@starbuck.com',
    phone: '0123456789',
    category: 'friends'
}, {
    id: 3,
    name: 'Lee',
    address: '1 CanJS Way',
    email: 'lee@apollo.com',
    phone: '0123456789',
    category: 'family'
}];

can.fixture('GET /contacts', function(){
  return [Contacts_Fixture_Contact];
});