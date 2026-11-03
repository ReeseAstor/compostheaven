import { eveChannel } from 'eve/channels/eve';

// Publishing is schedule-only; public HTTP sessions must not spend AI credits or publish.
export default eveChannel({ auth: [] });
