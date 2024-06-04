import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

export const DRIZZLE_SQL = neon(process.env.DATABASE_URL!);
export const DRIZZLE_DB = drizzle(DRIZZLE_SQL, {
  schema,
});
