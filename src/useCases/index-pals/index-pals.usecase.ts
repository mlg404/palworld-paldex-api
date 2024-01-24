const file = Bun.file("src/pals.json");

const pals = await file.json();

interface Props {
  page?: number;
  limit?: number;
}
export const execute = ({ page = 1, limit = 10 }: Props) => {
  const start = (page - 1) * limit;
  const end = page * limit;

  const content = pals.slice(start, end);

  return {
    content,
    page,
    limit,
    count: content.length,
    total: pals.length,
  };
};
