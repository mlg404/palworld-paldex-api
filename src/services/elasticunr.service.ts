import elasticunr from "elasticlunr";
import type { IPal } from "../common/interfaces";
const file = Bun.file("src/pals.json");

const pals: IPal[] = await file.json();

const search = elasticunr<IPal>(function () {
  this.addField("types");
  this.addField("suitabilities");
  this.addField("name");
  this.addField("description");
  this.addField("drops");
  this.addField("key");
  this.setRef("id");
});

pals.forEach((pal) => {
  search.addDoc({
    ...pal,
    suitabilities: pal.suitability.map((suitability) => suitability.type),
  });
});

export const execute = (query?: string) => {
  if (!query) return pals;
  const result = search.search(query);
  return pals.filter((pal) => result.some((item) => +item.ref === pal.id));
};
