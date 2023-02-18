const { v4 } = require('uuid');

let mockContact = [
  {
    id: v4(),
    name: 'User 0',
    email: 'User0@mail.com',
    phone: '123440',
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

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(
        mockContact.find((contact) => contact.email === email),
      );
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      mockContact = mockContact.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      mockContact.push(newContact);

      resolve(newContact);
    });
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      mockContact = mockContact.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactRepository();
