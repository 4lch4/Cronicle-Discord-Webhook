import { IJobInput } from '@4lch4/cronicle-plugin-tools'

/**
 * Get the params provided by the job input object. Usually they are available
 * at `input.params`, but if the job is a chained job, then the params are
 * available at `input.chain_data` instead. If the `chain_data` value is set,
 * then its value is returned. Otherwise, `input.params` is returned.
 *
 * @param input The input object passed to the job.
 * @param defaultValues An object containing a default value for each parameter.
 * @returns An object containing the values of the input object, with defaults
 *         applied and of the provided <T> type.
 */
export const getFullParams = <T>(input: IJobInput<T>, defaultValues: Required<T>): Required<T> => {
  if (input.chain_data) return { ...defaultValues, ...input.chain_data }
  else return { ...defaultValues, ...input.params }
}

export * from './Config'
export * from './Defaults'
