import { Hono } from "hono";
import { DRIZZLE_DB } from "../../../../db/drizzle";
import { accountsSchema } from "../../../../db/schema";

const app = new Hono().get("/", async (ctx) => {
  const data = await DRIZZLE_DB.select({
    id: accountsSchema.id,
    name: accountsSchema.name,
  }).from(accountsSchema);

  return ctx.json({ data: data });
});

export default app;
