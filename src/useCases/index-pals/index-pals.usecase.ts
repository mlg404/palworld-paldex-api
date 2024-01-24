import type { IPal } from "../../common/interfaces";

const file = Bun.file("src/pals.json");

const pals: IPal[] = await file.json();

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
}
export const execute = ({ page = 1, limit = 10, filter }: Props) => {
  const start = (page - 1) * limit;
  const end = page * limit;

  const filters = Object.entries(filter || {});
  const content = pals.filter((pal) =>
    filters.every(([key, value]) => {
      if (!value) return true;
      if (typeof pal[key as keyof IPal] === "string")
        return pal[key as keyof IPal] === value;
      return (pal[key as keyof IPal] as string[]).includes(value);
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
