CREATE SCHEMA burgerschema;
CREATE TABLE ate
(
ID int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN,
date TIMESTAMP,
PRIMARY KEY (ID)
);
