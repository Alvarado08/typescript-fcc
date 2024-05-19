import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/about",
    text: "About",
  },
];

export default function StateComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello World");
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);
  return (
    <div>
      <button
        onClick={() => {
          setCount(25);
          //setCount("Ts kicking in");
          setText("Bye World");
          setList([...list, "new item"]);
          setLinks([...links, { id: 3, url: "/contact", text: "Contact" }]);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
