import React, { useState, useEffect } from "react";
import "./styles.css";
import Encrypt from "./Encrypt";
import Decrypt from "./Decrypt";
import Instructions from "./Instructions";

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
  const [showInstructions, setShowInstructions] = useState(false);
  return (
    <div className="App">
      <h1>Ncyptr</h1>
      <h2>
        I'm not an erncryption expert. I found an article (see below) that
        outlined it. I read up a bit on from the sources he left and thought it
        seemed reasonable.Use at own risk{" "}
      </h2>
      <small>If you can improve the encryption submit a PR</small>
      <hr />
      <button
        onClick={() => setShowInstructions(!showInstructions)}
        type="button"
      >
        {showInstructions ? "CLOSE" : "???HELP???"}
      </button>
      <Instructions show={showInstructions} />
      <br />
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
