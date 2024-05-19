import { useState } from "react";
//If we provide inline functions, everything will be inferred by TS
//If we provide a function reference, we will need to explicitly give/use types, events and element generics

type Person = {
  name: string;
  email: string;
};
export default function Events() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //const formData = new FormData(e.target as HTMLFormElement);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const text = formData.get("text") as string;
    const email = formData.get("email") as string;

    const person: Person = { name: text, email: email };
    console.log(data);
    console.log(person);
  };
  return (
    <section>
      <h2>Events with Ts</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="text"
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          name="email"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}
