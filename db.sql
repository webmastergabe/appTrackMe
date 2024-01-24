CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) NOT NULL,
	email VARCHAR UNIQUE NOT NULL,
	password VARCHAR NOT NULL
);

INSERT INTO users (name, email, password)
VALUES ('jeff goldblum', 'jgblum@usa.com', 'youcantcrack123'), ('larry david', 'ldavid@hbo.com', 'whatdoesitmatter'), ('susie goldblum', 'suztheschmuz@gmail.com', 'effthisshit')

CREATE TABLE company (
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) NOT NULL,
	website VARCHAR(40)L
);

CREATE TABLE contact (
	id SERIAL PRIMARY KEY,
	name VARCHAR(40) NOT NULL,
    phone INTEGER,
	email VARCHAR(40)
);

CREATE TABLE position (
	id SERIAL PRIMARY KEY,
	title VARCHAR(40) NOT NULL,
	apply_date date NOT NULL,
	interviewed boolean,
	job_desc VARCHAR,
    user_notes VARCHAR,
    position_url VARCHAR
    user_id FORIEGN KEY,
    company_id FORIEGN KEY,
    contact_id FORIEGN KEY
);

