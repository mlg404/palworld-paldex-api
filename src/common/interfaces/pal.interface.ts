import type { ISuitability } from ".";
import type { TypesEnum } from "../enums";
import type { IAura } from "./aura.interface";
import type { ISkill } from "./skill.interface";

export interface IPal {
  id: number;
  key: string;
  name: string;
  description: string;
  types: TypesEnum[];
  suitabilities: string[];
  suitability: ISuitability[];
  drops: string[];
  image: string;
  aura: IAura;
  wiki: string;
  skills: ISkill[];
}
