var mysql = require("mysql");//load all npm packages
var inquirer = require("inquirer");
var Table = require("console.table");

//create and test connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "yourpassword",
  database: "bamazon"
});


//Welcome confirming connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("Welcome! ...you are now connected to the Bamazon Store!");
});

  connection.query("SELECT * FROM products", function(error, response) {
    if (error) throw error;
//Load product table
    console.table(response);
    shopBamazon();
  });
//Begin Prompts
function shopBamazon() {
  inquirer.prompt({
        name: "productID",
        type: "input",
        message: "What is the ID of the product that you would like to purchase?"
//Answers from user        
      }).then(function(answer) {
        if (answer.productID) {
          var itemRequest = parseInt(answer.productID);
          console.log("Customer Request: Product " + itemRequest);
          console.log("                    ");

          inquirer.prompt({
            name: "qty",
            type: "input",
            message: "What quantity would you like to purchase?"
          }).then(function(answer) {
              var itemQuantity = parseInt(answer.qty);
              
              console.log("Quantity Requested: " + itemQuantity);
              console.log("                    ");
//Function to verify enough stock available
              function verifyStock() {
                connection.query(
                  "SELECT * FROM products WHERE ?",
                  {
                    item_id: itemRequest
                  },

                  function(error, response) {
                  if (error) throw error;

                  if (itemQuantity > response[0].stock_quantity) {
                    console.log("Sorry!", " We don't have enough " + response[0].product_name + "'s in stock. Please select a smaller quantity or try again at another time.");
                    console.log("                    ");
                    shopBamazon()
                  }
//Know I could have done this cleaner
                  else {
                    console.log("Congratulation!", " We have your " + response[0].product_name + "'s in stock.");
                    console.log("                    ");
                    var availStock = response[0].stock_quantity;
                    var itemPrice = response[0].price;
                    var purchaseTotal = itemPrice * itemQuantity;
                    updateInventory(availStock, itemQuantity, itemRequest);
                    totalCost(purchaseTotal.toFixed(2), itemQuantity);  
                  }
                })
              }
              verifyStock()
          })
        }
      })
}
//Function to update inventory to new amount after purchase
function updateInventory(response, itemQuantity, itemRequest) {
  console.log("We are updating inventory and calculating your total purchase cost.");
  console.log("                    ");
  connection.query (
    "UPDATE products SET ? WHERE ?",
    [{stock_quantity: response - itemQuantity},
      {item_id: itemRequest}  
    ],
    function(error, res) {
      if (error) throw error;
      connection.end(); 
      
    }
  )
}
//Function to print out calculated purchase cost
function totalCost(purchaseTotal) {
  console.log("Your total purchase price is: $" + purchaseTotal);
  console.log("                    ");
  console.log("Thank you for shopping at Bamazon. Please check back frequently for our great specials!")
}
//Should add an exit or quit function