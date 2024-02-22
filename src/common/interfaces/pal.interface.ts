import type { ISuitability } from ".";
import type { ITypes } from "./types.interface";
import type { IAura } from "./aura.interface";
import type { IBreedMeta } from "./breed.interface";
import type { ISkill } from "./skill.interface";
import type { IStats } from "./stats.interface";

export interface IPal {
  id: number;
  key: string;
  name: string;
  description: string;
  types: ITypes[];
  suitabilities: string[];
  suitability: ISuitability[];
  drops: string[];
  image: string;
  aura: IAura;
  wiki: string;
  skills: ISkill[];
  stats: IStats;
  asset: string;
  genus: string;
  rarity: number;
  price: number;
  size: "l" | "xl" | "xs" | "m" | "s";
  breed: IBreedMeta;
}
