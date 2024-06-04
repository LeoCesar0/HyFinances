import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

export const DRIZZLE_SQL = neon(process.env.DATABASE_URL!);
export const DRIZZLE_DB = drizzle(DRIZZLE_SQL);
