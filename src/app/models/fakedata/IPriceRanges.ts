import { IBaseOrRetailOrDealer } from "./IBaseOrRetailOrDealer"

export interface IPriceRanges {
  base: IBaseOrRetailOrDealer
  retail: IBaseOrRetailOrDealer
  dealer: IBaseOrRetailOrDealer
}
