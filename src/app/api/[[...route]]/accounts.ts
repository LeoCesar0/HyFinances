import { Hono } from "hono";

const app = new Hono();

app.get("/", (ctx) => {
  return ctx.json({ accounts: [] });
});

export default app;
