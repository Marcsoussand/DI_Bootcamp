 <!-- data base from yesterday: public -->

<!-- 1.1 Use SQL to get the following from the database:
All items, ordered by price (lowest to highest). -->
select * from items order by price ASC;

<!-- 1.2 Items with a price above 80 (80 included), ordered by price (highest to lowest). -->
select * from items where price >= 80 order by price desc;

<!-- 1.3 The first 3 customers in alphabetical order (A-Z) – exclude ‘id’ from the results. -->

select first_name,last_name from customers where user_id<4 order by first_name asc;



