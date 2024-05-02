// enums allow us to define a set of named constants
// By default, enums are numeric that start from 0. Like an array

// Gotchas
// enums return a mapped object (reverse mapping) with the key being the enum value and the value being the enum name/key. Occurs when we use numbers as values
// If we're using a string as a value, we CANNOT reasign the value to another string
// If we're using a number as a value, we CAN reasign the value to another number
enum ServerResponseStatus {
  //   Success,
  //   Error,
  Success = 200,
  Error = 500,
  //   Success = "200",
  //   Error = "500",
  //Error = "Error",
}

Object.values(ServerResponseStatus).forEach((value) => {
  if (typeof value === "number") {
    console.log(value);
  }
});

console.log(ServerResponseStatus);

interface ServerResponse {
  status: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    status: ServerResponseStatus.Success,
    data: ["data1", "data2"],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);
