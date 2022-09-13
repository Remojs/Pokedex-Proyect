create database pokemon;
use pokemon;

create table poketest(
id int not null auto_increment primary key,
nombrepokemon varchar(20) not null,
tipo varchar(20) not null
);

select * from poketest;