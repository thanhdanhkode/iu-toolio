import { PublicPath } from "wxt/browser"
declare const self: ServiceWorkerGlobalScope

export default defineBackground(async () => {
  console.log("Hello background!", { id: browser.runtime.id })
})
