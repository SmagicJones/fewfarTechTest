\c fewfar

-- SELECT * FROM donations;

-- SELECT * FROM supporters;

SELECT supporters.name, SUM(donations.amount)
FROM supporters
LEFT JOIN donations ON supporters.id = donations.supporter_id
WHERE supporters.id = donations.supporter_id
GROUP BY supporters.name
ORDER BY SUM(donations.amount) desc;

-- SELECT supporters.name, donations.amount
-- FROM supporters
-- LEFT JOIN donations ON supporters.id = donations.supporter_id


