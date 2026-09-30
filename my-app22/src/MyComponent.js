
// export default function MyComponent({title, settitle}) {
//   return (
//     <>
//       <label htmlFor="">Phone Number:</label>
//       <input
//         value={title.phone}
//         onChange={(events) => {
//           settitle({ ...title, phone: events.target.value });
//         }}
//       />
//     </>
//   );
// }

import ComponentInput from "./ComponentInput";
import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";

export default function MyComponent() {
  const dataUser = useContext(UserContext)

  return (
    <>
      <h3> This is the {dataUser.head} of the component </h3>

      <ComponentInput />

      <h3> This is the footer of the component </h3>
    </>
  );
}
