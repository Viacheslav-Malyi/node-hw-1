const {
  addContact,
  listContacts,
  removeContact,
  getContactById,
} = require("./contacts");

const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      await listContacts();
      console.table(await listContacts());
      break;

    case "get":
      console.log("invoke get");
      await getContactById(id);
      console.table(await listContacts());
      console.table(await getContactById(id));
      break;

    case "add":
      console.log("invoke add");
      console.table(await listContacts());
      await addContact(name, email, phone);

      console.table(await listContacts());
      break;

    case "remove":
      console.table(await listContacts());
      await removeContact(id);
      console.table(await listContacts());
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
