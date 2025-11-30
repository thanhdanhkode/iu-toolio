import { PublicPath } from "wxt/browser";

export default defineBackground(async () => {
  console.log("Hello background!", { id: browser.runtime.id });
  console.log("Browser info:", await browser.system.display.getInfo());
});
