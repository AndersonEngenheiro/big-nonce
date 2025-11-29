let lastNonce = 0n

// this is the max value alowed of nonce 
const MAX_UINT64 = 18446744073709551615n

export function nextNonce() {
    const now = BigInt(Date.now())

    // Start from current time (ms) but ensure monotonic growth.
    const candidate = now > lastNonce ? now : lastNonce + 1n;

    if (candidate > MAX_UINT64) {
        throw new Error("Nonce overflow: exceeded 64-bit unsigned integer limit.");
    }

    lastNonce = candidate;
    return candidate;
}





