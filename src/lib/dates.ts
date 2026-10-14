const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Parses YYYY-MM-DD as a local date (avoids timezone shifts). */
export function parseDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function formatDate(iso: string) {
  const d = parseDate(iso);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export function dayMonth(iso: string) {
  const d = parseDate(iso);
  return { day: String(d.getDate()).padStart(2, "0"), month: months[d.getMonth()], year: d.getFullYear() };
}

export function formatRange(start: string, end?: string) {
  if (!end) return formatDate(start);
  const a = parseDate(start);
  const b = parseDate(end);
  if (a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth()) {
    return `${a.getDate()} – ${b.getDate()} ${months[b.getMonth()]} ${b.getFullYear()}`;
  }
  return `${formatDate(start)} – ${formatDate(end)}`;
}

export function inr(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}
