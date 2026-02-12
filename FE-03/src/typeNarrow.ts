// ------------------ Type Narrowing and Type Guards -------------------

// --------- Type Narrowing  ----------
function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `Chai order: ${kind}`;
}

//-------  Truthiness in Narrowing -------

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default Masala chai`;
}
