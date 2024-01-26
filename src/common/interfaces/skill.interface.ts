import type { TypesEnum } from "../enums";

export interface ISkill {
  level: number;
  name: string;
  type: TypesEnum;
  cooldown: number;
  power: number;
  description: string;
}
