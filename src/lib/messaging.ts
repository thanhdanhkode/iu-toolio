// cSpell:ignore webext

import { defineExtensionMessaging } from "@webext-core/messaging"

interface ProtocolMap {
  getCourseList(filter: string): any
}

export const { sendMessage, onMessage } = defineExtensionMessaging<ProtocolMap>()
