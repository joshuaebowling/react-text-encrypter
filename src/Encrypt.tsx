import React, { useState, useEffect } from "react";
import { Ncryptr } from "./Ncryptr";
import { random } from "./Utils";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Encrypt = () => {
  const [secretCandidate, setSecretCandidate] = useState<string>("");
  const [secret, setSecret] = useState<string>("");
  const [ncryptr, setNcryptr] = useState<Ncryptr | null>(null);
  const [encryptedMessage, setEncryptedMessage] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");
  const [keyIsValid, setKeyIsValid] = useState(false);
  const [strEncryptedMessage, setStrEncryptedMessage] = useState<string>("");
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
  useEffect(() => {
    setStrEncryptedMessage(JSON.stringify(encryptedMessage));
  }, [encryptedMessage]);
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
      <button
        type="button"
        onClick={() => {
          const rando = random(32, false);
          setSecretCandidate(rando);
          setSecret(rando);
        }}
      >
        Random
      </button>
      <CopyToClipboard text={secret} onCopy={() => {}}>
        <button type="button">Copy Key</button>
      </CopyToClipboard>

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
        disabled={ncryptr === null || secret === ""}
        onClick={() => setEncryptedMessage(ncryptr?.encrypt(message))}
      >
        Encrypt
      </button>
      {encryptedMessage && (
        <>
          <pre>{JSON.stringify(encryptedMessage, null, 2)}</pre>
          <CopyToClipboard text={strEncryptedMessage} onCopy={() => {}}>
            <button type="button">Copy Hash Contents</button>
          </CopyToClipboard>
          <h3 style={{ color: "red" }}>
            Warning!!! You need both the secret key and the Hash Contents to
            decrypt
          </h3>
        </>
      )}
      <hr />
    </form>
  );
};

export default Encrypt;
