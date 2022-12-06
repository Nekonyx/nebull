import { QueueEvents } from 'bullmq'

import type { QueueEventsOptions } from 'bullmq'
import type { Consumer } from '../consumer'

export type CreateQueueEventsParams<TData, TResult> = {
  consumer: Consumer<TData, TResult>
  opts?: QueueEventsOptions
}

export function createQueueEvents<TData, TResult>(
  params: CreateQueueEventsParams<TData, TResult>
): QueueEvents {
  return new QueueEvents(params.consumer.name, params.opts)
}
