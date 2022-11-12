import { useState } from "react";

export default function Chip(props) {
  let [active, setActive] = useState(false);

  function onClickHandler() {
    setActive(!active);
  }

  return (
    <button
      className={
        active
          ? "btn btn-sm btn-primary rounded-full hover:bg-primary"
          : "btn btn-sm btn-primary bg-primary/30 rounded-full hover:bg-primary/30"
      }
      onClick={onClickHandler}
    >
      {props.name}
    </button>
  );
}
