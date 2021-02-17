<!-- Aggregate Functions
1. Write a query to find the number of jobs available in the employees table. -->

select count(distinct job_id) from employees;

<!-- 2. Write a query to get the number of employees working in each post. -->

select job_id, count(employee_id) from employees group by job_id;

<!-- 3. Write a query to get the difference between the highest and lowest salaries. -->

select max(salary)-min(salary) from employees;

<!-- 4. Write a query to find the manager ID and the salary of the lowest-paid employee under that manager. -->

select manager_id,salary from employees where salary = (select min(salary) from employees);

<!-- 5. Write a query to get the average salary for each post excluding programmer. -->

select job_id, round(avg(salary),2) from employees group by job_id;

<!-- 6. Write a query to get the job ID and maximum salary of each post for maximum salary is at or above $4000. -->

select job_id,max(salary) from employees group by job_id having max(salary) >= 4000;

<!-- 7. Write a query to get the average salary for all departments that employ more than 10 employees. -->
<!-- I put 3 to show something, there was no department with more than 10 employees -->

select department_id, round(avg(salary),2) from employees group by department_id having count(distinct employee_id)>3;

<!-- Alter Table Statement
1. Write a SQL statement to change the name of the column state_province to state in the table locations, keeping the data type and size same. -->

alter table locations rename column state_province to state;

<!-- 2. Write a SQL statement to add a primary key for the columns location_id in the locations table. -->

alter table locations add primary key (location_id); 

<!-- Create Tables
1.Write a SQL statement to create a simple table new_countries including columns country_id and country_name.

make sure that no duplicate data against column country_id will be allowed at the time of insertion. (which data type should you use for the column country_id ?)
make sure that no countries except Italy, India and China will be entered in the table. -->

create table new_countries (
    country_id smallint unique not null,
    country_name varchar ( 50 ) check (country_name = "Italy" or country_name = "India" or country_name = "China")
)

insert into new_countries (country_id,country_name)
values (1,Italy), (2,India), (3,China);

<!-- 2.Write a SQL statement to create a duplicate copy of the new_countries table including the structure and the data of the countries table. -->

create table new_countries2 as table new_countries;

<!-- 3. Write a SQL statement to create a table named new_jobs including columns job_id, job_title, min_salary, max_salary

make sure that max_salary amount won’t exceed the upper limit of 25000.
make sure that, the default value for job_title is blank, for min_salary is 8000 and for max_salary is NULL. -->

create table new_jobs (
    job_id serial primary key,
    job_title varchar(50) default '',
    min_salary int default 8000,
    max_salary int default Null check (max_salary<25000)
)

<!-- 4. Write a SQL statement to create a table new_employees including columns employee_id, first_name, last_name, email, phone_number hire_date, job_id, salary,

make sure that, the employee_id column does not contain any duplicate value at the time of insertion,
make sure that the foreign key column job_id, references the column job_id of jobs table. -->

create table new_employees (
    employee_id int unique, 
    first_name varchar(50),
    last_name varchar (50),
    email varchar (50),
    phone_number varchar (10),
    job_id int,
    salary int,
    constraint fk_employee
    foreign key (job_id)
    references jobs(job_id));

<!-- 5. Write a SQL statement to create a table new_job_history including columns employee_id, start_date, end_date, job_id

make sure that the foreign key employee_id references the column employee_id of the employees table
make sure that the foreign key column job_id contain only those values which exist in the jobs table. -->

create table new_job_history (
    employee_id int references employees(employee_id)
    start_date date,
    end_date date,
    job_id int not null references jobs(job_id)
)

<!-- Insert
<!-- 1. Write a SQL statement to insert a record with your own value into the table new_countries. -->
insert into new_countries (country_id,country_name)
values (1,Italy), (2,India), (3,China);

<!-- 2. Write a SQL statement to insert 3 rows by a single insert statement. -->
see above

<!-- 3. Write a SQL statement to insert rows from the countries table to duplicate table. -->
insert into new_countries2 
select * from new_countries;

<!-- 4. Write a SQL statement to insert rows into the table new_employees in which the column job_id contains the values which must have existed into the table new_jobs. --> 
