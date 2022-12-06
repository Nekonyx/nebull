import { Worker } from 'bullmq'

import type { WorkerOptions } from 'bullmq'
import type { Consumer } from '../consumer'

export type CreateWorkerParams<TData, TResult> = {
  consumer: Consumer<TData, TResult>
  opts?: WorkerOptions
}

export function createWorker<TData, TResult>(
  params: CreateWorkerParams<TData, TResult>
): Worker<TData, TResult> {
  return new Worker(
    params.consumer.name,
    async (job) => params.consumer.handler(job, job.data),
    params.opts
  )
}
