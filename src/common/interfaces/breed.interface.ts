export interface IBreedMeta {
  /**
   * Used in calculating the children from two parents.
   * The child's rank is calculated by floor((parent_a_rank + parent_b_rank + 1) / 2)
   */
  rank: number;

  /**
   * Defines the check order for resolving ties in breeding outcomes.
   * Lower values are prioritized when two potential offspring are equidistant from the parent's average rank.
   */
  order: number;

  /**
   * If false, the pal cannot be the result of parents other than the child if no special cases apply.
   */
  child_eligble: boolean;

  /**
   * The probability from 0.0 to 1.0 that the Pal will be male.
   */
  male_probability: number;
}
