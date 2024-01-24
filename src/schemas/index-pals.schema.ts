import { t } from "elysia";

export const queryIndexPals = t.Object({
  page: t.Optional(t.Numeric()),
  limit: t.Optional(t.Numeric()),

  name: t.Optional(t.String()),
  description: t.Optional(t.String()),
  key: t.Optional(t.String()),
  types: t.Optional(t.String()),
  suitabilities: t.Optional(t.String()),
  drops: t.Optional(t.String()),
  term: t.Optional(t.String()),
});
