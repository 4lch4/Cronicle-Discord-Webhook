#!/usr/bin/env node
import { IJobInput, initJob } from '@4lch4/cronicle-plugin-tools'
import { Webhook } from 'discord-ts-webhook'
import { IJobParams } from './interfaces'
import { getFullParams, ParamDefaults } from './utils'

initJob<IJobParams>().then(async (input: IJobInput<IJobParams>) => {
  const { discordAvatar, discordUsername, discordWebhook, messageBody, messageTitle, messageType } =
    getFullParams(input, ParamDefaults)
  // const discordWebhook = params.discordWebhook || ParamDefaults.discordWebhook

  console.log(`discordWebhook = ${discordWebhook}`)

  const webhook = new Webhook({
    url: discordWebhook,
    retryOnLimit: true
  })

  webhook.setUsername(discordUsername)
  webhook.setAvatar(discordAvatar)

  let whRes = undefined

  switch (messageType || ParamDefaults.messageType) {
    case 'info':
      whRes = await webhook.info(
        '**Info Hook**',
        messageTitle || ParamDefaults.messageTitle,
        messageBody || ParamDefaults.messageBody
      )
      break

    case 'success':
      whRes = await webhook.success(
        '**Success Hook**',
        messageTitle || ParamDefaults.messageTitle,
        messageBody || ParamDefaults.messageBody
      )
      break

    case 'warning':
      whRes = await webhook.warning(
        '**Warning Hook**',
        messageTitle || ParamDefaults.messageTitle,
        messageBody || ParamDefaults.messageBody
      )
      break

    case 'error':
      whRes = await webhook.error(
        '**Error Hook**',
        messageTitle || ParamDefaults.messageTitle,
        messageBody || ParamDefaults.messageBody
      )
      break
  }

  console.log(`whRes = ${whRes}`)
})
