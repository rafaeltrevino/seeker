DROP DATABASE IF EXISTS seeker_db;
CREATE DATABASE seeker_db;
USE seeker_db;

CREATE TABLE candidates_tbl
(
	id INT NOT NULL AUTO_INCREMENT,
	file_name VARCHAR(50) NOT NULL,
	image_link VARCHAR(255),
	page INTEGER(4),
	section	INTEGER(4),
	headword VARCHAR(50),
	description	VARCHAR(255),
	datetime_completed VARCHAR(100),
	status_candidate BOOLEAN NOT NULL DEFAULT false,
	status_pending BOOLEAN NOT NULL DEFAULT false,
	status_completed BOOLEAN NOT NULL DEFAULT false,
	source VARCHAR(100),
	PRIMARY KEY (id)
);