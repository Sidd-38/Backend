Create database Project;
Use Project;

Create table query(
    qid integer primary key auto_increment,
    uid integer not null,
    pid integer,
    pname varchar(200),
    tech varchar(200),
    type_ varchar(200),
    status_ varchar(200)
);


