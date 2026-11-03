import { defineSchedule } from 'eve/schedules';

export default defineSchedule({
  cron: '0 9 * * 1',
  content: 'Run the weekly CompostHeaven editorial workflow. Research and publish at most one new useful article. Start with editorial_context and follow all editorial rules. Skip this week if quality checks cannot be met.',
});
