CREATE DATABASE covid_app;

-- \c covid_app

CREATE TABLE stories (
    id SERIAL PRIMARY KEY,
    title TEXT,
    story VARCHAR(1000),
    name TEXT,
    likes INTEGER,
    userid INTEGER
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT,
    password_digest TEXT
);