USE burgers_db;

INSERT INTO burgers (id, burger_name, devoured, createdAt, updatedAt)
VALUES (1, 'Portobello Burger', false, '2016-01-01 00:00:00', '2016-01-01 00:00:00');

INSERT INTO burgers (id, burger_name, devoured, createdAt, updatedAt)
VALUES (2, 'Potbelly Burger', false, '2016-01-01 00:00:00', '2016-01-01 00:00:00');

INSERT INTO burgers (id, burger_name, devoured, createdAt, updatedAt)
VALUES (3, 'Power Burn Burger', false,   '2016-01-01 00:00:00', '2016-01-01 00:00:00');

INSERT INTO burgers (id, burger_name, devoured, createdAt, updatedAt)
VALUES (4, 'Tasty Burger', true,  '2016-01-01 00:00:00', '2016-01-01 00:00:00');

USE burgers_db;
SELECT * FROM burgers;