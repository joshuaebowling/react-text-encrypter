import React, { useState, useEffect } from "react";
import { Ncryptr } from "./Ncryptr";

const Encrypt = () => {
  const [secretCandidate, setSecretCandidate] = useState<string>(
    "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3"
  );
  const [secret, setSecret] = useState<string>("");
  const [ncryptr, setNcryptr] = useState<Ncryptr | null>(null);
  const [encryptedMessage, setEncryptedMessage] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");
  const [keyIsValid, setKeyIsValid] = useState(false);
  const onSetSecret = (val: string) => {
    setSecret(val);
  };
  useEffect(() => {
    setNcryptr(new Ncryptr(secret));
  }, [secret]);
  useEffect(() => {
    console.log("true to do stuff");
    setKeyIsValid(secretCandidate.length === 32);
  }, [secretCandidate]);
  return (
    <form>
      <label htmlFor="secretkey">Secret key</label>
      <input
        name="secretkey"
        onChange={(e) => setSecretCandidate(e.target.value)}
        value={secretCandidate}
      />
      <button type="button" onClick={() => setSecret(secretCandidate)}>
        Set Secret Key
      </button>
      {!keyIsValid && (
        <p>
          <small>Secret Key need to be 32 characters</small>
        </p>
      )}
      <p />
      <label htmlFor="message" value={message}>
        Message
      </label>
      <br />
      <textarea name="message" onChange={(e) => setMessage(e.target.value)} />
      <br />
      <button
        type="button"
        disabled={ncryptr === null}
        onClick={() => setEncryptedMessage(ncryptr?.encrypt(message))}
      >
        Encrypt
      </button>
      {encryptedMessage && (
        <pre>{JSON.stringify(encryptedMessage, null, 2)}</pre>
      )}
      <hr />
    </form>
  );
};

export default Encrypt;
