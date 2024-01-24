import { t } from "elysia";

export const queryIndexPals = t.Object({
  page: t.Optional(t.Numeric()),
  limit: t.Optional(t.Numeric()),
});
