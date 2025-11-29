// index.ts
var lastNonce = 0n;
var MAX_UINT64 = 18446744073709551615n;
function nextNonce() {
  const now = BigInt(Date.now());
  const candidate = now > lastNonce ? now : lastNonce + 1n;
  if (candidate > MAX_UINT64) {
    throw new Error("Nonce overflow: exceeded 64-bit unsigned integer limit.");
  }
  lastNonce = candidate;
  return candidate;
}
export {
  nextNonce
};

//# debugId=135978DFA4201C0A64756E2164756E21
//# sourceMappingURL=index.js.map
