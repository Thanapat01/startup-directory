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
          ? "btn btn-xs btn-secondary"
          : "btn btn-xs btn-secondary bg-secondary/30"
      }
      onClick={onClickHandler}
    >
      {props.name}
    </button>
  );
}
