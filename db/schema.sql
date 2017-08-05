CREATE DATABASE burger_db;
USE burgers_db;
CREATE TABLE burger(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100),
    devoured BOOLEAN DEFAULT False,
    date TIMESTAMP,
    PRIMARY KEY (id)
);

INSERT INTO burger (burger_name,devoured)
VALUES ("BLT",False);

INSERT INTO burger (burger_name,devoured)
VALUES ("Cheeseburger",False);

INSERT INTO burger (burger_name,devoured)
VALUES ("Veggie Burger",True);