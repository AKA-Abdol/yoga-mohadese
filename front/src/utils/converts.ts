const e2p = (s: string | number) => {
  if (typeof s === "number") {
    s = s.toString();
  }
  return s.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
};
const p2e = (s: string | number) => {
  if (typeof s === "number") {
    s = s.toString();
  }
  return s.replace(/[۰-۹]/g, (d) => `${"۰۱۲۳۴۵۶۷۸۹".indexOf(d)}`);
};

const addCommaEach3Digits = (s: string | number): string => {
  if (typeof s === "number") {
    s = s.toString();
  }
  const regex = /\w{1,3}/g;
  const chunks = s.match(regex) || [];
  return chunks.join(",");
};

const addToman = (s: string | number) => {  
  if (typeof s === "number") {
    s = s.toString();
  }
  return `${s} تومان`;
};

export { e2p as English2Persian, p2e as Persian2English, addToman, addCommaEach3Digits };
