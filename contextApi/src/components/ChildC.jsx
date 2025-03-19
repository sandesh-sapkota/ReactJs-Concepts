import React, { useContext } from "react";
import { data, data1 } from "../App";

function ChildC() {
  const Firstname = useContext(data);
  const gender = useContext(data1);
  return (
    <>
      <h2>
        Hey, my name is {Firstname} and my gender is {gender}.
      </h2>
    </>
  );
}

export default ChildC;