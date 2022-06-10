import { setupWorker, rest } from "msw";

const loginHandler = rest.post("/login", (req, res, ctx) => {
  return res(
    ctx.status(500),
    ctx.json({
      firstName: "John",
      lastName: "Maverick",
    })
  );
});

const handlers = [loginHandler];

const worker = setupWorker(handlers);

export default worker;
