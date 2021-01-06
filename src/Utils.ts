const alphanum = "aAbBcCdDeEfFgGHhIIJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
  ""
);
export const random = (size: number, usePrefix: boolean = false) => {
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push(alphanum[Math.floor(Math.random() * alphanum.length)]);
  }
  const base = result.join("");
  if (!usePrefix) return base;
  return "TEST" + base.substr(0, base.length - 4);
};
