CREATE TABLE monsters(
    id int(10) PRIMARY KEY AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    personalité varchar(50) NOT NULL
);

CREATE TABLE habitats(
    id INT(10) PRIMARY KEY AUTO_INCREMENT,
    name varchar(50),
    climat varchar(50),
    température int
);

CREATE TABLE vie(
    monster int,
    habitat int,
    PRIMARY KEY (monster, habitat),
    FOREIGN KEY(monster) REFERENCES monsters(habitats)
);

INSERT INTO monsters(name, personalité) VALUES
('Fluffy', 'agressive'),
('Needle', 'patient'),
('Rusty', 'passionné');

INSERT INTO habitats (name, climat, température) VALUES
('désert', 'sec', 45),
('Fôrét', 'humide', 20),
('Montagne', 'froid', 10);

INSERT INTO vie (monster, habitat) VALUE 
(1,2),
(1,1),
(2,3),
(3,2);