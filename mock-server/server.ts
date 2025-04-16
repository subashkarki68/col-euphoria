import { createServer } from 'miragejs';

import { DESTINATIONS } from './data/destinations/destinations';
import { STATISTICS } from './data/statistics/statistics';

const server = createServer({
  routes() {
    this.get('/destinations', () => {
      return DESTINATIONS;
    });
    this.get('/statistics', () => {
      return STATISTICS;
    });
  },
});

export default server;
