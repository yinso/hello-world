CREATE TABLE click_count (
		count int CHECK (count >= 0),
		message varchar(10)
		);