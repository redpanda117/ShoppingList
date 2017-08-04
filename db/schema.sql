CREATE DATABASE burger_db;
USE burgers_db;
CREATE TABLE burger(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100),
    devoured BOOLEAN DEFAULT False,
    //data TIMESTAMP,
    PRIMARY KEY (id)
);