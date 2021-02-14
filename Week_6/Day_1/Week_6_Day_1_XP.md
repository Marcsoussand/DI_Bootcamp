 <!-- data base created in pg admin, named public -->

<!-- Create a database named public and two tables : items and customers. -->
CREATE TABLE items (
	user_id serial PRIMARY KEY,
	itemname varchar ( 50 ) UNIQUE NOT NULL,
	price smallint
);

CREATE TABLE customers (
    user_id serial PRIMARY KEY,
    first_name varchar (50) NOT NULL,
    last_name varchar (50) NOT NULL
);

<!--1. Add the following new items to the public.items table -->
INSERT INTO 
    items (itemname, price)
VALUES
    ('Small Desk',100),
    ('Large Desk',300),
    ('Fan',80);

<!-- 2. Add 5 new customers to the public.customers table -->
    INSERT INTO 
    customers (first_name, last_name)
VALUES
    ('Greg','Jones'),
    ('Sandra','Jones'),
    ('Scott','Scott'),
    ('Trevor','Green'),
    ('Melanie','Johnson');

<!-- 3. Use SQL to get the following data from the database  -->
<!-- 3.1 All the items -->
    select * from items;

<!-- 3.2 All the items with a price above 80 (80 not included) -->
select itemname,price from items where price>80 ;

<!-- 3.3 All the items with a price below 300 -->
select itemname,price from items where price<300 ;

<!-- 3.4 All the customers with the last name ‘Smith’ (Will you get a result ?) -->
select first_name,last_name from customers where last_name ='Smith';    

<!-- 3.5 All the customers with the last name ‘Jones’ -->
select first_name,last_name from customers where last_name ='Jones'; 

<!-- 3.6 All the customers with a first name that is not ‘Scott’ -->
select first_name,last_name from customers where first_name !='Scott'; 




