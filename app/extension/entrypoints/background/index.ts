import { PublicPath } from "wxt/browser"
import { blackboardInstance } from "./modules/blackboard"
import { edusoftWebInstance } from "./modules/edusoft"

export default defineBackground(async () => {
  console.log("Hello background!", { id: browser.runtime.id })
})
