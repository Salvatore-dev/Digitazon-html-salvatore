import axios from "axios";

import { useState, useEffect } from "react";

export default function Logout(params) {
  const [check, setCheck] = useState(false);
  console.log("sono nella logout", check);
  function sendLoguot() {
    console.log("ciao");
  }

  return (
    <>
      <div>sono nella logout</div>
      <button type="submit" onClick={() => setCheck(true)}>
        Logout
      </button>
    </>
  );
}
