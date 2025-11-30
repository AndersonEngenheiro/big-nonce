# Tiny, dependency-free TypeScript utility that returns a monotonic 64-bit nonce using bigint.

What it is

A single exported function that returns a monotonic nonce (64-bit unsigned max) as a bigint. It uses only built-in JS/TS primitives (BigInt, Date) — no external libraries required.

## Example of Use

```ts
import { nextNonce } from "big-nonce";

let bigNumber = nextNonce();
console.log(bigNumber);
