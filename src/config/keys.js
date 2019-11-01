import { dev } from "./dev";
import { prod } from "./prod";

let keys;

if (process.env.NODE_ENV === "production") {
  keys = prod;
} else {
  keys = dev;
}

export default keys;
