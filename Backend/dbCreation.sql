create database projectWebsite;
use projectWebsite;

create table infoLogin(
	userID int,
    username varchar(50),
    password varchar(50)
);

create table infoPersonal(
	userID int,
    nameFirst varchar(50),
    nameMiddle varchar(1),
    nameLast varchar(50),
    addressHomeStreet varchar(100),
    addressHomeCity varchar(50),
    addressHomeState varchar(50),
    addressHomeZipcode varchar(20)
);

create table infoContact(
	userID int,
    contactEmail varchar(50),
    contactPhone varchar(13),
    contactDiscord varchar(30)
);


