import { useState, useEffect } from "react";
import { useTimer } from "./timer";

export default function Header() {
  let count = useTimer();

  //   let aps = AtomsPerSec();
  {
    return (
      <div>
        <h2>Can you enrich enough atoms to make a </h2>
        <h1>REACTION!</h1>
        <h2>You have {count} atoms</h2>
        <h2>You are producing # atoms per secound</h2>
        <h3>Click the react logo to collide more atoms </h3>
      </div>
    );
  }
}
