import { Hono } from 'hono'

export const app = new Hono()

app.get('/', (c) => {
  return c.json(
    {
      success : true,
      message : "World Cup Ticketing API"

    },
    200
  );
});

app.get('/health', (c) => {
  return c.json(
    {
      success : true,
      message : "World Cup Ticketing API",
      uptime : 0,
      environment : "dev"

      
      

    },
    200
  );
});


