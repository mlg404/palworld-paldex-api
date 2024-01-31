export interface IStats {
  hp: number;
  attack: {
    melee: number;
    ranged: number;
  };
  defense: number;
  speed: {
    ride: number;
    run: number;
    walk: number;
  };
  stamina: number;
  support: number;
}
