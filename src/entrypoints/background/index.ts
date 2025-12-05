import { onMessage } from "@/lib/messaging"
import { EdusoftWebInstance } from "@/modules/edusoftweb"
import { BackgroundEventListeners } from "./listeners"

export default defineBackground(async () => {
  console.log("Hello background!", { id: browser.runtime.id })

  browser.runtime.onInstalled.addListener(BackgroundEventListeners.onInstalled)

  const browserAction = browser.action || browser.browserAction
  browserAction.onClicked.addListener(BackgroundEventListeners.onActionClicked)

  browser.runtime.onStartup.addListener(BackgroundEventListeners.onStartup)

  EdusoftWebInstance.login("EEACIU24018", "790198")

  onMessage("getCourseList", (message) => {
    return EdusoftWebInstance.getCourse(message.data)
  })
})
