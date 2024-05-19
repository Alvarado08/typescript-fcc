import { type PropsWithChildren } from "react";

// type ComponentProps = {
//     id: number;
//     name: string;
//     children?: React.ReactNode;
// };

type ComponentProps = PropsWithChildren<{
  id: number;
  name: string;
  children?: React.ReactNode;
}>;

// Method 1
// export default function Props({ id, name }: { id: number; name: string }) {
//   return (
//     <div>
//       {id} - {name}
//     </div>
//   );
// }

// Method w/Type alias
export default function Props({ id, name, children }: ComponentProps) {
  return (
    <div>
      {id} - {name}
      {children}
    </div>
  );
}
