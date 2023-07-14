const e2p = (s: string) => s.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
const p2e = (s: string) =>
  s.replace(/[۰-۹]/g, (d) => `${"۰۱۲۳۴۵۶۷۸۹".indexOf(d)}`);

export { e2p as English2Persian, p2e as Persian2English };
