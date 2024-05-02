enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User4 = {
  id: number;
  name: string;
  role: UserRole;
  contact: [email: string, phone: string];
};

function createUser2(user: User4): User4 {
  return user;
}

const enumUser: User4 = {
  id: 1,
  name: "Jill",
  role: UserRole.Admin,
  contact: ["Jill@jill", "1234567890"],
};
console.log(createUser2(enumUser));
