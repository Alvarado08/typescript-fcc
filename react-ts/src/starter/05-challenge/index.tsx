// The component will consist of 3 props: type, name and email
// If type is "basic", only name is required and container bg is green
// If type is "advanced", name and email are required and container bg is red

type BasicProps = {
  type: "basic";
  name: string;
};
type AdvancedProps = {
  type: "advanced";
  name: string;
  email: string;
};

// We can also create a general ProfileCard union type
// type ProfileCard = BasicProps | AdvancedProps;

export default function Challenge(props: BasicProps | AdvancedProps) {
  // We can destructure the props
  // const { type, name, email } = props;
  return props.type === "basic" ? (
    <article style={{ backgroundColor: "green", padding: 10, color: "white" }}>
      User: {props.name}
    </article>
  ) : (
    <article style={{ backgroundColor: "red", padding: 10, color: "white" }}>
      User: {props.name} - Email:{props.email}
    </article>
  );
}
