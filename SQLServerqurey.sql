CREATE TABLE EmpDetailsData (
  ID INT PRIMARY KEY IDENTITY,
  Name VARCHAR(50),
  PhoneNumber VARCHAR(20),
  JoiningDate DATE,
  Fee DECIMAL(10, 2),
  PaymentMethod VARCHAR(20)
);

select * from EmpDetailsData
--truncate table EmpDetailsData
insert into EmpDetailsData(Name,PhoneNumber,JoiningDate,Fee,PaymentMethod) values('A',9874563210,'2023-06-22',300,'Cash')


SELECT * FROM EmpDetailsData where JoiningDate > '2023-06-22'