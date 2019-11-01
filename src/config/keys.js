import { dev } from "./dev";
import { prod } from "./prod";

export let keys;

if (process.env.NODE_ENV === "production") {
  keys = prod;
} else {
  keys = dev;
}

return keys;
