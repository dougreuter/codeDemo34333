import { IPartSummary } from "./IPartSummary"
import { IPrimaryMediaOrMediaEntity } from "./IPrimaryMediaOrMediaEntity"
import { IBrand } from "./IBrand"
import { IPartsEntity } from "./IPartsEntity"

export interface IHitsEntity {
  publicId: string
  productSlug: string
  name: string
  features?: (null)[] | null
  availableAttributes?: (null)[] | null
  parts?: (IPartsEntity)[] | null
  partSummary: IPartSummary
  brand: IBrand
  categories?: (null)[] | null
  primaryMedia: IPrimaryMediaOrMediaEntity
  media?: (IPrimaryMediaOrMediaEntity)[] | null
  contentSourceName: string
  description?: string | null
}
