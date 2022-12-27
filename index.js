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

      break;

    case "get":
      await getContactById(id);
      break;

    case "add":
      console.log("invoke add");
      await addContact(name, email, phone);
      break;

    case "remove":
      await removeContact(id);
      console.log("invoke remove");
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
