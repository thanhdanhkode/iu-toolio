type OnInstalledReason = "install" | "update" | "chrome_update" | "shared_module_update"

export class BackgroundEventListeners {
  static onInstalled = async ({ reason }: { reason: OnInstalledReason }) => {
    try {
      if (reason === "install") {
        await storage.setItems([
          {
            key: "local:installDate",
            value: Date.now(),
          },
          {
            key: "local:logs",
            value: [],
          },
          {
            key: "local:isFirstRun",
            value: true,
          },
        ])

        await browser.windows.create({
          type: "popup",
          height: 720,
          width: 1280,
          url: browser.runtime.getURL("/app.html"),
          focused: true,
        })
      }

      if (reason === "update") {
        console.log("Extension updated")
      }
    } catch (_) {
      console.error(_)
    }
  }

  static onActionClicked = async () => {
    try {
      const [tab] = await browser.tabs.query({ url: browser.runtime.getURL("/app.html") })
      const update = true

      if (tab) {
        const tabOptions: { active: boolean; url?: string } = { active: true }
        if (update) tabOptions.url = browser.runtime.getURL("/app.html")

        await browser.tabs.update(tab.id!, tabOptions)

        if (update) {
          await browser.windows.update(tab.windowId, {
            focused: true,
          })
        }
      } else {
        await browser.windows.create({
          type: "popup",
          height: 720,
          width: 1280,
          url: browser.runtime.getURL("/app.html"),
          focused: update,
        })
      }
    } catch (_) {
      console.error(_)
    }
  }

  static onCommand = (command: string) => {
    switch (command) {
      case "open-app":
        console.log("Open app command triggered")
        break

      default:
        break
    }
  }

  static onStartup = () => {
    console.log("Extension started")
  }
}
