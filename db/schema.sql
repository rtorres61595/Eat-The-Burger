CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burgers_name varchar(30) NOT NULL,
	devoured BOOLEAN DEFAULT true,
	PRIMARY KEY (id)
);