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

Video link to see program in action:
https://drive.google.com/file/d/17veOY3K0Ml7lKk0_h0bYSR2pjYIqLIHv/view?usp=sharing

Screen Shot examples:
#1 Showing a successful purchase.
Welcome! ...you are now connected to the Bamazon Store!
item_id  product_name                           department_name      price    stock_quantity
-------  -------------------------------------  -------------------  -------  --------------
1        Instant Pot Duo60                      Appliances           99.95    0
2        Where's Spot                           Books                5.29     175
3        The Rolling Stones, Sticky Fingers CD  CD's & Vinyl         21.03    39
4        The Beatles, Let it Be Vinyl           CD's & Vinyl         38.25    99
5        Fender F9-100 Accoustic Guitar Bundle  Musical Instruments  149.99   68
6        Sony XBR65X900X 65 inch l              Electronics          1999.99  1998
7        2018 ASUS Newest Vivobook              Computers            399      42
8        Adobe Photoshop Elements 2018          Software             69.89    7
9        WTF Did You Say Party Game             Toys & Games         22.78    35
10       Left Center Right Dice Game            Toys & Games         6.96     57
11       Unique Heart Shaped Emerald Earrings   Jewelry              6996.87  0
12       I am Pilgrim                           Books                25.49    2045
13       Secret Outlast Deoderant               Personal Care        7.47     22
14       Baily's Irish Creme-Lg.                Liquor               54.95    6002

? What is the ID of the product that you would like to purchase? 10
Customer Request: Product 10

? What quantity would you like to purchase? 10
Quantity Requested: 10

Congratulation!  We have your Left Center Right Dice Game's in stock.

We are updating inventory and calculating your total purchase cost.

Your total purchase price is: $69.60

Thank you for shopping at Bamazon. Please check back frequently for our great specials!

#2 Showing product 10 has been reduced by 10 and showing a product that does not have enough quantity to fullfill:
Welcome! ...you are now connected to the Bamazon Store!
item_id  product_name                           department_name      price    stock_quantity
-------  -------------------------------------  -------------------  -------  --------------
1        Instant Pot Duo60                      Appliances           99.95    0
2        Where's Spot                           Books                5.29     175
3        The Rolling Stones, Sticky Fingers CD  CD's & Vinyl         21.03    39
4        The Beatles, Let it Be Vinyl           CD's & Vinyl         38.25    99
5        Fender F9-100 Accoustic Guitar Bundle  Musical Instruments  149.99   68
6        Sony XBR65X900X 65 inch l              Electronics          1999.99  1998
7        2018 ASUS Newest Vivobook              Computers            399      42
8        Adobe Photoshop Elements 2018          Software             69.89    7
9        WTF Did You Say Party Game             Toys & Games         22.78    35
10       Left Center Right Dice Game            Toys & Games         6.96     47
11       Unique Heart Shaped Emerald Earrings   Jewelry              6996.87  0
12       I am Pilgrim                           Books                25.49    2045
13       Secret Outlast Deoderant               Personal Care        7.47     22
14       Baily's Irish Creme-Lg.                Liquor               54.95    6002

? What is the ID of the product that you would like to purchase? 8
Customer Request: Product 8

? What quantity would you like to purchase? 10
Quantity Requested: 10

Sorry!  We don't have enough Adobe Photoshop Elements 2018's in stock. Please select a smaller quantity or try again at another time.

? What is the ID of the product that you would like to purchase?

#3 Showing recognition that the sufficient inventory is not in stock and allowing you to reduce your quantity to fullfill your order:
Welcome! ...you are now connected to the Bamazon Store!
item_id  product_name                           department_name      price    stock_quantity
-------  -------------------------------------  -------------------  -------  --------------
1        Instant Pot Duo60                      Appliances           99.95    0
2        Where's Spot                           Books                5.29     175
3        The Rolling Stones, Sticky Fingers CD  CD's & Vinyl         21.03    39
4        The Beatles, Let it Be Vinyl           CD's & Vinyl         38.25    99
5        Fender F9-100 Accoustic Guitar Bundle  Musical Instruments  149.99   68
6        Sony XBR65X900X 65 inch l              Electronics          1999.99  1998
7        2018 ASUS Newest Vivobook              Computers            399      42
8        Adobe Photoshop Elements 2018          Software             69.89    7
9        WTF Did You Say Party Game             Toys & Games         22.78    35
10       Left Center Right Dice Game            Toys & Games         6.96     47
11       Unique Heart Shaped Emerald Earrings   Jewelry              6996.87  0
12       I am Pilgrim                           Books                25.49    2045
13       Secret Outlast Deoderant               Personal Care        7.47     22
14       Baily's Irish Creme-Lg.                Liquor               54.95    6002

? What is the ID of the product that you would like to purchase? 8
Customer Request: Product 8

? What quantity would you like to purchase? 10
Quantity Requested: 10

Sorry!  We don't have enough Adobe Photoshop Elements 2018's in stock. Please select a smaller quantity or try again at another time.

? What is the ID of the product that you would like to purchase? 8
Customer Request: Product 8

? What quantity would you like to purchase? 7


Author Sharon Johnsen Fariss
Quantity Requested: 7

Congratulation!  We have your Adobe Photoshop Elements 2018's in stock.

We are updating inventory and calculating your total purchase cost.

Your total purchase price is: $489.23

Thank you for shopping at Bamazon. Please check back frequently for our great specials!

#4 And once again you will see that the inventory for product 8 has been reduced reflecting the sale of all the items in stock:
Welcome! ...you are now connected to the Bamazon Store!
item_id  product_name                           department_name      price    stock_quantity
-------  -------------------------------------  -------------------  -------  --------------
1        Instant Pot Duo60                      Appliances           99.95    0
2        Where's Spot                           Books                5.29     175
3        The Rolling Stones, Sticky Fingers CD  CD's & Vinyl         21.03    39
4        The Beatles, Let it Be Vinyl           CD's & Vinyl         38.25    99
5        Fender F9-100 Accoustic Guitar Bundle  Musical Instruments  149.99   68
6        Sony XBR65X900X 65 inch l              Electronics          1999.99  1998
7        2018 ASUS Newest Vivobook              Computers            399      42
8        Adobe Photoshop Elements 2018          Software             69.89    0
9        WTF Did You Say Party Game             Toys & Games         22.78    35
10       Left Center Right Dice Game            Toys & Games         6.96     47
11       Unique Heart Shaped Emerald Earrings   Jewelry              6996.87  0
12       I am Pilgrim                           Books                25.49    2045
13       Secret Outlast Deoderant               Personal Care        7.47     22
14       Baily's Irish Creme-Lg.                Liquor               54.95    6002

? What is the ID of the product that you would like to purchase?
