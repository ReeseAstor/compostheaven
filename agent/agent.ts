import { defineAgent } from 'eve';

export default defineAgent({
  model: 'anthropic/claude-sonnet-4.6',
  limits: {
    sessionUsage: ({ total }) => total.inputTokens - total.cacheReadTokens >= 150000 || total.outputTokens >= 18000 || (total.costUsd ?? 0) >= 2,
    sessionTimeoutMs: 60 * 60 * 1000,
  },
});
