import type { IPal } from "../../common/interfaces";
import * as elasticurnService from "../../services";

interface IFilter {
  name?: string;
  description?: string;
  key?: string;
  types?: string;
  suitabilities?: string;
  drops?: string;
}
interface Props {
  page?: number;
  limit?: number;
  filter?: IFilter;
  term?: string;
}

const isSameValueOrIncludedInList = (
  value: string,
  key: keyof IPal,
  object: IPal
) => {
  if (typeof object[key as keyof IPal] === "string")
    return object[key as keyof IPal] === value;
  return (object[key as keyof IPal] as string[]).includes(value);
};

export const execute = ({ page = 1, limit = 10, filter, term }: Props) => {
  const start = (page - 1) * limit;
  const end = page * limit;

  const pals = elasticurnService.execute(term || "");

  const filters = Object.entries(filter || {});
  const content = pals.filter((pal) =>
    filters.every(([key, value]) => {
      if (!value) return true;
      return isSameValueOrIncludedInList(value, key as keyof IPal, pal);
    })
  );
  const contentSliced = content.slice(start, end);

  return {
    content: contentSliced,
    page,
    limit,
    count: contentSliced.length,
    total: content.length,
  };
};
