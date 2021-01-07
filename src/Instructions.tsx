import React from "react";

const InstructionsContent = () => {
  return (
    <>
      <ol>
        <h3>Encrypt</h3>
        <li>
          <p>Do 1 of 2 things:</p>
          <ol>
            <li>
              <strong>
                Set your own key (a 32 character string -- not sure about
                constraints otherwise)
              </strong>
              <ol>
                <li>Enter a value for the Secret Key field</li>
                <li>Click [Set Secret Key]</li>
              </ol>
            </li>
            <li>
              <b>Generate Random 32 character string</b>
              <ol>
                <li>
                  Click [Random]. You will see a value placed in "Secret Key"
                  field.
                </li>
                <li>Click [Set Secret Key]</li>
              </ol>
            </li>
          </ol>
        </li>
        <h3>Decrypt</h3>
        <li>
          <ol>
            <li>
              <b>Paste/Type in a Message to encrypt</b>
            </li>
            <li>
              <b>Click [Encrypt]</b>
            </li>
            <li>Paste copied value somewhere retrievable</li>
            <li>Click [Copy Hash Contents]</li>
            <li>Paste copied value somewhere retrievable</li>
          </ol>
        </li>
      </ol>
    </>
  );
};

const Instructions = ({ show }) => {
  return show ? <InstructionsContent /> : <></>;
};

export default Instructions;
