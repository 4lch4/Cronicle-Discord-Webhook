import { config } from 'dotenv'
import { join } from 'path'
import { IJobConfig, IJobParams } from '../interfaces'

config({ path: join(__dirname, '..', '..', '.env') })

export const ConfigDefaults: IJobConfig = {
  discordAvatar:
    'https://raw.githubusercontent.com/jhuckaby/Cronicle/master/htdocs/images/logo-1024.png',
  discordUsername: 'Cronicle-Test-Plugin',
  discordWebhook: ''
}

export const ParamDefaults: Required<IJobParams> = {
  ...ConfigDefaults,
  messageType: 'info',
  messageTitle: 'Test Info Message',
  messageBody: 'This is a test info message.'
}
