// Array of contacts
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

// Function to display a single contact by index
function showContact(contacts, index) {
    // Check if contacts is an array and index is within range
    if (contacts instanceof Array && index >= 0 && index < contacts.length) {
        console.log(`Name: ${contacts[index].name}`);
        console.log(`Phone: ${contacts[index].phone}`);
        console.log(`Email: ${contacts[index].email}`);
    } else {
        console.log("Invalid index or contacts array.");
    }
}

// Function to display all contacts
function showAllContacts(contacts) {
    // Check if contacts is an array
    if (contacts instanceof Array) {
        // Iterate over each contact and display its details
        contacts.forEach((contact, index) => {
            console.log(`Contact ${index + 1}:`);
            console.log(`Name: ${contact.name}`);
            console.log(`Phone: ${contact.phone}`);
            console.log(`Email: ${contact.email}`);
        });
    } else {
        console.log("Invalid contacts array.");
    }
}

// Function to add a new contact
function addNewContact(contactList, name, phone, email) {
    // Check if contactList is an array and if name, phone, and email are provided
    if (contactList instanceof Array && name && phone && email) {
        // Add the new contact to the contactList array
        contactList.push({ name, phone, email });
        console.log("Contact added successfully.");
    } else {
        console.log("Invalid arguments for adding a new contact.");
    }
}

// Main function to handle user input and program flow
function main() {
    // Prompt user for option
    let option = parseInt(prompt(`Choose an option:
1. Show contact
2. Show all contacts
3. Add new contact
4. Exit`));

    // Perform action based on user option
    switch (option) {
        case 1:
            // Prompt user for contact index and display the contact
            let index = parseInt(prompt("Enter the index of the contact to show:"));
            showContact(contacts, index);
            break;
        case 2:
            // Display all contacts
            showAllContacts(contacts);
            break;
        case 3:
            // Prompt user for new contact details and add the contact
            let name = prompt("Enter name:");
            let phone = prompt("Enter phone:");
            let email = prompt("Enter email:");
            addNewContact(contacts, name, phone, email);
            break;
        case 4:
            // Exit the program
            console.log("Exiting program.");
            break;
        default:
            console.log("Invalid option. Exiting program.");
            break;
    }
}

// Call the main function to start the program
main();

