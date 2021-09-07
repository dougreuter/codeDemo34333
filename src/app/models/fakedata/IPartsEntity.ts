import { IPrimaryMediaOrMediaEntity } from "./IPrimaryMediaOrMediaEntity"
import { IVendor } from "./IVendor"
import { IBrand } from "./IBrand"
import { IInventory } from "./IInventory"
import { IPrices } from "./IPrices"

export interface IPartsEntity {
  partNumber: string
  punctuatedPartNumber: string
  description: string
  prices: IPrices
  inventory: IInventory
  subCommodityCodeId: string
  adsPermitted?: boolean | null
  status: string
  brand: IBrand
  vendor: IVendor
  vendorPartNumber: string
  vendorPunctuatedPartNumber: string
  primaryMedia: IPrimaryMediaOrMediaEntity
  media?: (null)[] | null
  attributes?: (null)[] | null
  fitments?: (null)[] | null
  unitOfMeasure: string
  itemWeight: number
  height: number
  length: number
  width: number
  popularity: number
  programs?: (null)[] | null
  contentSourceName: string
  bestMatch?: boolean | null
  discontinuedDate?: string | null
  upc?: string | null
}
