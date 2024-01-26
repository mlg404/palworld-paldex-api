import { staticPlugin } from "@elysiajs/static";
import { Elysia } from "elysia";
import { queryIndexPals } from "./schemas";
import { IndexPalsUseCase } from "./useCases";

const app = new Elysia()
  .use(staticPlugin())
  .get(
    "/",
    ({ query: { page, limit, term, ...filter } }) =>
      IndexPalsUseCase.execute({ page, limit, term, filter }),
    {
      query: queryIndexPals,
    }
  )
  .listen(3000);

console.log(`🦊 Elysia is running at on port ${app.server?.port}...`);
