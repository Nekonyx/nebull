import type { Job } from 'bullmq'
import { Consumer } from '../consumer'

export type CreateConsumerParams<TData, TResult> = {
  name: string
  handler(job: Job<TData, TResult>, data: TData): Promise<TResult>
}

export function createConsumer<TData, TResult>({
  name,
  handler
}: CreateConsumerParams<TData, TResult>): Consumer<TData, TResult> {
  return new Consumer(name, handler)
}
