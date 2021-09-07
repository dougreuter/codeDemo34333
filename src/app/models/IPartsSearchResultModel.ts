import { IPrimaryMediaOrMediaEntity } from './fakedata/IPrimaryMediaOrMediaEntity'

 
export interface IPartsSearchResultModel {
  name: string
  brand: string
  priceMin: number
  priceMax: number
  media: IPrimaryMediaOrMediaEntity
}
