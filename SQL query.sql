CREATE DATABASE "reflectionAPI"

Create table "Users"(
	id serial PRIMARY KEY NOT NULL,
	email VARCHAR(255) not null unique,
	password varchar(255) not null,
	"createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
	"updateAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
)

create table "Reflections"(
	id serial PRIMARY KEY NOT NULL,
	success VARCHAR(255) not null,
	low_point varchar(255) not null,
	take_away varchar(255) not null,
	"User_id" integer not null REFERENCES "Users"(id),
	"createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
	"updateAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
)
