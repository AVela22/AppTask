CREATE DATABASE IF NOT EXISTS tasksdb;

USE tasksdb;

CREATE TABLE IF NOT EXISTS tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (100) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);

INSERT INTO tasks (title, description) VALUES 
('Taks1','Taks1 Descr'),('Taks1','Taks1 Descr');