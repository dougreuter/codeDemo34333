import { IFilterOptionsEntity } from "./IFilterOptionsEntity"
import { IHitsEntity } from "./IHitsEntity"

export interface IResult {
  total: number
  count: number
  hits?: (IHitsEntity)[] | null
  filterOptions?: (IFilterOptionsEntity)[] | null
}
