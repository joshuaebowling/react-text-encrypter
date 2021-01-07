import React, { useState, useEffect } from "react";
import { Ncryptr } from "./Ncryptr";

const Decrypt = () => {
  const [secret, setSecret] = useState<string>("");
  const [strHash, setStrHash] = useState<string>("");
  const [hash, setHash] = useState<object | null>(null);
  const [keyIsValid, setKeyIsValid] = useState(false);
  const [ncryptr, setNcryptr] = useState<Ncryptr | null>(null);
  const [message, setMessage] = useState<string | null>("");
  const parseHash = () => {
    console.log("parsehash");
    try {
      let _hash = JSON.parse(strHash);
      setHash(_hash);
      console.log(_hash);
    } catch (e) {
      alert("hash parse error");
    }
  };
  useEffect(() => {
    if (!hash) return;
    setMessage(ncryptr.decrypt(hash) || null);
  }, [hash]);
  return (
    <form>
      <label htmlFor="secretkey">Secret key</label>
      <input name="secretkey" onChange={(e) => setSecret(e.target.value)} />
      <button
        type="button"
        onClick={() => {
          setNcryptr(new Ncryptr(secret));
        }}
      >
        Set Secret Key
      </button>
      {!keyIsValid && (
        <p>
          <small>Secret Key need to be 32 characters</small>
        </p>
      )}
      <p />
      <label htmlFor="hash">Message</label>
      <br />
      <textarea
        name="hash"
        onChange={(e) => {
          setStrHash(e.target.value);
        }}
      />
      <br />
      <button
        type="button"
        disabled={!ncryptr}
        onClick={() => {
          parseHash();
        }}
      >
        decrypt
      </button>
      {message && <pre>{JSON.stringify(message, null, 2)}</pre>}
      <hr />
    </form>
  );
};

export default Decrypt;
