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
          ? "btn btn-sm btn-secondary rounded-full hover:bg-secondary"
          : "btn btn-sm btn-secondary bg-secondary/30 rounded-full hover:bg-secondary/30"
      }
      onClick={onClickHandler}
    >
      {props.name}
    </button>
  );
}
