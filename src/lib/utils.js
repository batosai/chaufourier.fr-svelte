export function humanDate(s) {
  const d = new Date(s);

  return d.toLocaleString();
}
