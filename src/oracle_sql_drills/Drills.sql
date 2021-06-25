--A Basic example of a table with 3 columns
create table DEPARTMENTS (
    deptno  number,
    name    varchar2(50) not null,
    location varchar2(50),
    constraint pk_departments primary key (deptno)
);

-- An Example of a child table created to connect with Departments table.

create table EMPLOYEES (
    empno   number,
    name    varchar2(50) not null,
    job    varchar2(50),
    manager number,
    hiredate    date,
    salary  number(7,2),
    commission  number(7,2),
    deptno  number,
    constraint pk_employees primary key (empno),
    constraint fk_employees_deptno foreign key (deptno)
);

-- This is an example of creating a Trigger,  Procedural SQL is called a PL/SQL block. Whenever a INSERT, UPDATE, OR DELETE occurs thats when this trigger happens.
-- Triggers are frequently used to automatially populate table primary keys.

create or replace trigger DEPARTMENTS_BIU
    before insert or update on DEPARTMENTS
    for each row
begin
    if inserting and :new.deptno is null then
        :new.deptno := to_number(sys_guid(),
        'blah blah blah');
    end if;
end;
/


create or replace trigger EMPLOYEES_BIU
    before insert or update on DEPARTMENTS
    for each row
begin
    if inserting and :new.empno is null then
        :new.empno := to_number(sys_guid(),
        'blah blah blah new blah blah blah');
    end if;
end;
/

-- An example of inserting a row into the parent table

insert into DEPARTMENTS (name, location) values
    ('Finance', 'New York');

insert into DEPARTMENTS (name, location) values
    ('Development', 'San Jose');

-- An example of verifying that the rows were created

select * from DEPARTMENTS;

-- Since a parent row is now inserted, you can add a row to the child table

insert into EMPLOYEES (name, job, salary, deptno)
    values
    ('Sam Smith',
    'Programmer',
    5000,
    (select deptno
    from departments
    where name = 'Development'));

insert into EMPLOYEES (name, job, salary, deptno)
    values
    ('John Smith',
    'Analyst',
    6000,
    (select deptno
    from departments
    where name = 'Finance'));

insert into EMPLOYEES (name, job, salary, deptno)
    values
    ('Mr Smith',
    'Analyst',
    6000,
    (select deptno
    from departments
    where name = 'Development'));


-- Indexing Columns, Is used for enforcing unique values within a column, Improve data access performance, or
-- preventing lock escalation when updating rows of tables that use declarative referential integrity

