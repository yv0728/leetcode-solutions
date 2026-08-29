CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
      select max(salary) from (select distinct salary,dense_rank() over(order by salary desc) as rnk from employee)x where n=x.rnk
  );
END