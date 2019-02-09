import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";

const api_url = "https://numbersapi.com";

async function GetInfo(number) {
  const result = await fetch(api_url + `/${number}`);
  alert(result);
  return result;
}

const Lookup = ({ number, setNumber }) => {
  return (
    <div>
      <Input
        label="Number"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <br />
      <Button onClick={() => GetInfo(number)}>Lookup</Button>
    </div>
  );
};

export default Lookup;
