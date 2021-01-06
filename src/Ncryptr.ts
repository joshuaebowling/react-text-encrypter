/// <reference path="./index.d.ts" />
import crypto from "crypto";

export class Ncryptr {
  algorithm = "aes-256-ctr";
  secretKey: null | string = null;
  constructor(secretKey: string, algorithm = null) {
    this.secretKey = secretKey;
    console.log(secretKey);
    this.encrypt = this.encrypt.bind(this);
    this.decrypt = this.decrypt.bind(this);
  }
  encrypt(text: string) {
    console.log(this.secretKey);
    const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(this.algorithm, this.secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
      iv: iv.toString("hex"),
      content: encrypted.toString("hex")
    };
  }
  decrypt(hash: Ncryptr.hash) {
    //@ts-ignore
    const decipher = crypto.createDecipheriv(
      this.algorithm,
      this.secretKey,
      Buffer.from(hash.iv, "hex")
    );

    const decrpyted = Buffer.concat([
      decipher.update(Buffer.from(hash.content, "hex")),
      decipher.final()
    ]);

    return decrpyted.toString();
  }
}
// const algorithm = "aes-256-ctr";
// const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
// const iv = crypto.randomBytes(16);

// export const encrypt = (text) => {
//   const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

//   const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

//   return {
//     iv: iv.toString("hex"),
//     content: encrypted.toString("hex")
//   };
// };

// export const decrypt = (hash) => {
//   const decipher = crypto.createDecipheriv(
//     algorithm,
//     secretKey,
//     Buffer.from(hash.iv, "hex")
//   );

//   const decrpyted = Buffer.concat([
//     decipher.update(Buffer.from(hash.content, "hex")),
//     decipher.final()
//   ]);

//   return decrpyted.toString();
// };
