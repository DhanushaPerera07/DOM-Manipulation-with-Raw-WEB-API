/*===============================================================================
 * Global Variables
 *===============================================================================*/

// customers array
var customers = [];

// customer table reference
var tblCustomer = document.getElementById('tbl-customers');

/*===============================================================================
 * Init
 *===============================================================================*/

init();

function init() {
    // Todo: add the initialization code if any
}

/*===============================================================================
 * Event Handlers and Timers
 *===============================================================================*/

// Todo: add all event listeners and handlers here

/*===============================================================================
 * Functions
 *===============================================================================*/

/* Constructor function */
function Customer(id, name, address) {
    this.id = id;
    this.name = name;
    this.address = address;

    // this.printDetails = function () {
    //     console.log(this.id, this.name, this.address);
    // }
}

// print customer details function
Customer.prototype.printDetails = function () {
    console.log('Customer details: ' + this.id , this.name, this.address);
}


var c1 = new Customer(1,"Dhanusha","Kelaniya");
var c2 = new Customer(2,"Buddhika","Colombo");
var c3 = new Customer(3,"Sandaruwan","Kiribathgoda");
var c4 = new Customer(4,"Perera","Gampaha");

customers.push(c1,c2,c3,c4);

for (var i = 0; i < customers.length ; i++) {
    customers[i].printDetails();
}


// remove table footer when no customers are found
// console.log(tblCustomer.children[2]);
tblCustomer.children[2];

// if no of customers are 0 table should display the footer section
if (customers.length != 0){
tblCustomer.removeChild(tblCustomer.children[2]);

//display customer list in the customer table
}


/** Insert new customer to the customer list
 * */
function insertCustomer() {

}


/** Update existing customer
 * @param id = id of the customer which is to be updated
 * */
function updateCustomer(id) {

}


/** Delete existing customer
 * @param id = id of the customer which is to be deleted
 * */
function deleteCustomer(id) {

}

/** This function will return true if particular customer is found,
 * otherwise return false
 * */
function isFoundCustomer(id) {
    var isFound = false;
    return isFound;
}




/*function customer(id, name, address) {
    return{
        id: id,
        name: name,
        address: address,
        printDetails: function(){
            console.log(this.id,this.name,this.address);
        }
    };
}

var c1 = customer(1,"Dhanusha","Kelaniya");
var c2 = customer(2,"Buddhika","Colombo");
var c3 = customer(3,"Sandaruwan","Kiribathgoda");
var c4 = customer(4,"Perera","Gampaha");

// c1.printDetails();

customers.push(c1,c2,c3,c4);

for (var i = 0; i < customers.length ; i++) {
    customers[i].printDetails();
}*/