import React, { useState, useEffect } from "react";
import "./styles.css";
import Encrypt from "./Encrypt";
import Decrypt from "./Decrypt";

const modes = {
  encrypt: "encrypt",
  decrypt: "decrypt"
};
const CurrentComponent = ({ mode }) => {
  return mode === modes.encrypt ? <Encrypt /> : <Decrypt />;
};
export default function App() {
  const [mode, setMode] = useState<modes.encrypt | modes.decrypt>(
    modes.encrypt
  );
  return (
    <div className="App">
      <h1>Ncyptr</h1>
      <h2>I'm not an erncryption expert. Use at own risk </h2>
      <small>If you can improve the encryption submit a PR</small>
      <hr />
      <label htmlFor="mode">Mode</label>
      <select name="mode" onChange={(e) => setMode(e.target.value)}>
        <option value={modes.encrypt}>{modes.encrypt}</option>
        <option value={modes.decrypt}>{modes.decrypt}</option>
      </select>
      <CurrentComponent mode={mode} />
      <p>
        Thanks to https://attacomsian.com/blog/nodejs-encrypt-decrypt-data for
        this base of this code
      </p>
    </div>
  );
}
