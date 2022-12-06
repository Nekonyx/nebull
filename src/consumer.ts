import type { Job } from 'bullmq'

export class Consumer<TData, TResult> {
  public constructor(
    public readonly name: string,
    public readonly handler: (
      job: Job<TData, TResult>,
      data: TData
    ) => Promise<TResult>
  ) {}
}
