CREATE TABLE all_info AS
SELECT 
    film.title,
    film_actor.film_id,
    CONCAT(actor.first_name, ' ', actor.last_name) AS actor_fullname,
    CONCAT(staff.first_name, ' ', staff.last_name) AS staff_fullname,
    staff.email AS staff_email,
    staff.password AS staff_password,
    CONCAT(customer.first_name, ' ', customer.last_name) AS customer_fullname,
    customer.email AS customer_email,
    address.address,
    address.postal_code,
    address.phone,
    city.city,
    country.country,
    SUM(payment.amount) AS total_payment
FROM film

-- part 01
JOIN film_actor 
	ON film.film_id = film_actor.film_id

-- part 02
JOIN actor 
	ON film_actor.actor_id = actor.actor_id

-- part 03
JOIN inventory 
	ON film.film_id = inventory.film_id

-- part 04
JOIN rental 
	ON inventory.inventory_id = rental.inventory_id

-- part 05
JOIN staff 
	ON rental.staff_id = staff.staff_id

-- part 06
JOIN customer 
	ON rental.customer_id = customer.customer_id

-- part 07
JOIN address 
	ON customer.address_id = address.address_id

-- part 08
JOIN city 
	ON address.city_id = city.city_id

-- part 09
JOIN country 
	ON city.country_id = country.country_id

-- part 10
JOIN payment 
	ON rental.rental_id = payment.rental_id

-- group 
GROUP BY 
    film.title, 
    film_actor.film_id, 
    actor_fullname, 
    staff_fullname, 
    staff.email, 
    staff.password, 
    customer_fullname, 
    customer_email, 
    address.address, 
    address.postal_code, 
    address.phone, 
    city.city, 
    country.country

