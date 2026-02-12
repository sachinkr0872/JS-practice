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

// Put Exhaustive checks

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small cutting chai...`;
  }
  if (size === "medium" || size === "large") {
    return `make extra chai`;
  }
  return `chai order #${size}`;
}

class kulhadChai {
  serve() {
    return ` Serving kulhad chai`;
  }
}
class cutting {
  serve() {
    return ` Serving cutting chai`;
  }
}

// safe guards

function serve(chai: kulhadChai | cutting) {
  if (chai instanceof kulhadChai) {
    return chai.serve();
  }
}
