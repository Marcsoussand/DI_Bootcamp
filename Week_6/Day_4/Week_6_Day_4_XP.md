<!-- 1. Write a query to display the names (first_name, last_name) using an alias name “First Name”, “Last Name” from employee table. -->

select first_name First Name,last_name Last Name from employees;

<!-- 2. Write a query to get a unique department ID from employee table. -->
select distinct department_id from employees;

<!-- 3. Write a query to get the details of all employees from the employee table in descending order by their first name. -->
select * from employees order by first_name desc;

<!-- 4. Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees. -->

select first_name, last_name, salary, salary*0.15 as PF for employees;

<!-- 5. Write a query to get the employee ID, names (first_name, last_name) and salary in ascending order according to their salary. -->
select employee_id, first_name|| ' ' || last_name "names", salary from employees order by salary asc;

<!-- 6. Write a query to get the total salaries paid to the employees. -->
select sum(salary) from employees;

<!-- 7. Write a query to get the maximum and minimum salary paid to the employees. -->
select max(salary),min(salary) from employees;

<!-- 8 Write a query to get the average salary paid to the employees. -->
select round(avg(salary)) from employees;

<!-- 9. Write a query to get the number of employees working in the company. -->
select count(salary) from employees;

<!-- 10. Write a query to get all the first name from the employees table in upper case. -->
select upper(first_name) from employees;

<!-- 11. Write a query to get the first three characters of the first name for all the employees in the employees table. -->
select substring(first_name, 1,3) from employees;

<!-- 12. Write a query to get the full name of all the employees from employees table. You have to include the first name and last name -->

select first_name|| ' ' || last_name "full name" from employees;

<!-- 13. Write a query to get the first name, last name and the length of the full name of all the employees from employees table. -->

select first_name, last_name, length(first_name|| ' ' || last_name) from employees;

<!-- 14. Write a query to check whether the first_name column of the employees table containing any number. -->
select first_name from employees where first_name like '%[0-9]%';

<!-- 15. Write a query to select first ten records from a table. -->
select first_name from employees limit 10;

<!-- Restricting And Sorting -->

<!-- 1. Write a query to display the name, including first_name and last_name and salary for all employees whose salary is between $10,000 and $15,000. -->

select first_name, last_name, salary from employees where salary between 10000 and 15000;

<!-- 2.Write a query to display the name, including first_name and last_name and hire date for all employees who were hired in 1987. -->

select first_name,last_name, hire_date from employees where date_part('year',hire_date) = 1987;

<!-- 3. Write a query to get the first name of the employees who holds the letter ‘c’ and ‘e’ in the first name. -->
select first_name from employees where first_name like '%c%' and first_name like '%e%';

<!-- 4. Write a query to display the last name, job, and salary for all the employees who don’t work as a Programmer or a Shipping Clerk, and not drawing the salary $4,500, $10,000, or $15,000. -->

select last_name, job_title, salary from employees join jobs on jobs.job_id=employees.job_id where job_title not like 'Programmer' and job_title not like 'Shipping Clerk' and employees.salary != 4500 and employees.salary != 10000 and employees.salary != 15000; 

<!-- 5. Write a query to display the last names of employees whose last name contain exactly six characters. -->

select last_name from employees where length(last_name) = 6;

<!-- 6. Write a query to display the last name of employees having ‘e’ as the third character. -->

select last_name from employees where last_name like '__e%';

<!-- 7. Write a query to display the jobs/designations available in the employees table. -->

select distinct job_title from jobs;

<!-- 8. Write a query to select all information of employees whose last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’. -->

select last_name from employees where last_name like 'Jones' or last_name like 'Blake' or last_name like 'Scott' or last_name like 'King' or last_name like 'Ford';


<!-- Update Statement -->

<!-- 1. Write a SQL statement to change the email and commission_pct column of the employees table with ‘not available’ and 0.10 for all employees for those employees whose department_id is 110. -->

<!-- Department_id is between 1 and 11 so I will do it with 11 instead of 110, same for future questions -->

update employees set email = 'not available',commission_pct = 0.10 where department_id = 11;

<!-- there is no commission_pct ? -->

<!-- 2. Write a SQL statement to change the email column of the employees table with ‘available’ for those employees who belongs to the ‘Accounting’ department. -->

select department_id, department_name from departments;
<!-- show that Accounting id is 11 -->

update employees set email = 'available' where department_id = 11;

<!-- 3. Write a SQL statement to change the salary of an employee to 8000 whose ID is 105, if the existing salary is less than 5000. -->

update employees set salary = 8000 where employee_id = 105 and salary<=5000;

<!-- 4. Write a SQL statement to increase the salary of employees under the department 40, 90 and 110 according to the company rules that, the salary will be increased by 25% of the department 40, 15% for department 90 and 10% of the department 110 and the rest of the department will remain same. -->

update employees set salary = salary*1.25 where department_id = 4;
update employees set salary = salary*1.15 where department_id = 9;
update employees set salary = salary*1.1 where department_id = 11;