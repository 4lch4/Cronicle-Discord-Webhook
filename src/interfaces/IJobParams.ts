export interface IJobParams {
  discordUsername?: string
  discordWebhook?: string
  discordAvatar?: string
  messageType?: 'info' | 'success' | 'warning' | 'error'
  messageTitle?: string
  messageBody?: string
}
