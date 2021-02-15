CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


SELECT * FROM SecondTab

<!-- Q1. What will be the OUTPUT of the following statement? -->

SELECT COUNT(*) 
FROM FirstTab a WHERE a.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

<!-- Guess = 3, with the select which returns Null, and the not in which returns the 5,6,7, so the count will give 3 -->
<!-- Result = 0, oops -->

<!-- Q2. What will be the OUTPUT of the following statement? -->

SELECT COUNT(*) 
FROM FirstTab a WHERE a.Id NOT IN ( SELECT Id FROM SecondTab WHERE Id = 5 )

<!-- Guess = 3, for me the select will return 5 and the not in will return 6,7,null -->
<!-- Result = 2, it seems that the NULL is not included, do not know why -->

<!-- Q3. What will be the OUTPUT of the following statement? -->

SELECT COUNT(*) 
FROM FirstTab a WHERE a.Id NOT IN ( SELECT Id FROM SecondTab )

<!-- Guess = 2, with not in 5,null -->
<!-- Result = 0 -->

<!-- Q4. What will be the OUTPUT of the following statement? -->

SELECT COUNT(*) 
FROM FirstTab a WHERE a.Id NOT IN ( SELECT Id FROM SecondTab WHERE Id IS NOT NULL )

<!-- Guess = 3, for me it the same as Q2, so I guess it will return 2, even if I don't understand why... -->
<!-- Result = 2 -->



