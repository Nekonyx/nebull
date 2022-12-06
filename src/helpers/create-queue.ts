import { Queue } from 'bullmq'

import type { QueueOptions } from 'bullmq'
import type { Consumer } from '../consumer'

export type CreateQueueParams<TData, TResult> = {
  consumer: Consumer<TData, TResult>
  opts?: QueueOptions
}

export function createQueue<TData, TResult>(
  params: CreateQueueParams<TData, TResult>
): Queue<TData, TResult> {
  return new Queue(params.consumer.name, params.opts)
}
