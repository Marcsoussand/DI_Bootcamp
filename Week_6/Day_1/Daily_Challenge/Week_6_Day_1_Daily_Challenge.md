<!-- 1. Count how many actors are in the table -->

select * from actor;
<!-- 200 rows -->

<!-- 2. Try to add a new actor, with some blank fields. What happens ? -->
INSERT INTO actor (first_name, last_name, last_update)
VALUES('Matt','Damon','14/02/2021');

INSERT INTO actor (first_name, last_name, last_update)
VALUES(' George',' Clooney','14/02/2021');

select * from actor;

<!-- 202 rows -->
<!-- George Clooney is included with blanks  -->