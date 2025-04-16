// server.ts
import { createServer } from 'miragejs';

const server = createServer({
  routes() {
    this.get('/destinations', () => {
      return [{ id: 1, name: 'Paris', image: 'loading...' }];
    });
  },
});

export default server;
