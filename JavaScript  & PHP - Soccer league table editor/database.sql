--
-- Create schema veikkausliiga
--
DROP DATABASE IF EXISTS veikkausliiga;
CREATE DATABASE demokanta DEFAULT CHARACTER SET utf8 COLLATE utf8_swedish_ci;
USE veikkausliiga;
DROP TABLE IF EXISTS sarjataulukko;
CREATE TABLE ihmiset (
  id int(10) auto_increment,
  joukkue text NOT NULL, 
  voitot int(10) NOT NULL,
  tasapelit int(10) NOT NULL,
  tappiot int(10) NOT NULL,
  
);
--
-- Dumping data for table `veikkausliiga`
--
INSERT INTO ihmiset (joukkue,voitot,tasapelit,tappiot) 
VALUES  ('HJK', 24, 6, 3),
('FC Inter', 15, 6, 12),
('RoPS', 23, 7, 5),
('KuPS', 13, 7, 15),
('VPS',20, 7, 8);

 