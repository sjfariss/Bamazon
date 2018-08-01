# Bamazon
An Amazon-like storefront application that will take in orders from customers and deplete stock from the store's inventory.  Will utilize MySQL, npm Inquirer and Console.Table at minimum.


Instructions
CHALLENGE #1: Customer View

Create a MySQL Database called Bamazon.
Then create a table inside of that database called products.
The products table should have each of the following columns:
item_id (unique id for each product)
product_name (Name of product)
department_name
price (cost to customer)
stock_quantity (how much of the product is available in stores)
Populate this database with around 10 different products (i.e. insert "mock" data rows into this database and table).
Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
The app should then prompt users with two messages:
The first should ask them the ID of the product they would like to buy.
The second message should ask how many units of the product they would like to buy.
Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
if not, the app should log a phase like Insufficient quantity!, and then prevent the order from going through.
However, if your store does have enough of the product, you should fulfill the cutomer's order.
This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.
Technologies Used:
npm packages
mySQL / Sequel Pro
Node.js

To test locally you must copy bamazon.sql into mySQL and insert your own mySqL into the bamazonCustomer.js file

Author: Sharon Johnsen Fariss

Video link to see program in action:
https://drive.google.com/file/d/17veOY3K0Ml7lKk0_h0bYSR2pjYIqLIHv/view?usp=sharing

Screen shots:
#1 Initial load of products with prompt
#2 Successful purchase of product ID 11
#3 Showing the product has been reduced
#4 Shows insufficient inventory in stock and choice to reduce quantity
#5 Successful purchase of inventory after reducing quantity
<img width="803" alt="screen shot 1" src="https://user-images.githubusercontent.com/32149078/43546055-a1ef2696-95a5-11e8-819d-36fa132a609d.png">
<img width="808" alt="screen shot 2" src="https://user-images.githubusercontent.com/32149078/43546058-a4ef053c-95a5-11e8-8026-50321bcfd092.png">
<img width="818" alt="screen shot 3" src="https://user-images.githubusercontent.com/32149078/43546083-b749ffde-95a5-11e8-8da1-350fc0089a86.png">
<img width="1159" alt="screen shot 4" src="https://user-images.githubusercontent.com/32149078/43546090-bac44444-95a5-11e8-9088-39d40949e33a.png">
<img width="1157" alt="screen shot 5" src="https://user-images.githubusercontent.com/32149078/43546099-bd2a520a-95a5-11e8-9cc0-e5493d1972ef.png">
















