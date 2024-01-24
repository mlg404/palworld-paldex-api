import { Elysia } from "elysia";
import { queryIndexPals } from "./schemas";
import { IndexPalsUseCase } from "./useCases";

const app = new Elysia()
  .get("/", ({ query }) => IndexPalsUseCase.execute(query), {
    query: queryIndexPals,
  })
  .listen(8080);

console.log(`🦊 Elysia is running at on port ${app.server?.port}...`);
