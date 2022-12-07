## nebull

useless helpers for bullmq.

### Usage:
```ts
import { createConsumer, createWorker, createQueue, createQueueEvents } from 'nebull'

// enums.ts
export enum QueueName {
  CollectStats = 'collect-stats'
}

// types.ts
export type CollectStatsData = {
  from: Date
  to: Date
}

export type CollectStatsResult = {
  visitors: number
}

// consumers/collect-stats.consumer.ts
export const collectStatsConsumer = createConsumer<CollectStatsData, CollectStatsResult>({
  name: QueueName.CollectStats,
  async handler(job, data) {
    // do something
  }
})

// queues.ts
export const collectStatsQueue = createQueue({
  consumer: collectStatsConsumer,
  opts: { ... }
})

export const collectStatsQueueEvents = createQueueEvents({
  consumer: collectStatsConsumer,
  opts: { ... }
})

// workers.ts
export const collectStatsWorker = createWorker({
  consumer: collectStatsConsumer,
  opts: { ... }
})
```
