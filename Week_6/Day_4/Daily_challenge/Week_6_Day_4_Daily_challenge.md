
<!-- Instructions
Create a table orders and a table items. You decide which fields should be in each table, but each item should have a price.
There is a relationship of one to many between the orders and the table items
Create a function that returns the total price for a given order
Bonus :
Create a table users
There is a relationship of one to many between the table user and the table orders
Create a function that returns the total price for a given order of a given user -->
create table orders (
	item_id int primary key,
    order_id int not null
);
create table items (
	item_name varchar(50),
    item_id int,
	item_price int not null,
 CONSTRAINT fk_items foreign key (item_id) references orders(item_id)
 );

 

 create function total_price(orderf int)

 returns int
language plpgsql
as
$$
declare
   price integer;
begin
   select sum(item_price)
   into price
   from items right join orders on items.item_id = orders.item_id
   where orders.order_id = orderf;
   
   return price;
end;
$$;

