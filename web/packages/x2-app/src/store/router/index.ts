import { selectors } from "./router.selectors";
import { goto } from "./router.goto";
import {path} from "./router.path";

export const router = {
  actions: selectors,
  goto: goto,
  path: path,
};
