const { v4 } = require('uuid');

let mockContact = [
  {
    id: v4(),
    name: 'User 0',
    email: 'User0@mail.com',
    phone: '123440',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'User 1',
    email: 'User1@mail.com',
    phone: '123441',
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(mockContact);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(
        mockContact.find((contact) => contact.id === id),
      );
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      mockContact = mockContact.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
