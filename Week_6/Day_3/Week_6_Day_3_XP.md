<!-- Exercise 1: Dvd Rental
1. Get a list of all film languages -->

select distinct language.name from film join language on film.language_id=language.language_id;

<!-- 2. Get a list of all films joined with their languages – select only the film title, description, and language name. Try your query with different joins:

Get all films, even if they don’t have languages -->

select film.title, description, language.name from film join language on film.language_id=language.language_id;

<!-- same with inner, left or right -->

<!-- Get all languages, even if there are no films in those languages. Which languages are these? -->

select name from language;

<!-- All stored languages in the database-->

<!-- Create a new table called new_film with the following columns : id, name. Add some new films to the table. -->

create table new_film  (
	film_id serial PRIMARY KEY,
	name varchar ( 50 ) UNIQUE NOT NULL
);

INSERT INTO 
    new_film (name)
VALUES
    ('Braveheart'),
    ('Cruel Intentions'),
    ('Matrix');

<!-- Create a new table called customer_review, to contain data about film reviews that customers will make.
Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted
It should have the following columns:
review_id – a primary key, non null, auto-increment
film_id – references the new_film table. The film that is being reviewed.
language_id – references the language table. What language the review is in.
title – the title of the review
score – the rating of the review (1-10)
review_text – the text of the review. No limit on the length.
last_update – when the review was last updated. -->
create table customer_review (

review_id INT GENERATED ALWAYS AS IDENTITY,
film_id INT,
language_id INT,
title VARCHAR(50),
score smallint,
review_text varchar(300),
last_update timestamp,
PRIMARY KEY(review_id),
CONSTRAINT fk_film
    FOREIGN KEY(film_id) 
        REFERENCES film(film_id)
            ON DELETE SET NULL
);

<!-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables. -->

insert into customer_review (review)