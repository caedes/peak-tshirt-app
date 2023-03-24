import { rest } from "msw";
import { createTshirt } from "testUtils/fixtures";

export const handlers = [
  rest.get("/tshirts/:id", (req, res, ctx) => {
    const { id } = req.params;

    return res(ctx.status(200), ctx.json(createTshirt({ id: Number(id) })));
  }),
];
