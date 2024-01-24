import { Elysia } from "elysia";
import { queryIndexPals } from "./schemas";
import { IndexPalsUseCase } from "./useCases";

const app = new Elysia()
  .get(
    "/",
    ({ query: { page, limit, ...filter } }) =>
      IndexPalsUseCase.execute({ page, limit, filter }),
    {
      query: queryIndexPals,
    }
  )
  .listen(8080);

console.log(`🦊 Elysia is running at on port ${app.server?.port}...`);
