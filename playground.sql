\c fewfar


SELECT supporters.name, SUM(donations.amount)
FROM supporters
LEFT JOIN donations ON supporters.id = donations.supporter_id
WHERE supporters.id = donations.supporter_id
GROUP BY supporters.name
ORDER BY SUM(donations.amount) desc;




