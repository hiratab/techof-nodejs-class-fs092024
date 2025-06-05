CREATE Table tb_anime (
	anime_id int primary key auto_increment,
	anime_name varchar(255),
	anime_description varchar(512)
);

create table tb_session(
	session_id int primary key auto_increment,
	session_name varchar(255),
	session_description varchar(512),
	session_anime_id int,
	CONSTRAINT fk_session_anime_id foreign key (session_anime_id) references tb_anime(anime_id)
);


create table tb_episode(
	episode_id int primary key auto_increment,
	episode_name  varchar(255),
	episode_description varchar(512),
	episode_duration int,
	episode_session_id int,
	CONSTRAINT fk_episode_session_id foreign key (episode_session_id) references tb_session(session_id)
);



-- Insert animes
INSERT INTO `techof-sql-class`.tb_anime (anime_name, anime_description) VALUES
('Eternal Blade', 'A young warrior discovers a mythical sword that binds his fate to an ancient prophecy.'),
('Cyber Requiem', 'In a dystopian future, hackers fight for freedom against a totalitarian AI regime.'),
('Spirit Chronicles', 'A teenage boy awakens in a magical world with memories of a past life.'),
('Starlight Academy', 'Young students train to become intergalactic peacekeepers at a cosmic school.'),
('Beastbound', 'Humans and mythical beasts form bonds to protect the natural world from dark forces.');

-- Insert sessions for each anime
-- Anime 1: Eternal Blade
INSERT INTO `techof-sql-class`.tb_session (session_name, session_description, session_anime_id) VALUES
('Season 1: Awakening', 'The journey begins as the blade chooses its wielder.', 1),
('Season 2: Reckoning', 'Enemies rise as the prophecy unfolds.', 1);

-- Anime 2: Cyber Requiem
INSERT INTO `techof-sql-class`.tb_session (session_name, session_description, session_anime_id) VALUES
('Season 1: Glitch Origin', 'The rebellion discovers the AI’s hidden base.', 2);

-- Anime 3: Spirit Chronicles
INSERT INTO `techof-sql-class`.tb_session (session_name, session_description, session_anime_id) VALUES
('Season 1: Rebirth', 'The boy learns to harness magic in his new world.', 3),
('Season 2: Trials', 'He faces the ancient challenges of his past incarnation.', 3);

-- Anime 4: Starlight Academy
INSERT INTO `techof-sql-class`.tb_session (session_name, session_description, session_anime_id) VALUES
('Season 1: First Contact', 'Students face their first mission outside the academy.', 4);

-- Anime 5: Beastbound
INSERT INTO `techof-sql-class`.tb_session (session_name, session_description, session_anime_id) VALUES
('Season 1: Wild Pact', 'The chosen guardians bond with the mythical beasts.', 5);

-- Insert episodes
-- Eternal Blade, Season 1 (session_id = 1)
INSERT INTO `techof-sql-class`.tb_episode (episode_name, episode_description, episode_duration, episode_session_id) VALUES
('The Chosen One', 'Kai stumbles upon the Eternal Blade.', 24, 1),
('A Warrior Awakens', 'Kai learns the blade’s history.', 24, 1),
('The Crimson Bandits', 'Kai faces his first challenge.', 24, 1);

-- Eternal Blade, Season 2 (session_id = 2)
INSERT INTO `techof-sql-class`.tb_episode (episode_name, episode_description, episode_duration, episode_session_id) VALUES
('Shadows Return', 'An ancient enemy reveals themselves.', 24, 2),
('The Reckoning Begins', 'War spreads across the lands.', 24, 2);

-- Cyber Requiem, Season 1 (session_id = 3)
INSERT INTO `techof-sql-class`.tb_episode (episode_name, episode_description, episode_duration, episode_session_id) VALUES
('Digital Chains', 'The AI tightens its grip on the city.', 25, 3),
('Data Ghosts', 'The rebels discover a data anomaly.', 25, 3);

-- Spirit Chronicles, Season 1 (session_id = 4)
INSERT INTO `techof-sql-class`.tb_episode (episode_name, episode_description, episode_duration, episode_session_id) VALUES
('A New Life', 'Haruto wakes in another world.', 23, 4),
('Mystic Academy', 'He begins his training.', 23, 4);

-- Spirit Chronicles, Season 2 (session_id = 5)
INSERT INTO `techof-sql-class`.tb_episode (episode_name, episode_description, episode_duration, episode_session_id) VALUES
('Ancient Echoes', 'Haruto faces relics of his past.', 23, 5);

-- Starlight Academy, Season 1 (session_id = 6)
INSERT INTO `techof-sql-class`.tb_episode (episode_name, episode_description, episode_duration, episode_session_id) VALUES
('Welcome to Starlight', 'The students begin orientation.', 22, 6),
('First Flight', 'Cadets take to space for the first time.', 22, 6);

-- Beastbound, Season 1 (session_id = 7)
INSERT INTO `techof-sql-class`.tb_episode (episode_name, episode_description, episode_duration, episode_session_id) VALUES
('Beast Awakening', 'Lia finds her spirit beast.', 26, 7),
('Guardian’s Bond', 'Training begins with the beasts.', 26, 7);
