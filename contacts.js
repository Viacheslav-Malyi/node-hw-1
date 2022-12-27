const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve(__dirname, "db/contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath);
    const conyactsParse = JSON.parse(contacts);
    console.table(conyactsParse);
    return conyactsParse;
  } catch (error) {
    console.error(error);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const contactById = contacts.filter((el) => el.id === contactId);
    console.table(contactById);
  } catch (error) {
    console.error(error);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const updateContcts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    console.table(updateContcts);
    await fs.writeFile(contactsPath, JSON.stringify(updateContcts, null, 2));
  } catch (error) {
    console.error(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const id = nanoid();
    const contact = { id, name, email, phone };
    const contacts = await listContacts();
    contacts.push(contact);
    console.table(contacts);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  listContacts,
  addContact,
  removeContact,
  getContactById,
};
