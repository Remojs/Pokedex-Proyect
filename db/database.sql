create database pokemon;
use pokemon;

create table poketest(
id int not null auto_increment primary key,
nombrepokemon varchar(20) not null,
tipo varchar(20) not null
);

select * from poketest;


INSERT INTO `pokemon`.`poketest` (`nombrepokemon`, `tipo`) VALUES ('Charmander', 'fire');
INSERT INTO `pokemon`.`poketest` (`nombrepokemon`, `tipo`) VALUES ('Bulbasaur', 'grass');
INSERT INTO `pokemon`.`poketest` (`nombrepokemon`, `tipo`) VALUES ('Squirtle', 'water');
