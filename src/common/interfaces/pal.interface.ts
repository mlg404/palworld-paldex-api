import type { SuitabilitiesEnum, TypesEnum } from "../enums";
import type { IAura } from "./aura.interface";

export interface IPal {
  id: number;
  key: string;
  name: string;
  description: string;
  types: TypesEnum[];
  suitabilities: SuitabilitiesEnum[];
  drops: string[];
  image: string;
  aura: IAura;
  wiki: string;
}
