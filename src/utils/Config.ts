import { IJobConfig } from '../interfaces'
import { ConfigDefaults } from './Defaults'

export const getConfig = (): IJobConfig => {
  return {
    discordAvatar: process.env.DISCORD_AVATAR || ConfigDefaults.discordAvatar,
    discordUsername: process.env.DISCORD_USERNAME || ConfigDefaults.discordUsername,
    discordWebhook: process.env.DISCORD_WEBHOOK_URL || ConfigDefaults.discordWebhook
  }
}
