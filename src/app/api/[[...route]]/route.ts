import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app
  .get("/hello", (c) => {
    return c.json({
      message: "Hello Next.js!",
    });
  })
  .get(
    "/hello/:id",
    zValidator(
      "param",
      z.object({
        id: z.string().min(3),
      })
    ),
    (c) => {
      const { id } = c.req.valid("param");
      return c.json({
        message: "Hello ID --> " + id,
      });
    }
  );

app.get("/user", clerkMiddleware(), (c) => {
  const auth = getAuth(c);

  if (!auth?.userId) {
    return c.json({
      message: "Not Authenticated",
    });
  }

  return c.json({
    ...auth,
  });
});

export const GET = handle(app);
export const POST = handle(app);
