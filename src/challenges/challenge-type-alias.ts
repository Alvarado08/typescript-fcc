type Employee = {
  id: number;
  name: string;
  department: string;
};

type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};

// Union Type
type Staff = Manager | Employee;

function printStaffDetails(staff: Staff): string {
  return "employees" in staff
    ? `${staff.name} has ${staff.employees.length} employees`
    : `${staff.name} is an employee of the ${staff.department} department`;
}

const employee1 = {
  id: 1,
  name: "John",
  department: "Engineering",
};

const manager1 = {
  id: 1,
  name: "Arthur",
  department: "Engineering",
  employees: [
    {
      id: 1,
      name: "Employee 1",
      department: "Engineering",
    },
    {
      id: 2,
      name: "Employee 2",
      department: "Engineering",
    },
    employee1,
  ],
};

console.log(printStaffDetails(manager1));
console.log(printStaffDetails(employee1));
