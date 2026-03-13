-- დაამატეთ tableს თარიღები და თვეების მიხედვით დაალაგეთ შემოსავლების ინფორმაცია

-- full info
select 
customer.customer_id, 
CONCAT(first_name, ' ', last_name) as fullname, 
email,  
SPLIT_PART(TEXT(payment_date), ' ', 1) as date,
payment.amount FROM payment

JOIN customer 
ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id

-- hw (table name: sale)
select 
CONCAT(SPLIT_PART(TEXT(payment_date), '-', 1), '-', SPLIT_PART(TEXT(payment_date), '-', 2)) as date,
SUM(payment.amount) FROM payment

JOIN customer 
ON customer.customer_id = payment.customer_id
GROUP BY date
ORDER BY date