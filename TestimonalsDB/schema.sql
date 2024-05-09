Use Project;

Create table testimonals(
    tid integer primary key auto_increment,
    uid integer not null,
    star float,
    review varchar(500)
);