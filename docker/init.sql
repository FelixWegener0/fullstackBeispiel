-- create datenbank
CREATE DATABASE IF NOT EXISTS my_database;

-- use current database
USE my_database;

-- create table for user
CREATE TABLE IF NOT EXISTS user (
    id int AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    first_name varchar(100),
    last_name varchar(100)
);
