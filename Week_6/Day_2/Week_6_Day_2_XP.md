 <!-- data base from yesterday: public -->

<!-- 1.1 Use SQL to get the following from the database:
All items, ordered by price (lowest to highest). -->
select * from items order by price ASC;

<!-- 1.2 Items with a price above 80 (80 included), ordered by price (highest to lowest). -->
select * from items where price >= 80 order by price desc;

<!-- 1.3 The first 3 customers in alphabetical order (A-Z) – exclude ‘id’ from the results. -->
select first_name,last_name from customers where user_id<4 order by first_name asc;

<!-- 1.4 All last names (no other columns!), in reverse alphabetical order (Z-A) -->
select last_name from customers order by last_name desc;

<!-- 2. Create a table named purchases. It should have 2 columns : customer_id and item_id. These columns are references from the tables customers and items. Edit the data of the purchases table:-->
<!-- In order to do this, I changed my user_id name with alter from the two tables to customers_id and items_id, have more sense, and above all it was creating problem to put them
in the same table for purchases -->

create table purchases 
as (select customers_id,items_id from customers,items);

<!-- 2.1 Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?  -->
insert into purchases(customers_id,items_id)
values (4,);
<!-- does not work
 ERROR:  syntax error at or near ")"
LINE 2: values (4,) -->

<!-- 2.2 Add 5 rows which reference existing customers and items. -->
INSERT INTO purchases (customers_id,items_id)
VALUES
    (1,4),
    (4,4),
    (4,5),
(4,6),
(4,7);

<!-- 3. Use SQL to get the following from the database: -->
<!-- 3.1 All purchases. Is this information useful to us? -->
select * from purchases;
<!-- Not really useful without names  -->

<!-- 3.2 All purchases, joining with the customers table. -->
select purchases.customers_id,items_id,customers.first_name from purchases inner join customers on purchases.customers_id=customers.customers_id ;

<!-- 3.3 Purchases of the customer with the ID equal to 4. -->
select purchases.customers_id,items_id,customers.first_name from purchases inner join customers on purchases.customers_id=customers.customers_id where customers.customers_id = 4;

<!-- 3.4 Purchases for a large desk AND a small desk -->

Don't know how to do it yet, I have this to see it, but it needs more steps, maybe with exists
select purchases.customers_id,purchases.items_id,customers.first_name,items.itemname
from purchases inner join customers on purchases.customers_id=customers.customers_id 
inner join items on purchases.items_id=items.items_id 
where items.itemname = 'Small Desk' or items.itemname='Large Desk' ;

<!-- 4. Create a purchase for Scott Scott – he bought a hard drive. -->
<!-- There is no hard drive, I will try first to add it straight with items_id = 4.
Ok, it works, but to be more precise, I will add : -->
insert into items (itemname,price) values ('Hard Drive',200);
insert into purchases (customers_id,items_id) values (3,4);

<!-- 5.Use SQL to show all the customers who have made a purchase. Show the following fields/columns:

Customer first name
Customer last name
Item name -->
select customers.first_name,customers.last_name,items.itemname
from purchases inner join customers on purchases.customers_id=customers.customers_id 
inner join items on purchases.items_id=items.items_id ;


<!-- Exercise 2 : DVD Rental Database -->

<!-- 1. Write a query to select all the columns from the table “customer” in the database named dvdrental. -->
select * from customer;

<!-- 2. Write a query to display the names (first_name, last_name) using an alias named “full_name”. -->
select concat (first_name, ' ', last_name) as "Full_name" from customer;

<!-- 3. You want to know every date where one or several accounts were created. Write a query to select the dates of creation from the “customer” table, it shouldn’t have duplicates. -->
select distinct create_date from customer;
<!-- Just one line, as all the dates are the same -->

<!-- 4. Write a query to get the details of all customers from the customer table in descending order by their first name. -->
select * from customer order by first_name desc;

<!-- 5. Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate. -->
select film_id, title, description, release_year, rental_rate from film order by rental_rate asc;

<!-- 6. Write a query to get the address, the district and the phone number from the customers living in the district Texas in the “address” table. -->
select address, district, phone from address where district = 'Texas';

<!-- 7. Write a query to retrieve the details of the movies with the id 15 and 150. -->
select * from film where film_id between 15 and 150;

<!-- 8. Pick your favorite movie. Write a query to see if the rental shop owns it. Write a query to get the film ID, the title, the description, the length and the rental rate from the film table for your movie title. -->

select film_id, title, description, film.length, rental_rate from film where title = 'Braveheart';
<!-- 
9. Didn’t find it ? Maybe you made a mistake in the name. Write a query to get the film ID, the title, the description, the length and the rental rate from the “film” table for all the movies starting with the two first letters of your movie. -->
select film_id, title, description, film.length, rental_rate from film where title like 'Br%';

<!-- 10. You want to have a choice between ten propositions of movies and you want the cheapest ones. Write a query to find the 10th cheapest movies. -->
select title,rental_rate from film order by rental_rate Asc limit 10;

<!-- 11. You are not satisfied with the results. Write a query to find the 10th next cheapest movies.
Bonus: Try to not use LIMIT. -->
select title,rental_rate from film order by rental_rate Asc limit 20;
<!-- Didn't try the bonus -->

<!-- 12. Write a query to join the data of the customer table and the payment table. You want to get the amount and the date of every payment made by a customer, ordered by his id (from 1 to…). -->

select customer.customer_id,first_name, last_name, amount, payment_date from customer inner join payment on customer.customer_id=payment.customer_id 
order by customer.customer_id asc;

<!-- 13. You need to check your inventory. Write a query to get all the movies which are not in the inventory. -->




