 <!-- Exercise 1 -->

<!-- Create
Create a database named bootcamp.
Create a table students.
Add the columns: id, last_name, first_name, birth_date.
The id has to be auto_incremented.
You have to choose the best data type for each column.
To help you, here is the data that you will have to insert. (How to we insert date to a table?) -->

CREATE TABLE students (
	id serial PRIMARY KEY,
	first_name varchar (50) NOT NULL,
    last_name varchar (50) NOT NULL,
    birth_date date NOT NULL
);

<!-- Insert
Insert the above data to the table. Find a way to make it quick. -->

INSERT INTO 
    students (first_name,last_name,birth_date)
VALUES
    ('Marc','Benichou','1998-11-02'),
    ('Yoan','Cohen','2010-12-03'),
    ('Lea','Benichou','1987-07-27'),
    ('Amelia','Dux','1996-04-07'),
    ('David','Grez','2003-06-14'),
    ('Omer','Simpson','1980-10-03');

<!-- Insert your last_name, first_name and birth_date in the table. (Check the id of this new row) -->
INSERT INTO 
    students (first_name,last_name,birth_date)
VALUES
    ('Marc','Soussand','1983-09-16');

<!-- Select
1. Fetch all the data from the table. -->
    select * from students;

<!-- 2. Fetch all the students first_name and last_name. -->
select first_name,last_name from students;

<!-- 3.For the following questions, only fetch the first_name and last_name of the students.
3.1. Fetch the student which id is equal to 2. -->
    select first_name,last_name from students where id=2;

<!-- 3.2 Fetch the student with the last_name Benichou AND the first_name Marc. -->
select first_name,last_name from students where last_name='Benichou' and first_name='Marc'; 

<!-- 3.3 Fetch the students with the last_name Benichou OR the first_name Marc. -->
select first_name,last_name from students where last_name='Benichou' or first_name='Marc'; 

<!-- 3.4 Check the difference between the request 2 and 3. -->
Lea Benichou and me in addition

<!-- 3.5 Fetch the students which first_name contains the letter a. -->
select first_name,last_name from students where first_name like '%a%';

<!-- 3.6 Fetch the students which first_name starts with the letter a. -->
select first_name,last_name from students where first_name like 'a%';

<!-- Audelia is fetched only if we put A and not a, there will be some trick about upper case to see later-->

<!-- 3.7 Fetch the students which first_name ends with the letter a. -->
select first_name,last_name from students where first_name like '%a';

<!-- 3.8 Fetch the students where the second to last letter of the first_name is a (Example: Leah). -->
select first_name,last_name from students where first_name like '%a_';

<!-- 3.9 Fetch the students which the id are 1 AND 3 -->
  select first_name,last_name from students where id=1 and id=3;
  <!-- returns nothing, id is a unique key -->

  <!-- 4. Fetch the students, which birth_date is equal or after the 1/01/2000. (show their first_name, last_name and birth_date) -->
  select first_name,last_name,birth_date from students where birth_date>='2000-01-01';


<!-- Ninja questions -->
<!-- Fetch the first four students. You have to order the answer by last_name alphabetically. -->
select first_name,last_name,birth_date from students where id<=4 order by first_name ASC;

 <!-- Fetch the birth_date of the youngest student. -->
 select first_name,last_name,birth_date from students where birth_date = (select max(birth_date) from students);

<!-- Fetch three students, skipping the first two students. -->
select first_name,last_name,birth_date from students where id>2 and id<=5;