import { Pipe, PipeTransform } from '@angular/core'
import { IMinMax } from "../../models/IMinMax"
import { IPartsSearchResultModel } from "../../models/IPartsSearchResultModel"

@Pipe({ name: 'filterminmax' })
export class PartMinMaxFilterPipe implements PipeTransform {
  transform(partsResult: IPartsSearchResultModel[] | null, filter: IMinMax) {
    if (!partsResult || !filter || (!filter.max && !filter.min)) {
      return partsResult
    }
    return partsResult.filter(f => {
      let returnval = true
      if (filter.min && filter.min >= f.priceMin) {
        returnval = false
      }
      if (filter.max && filter.max <= f.priceMax) {
        returnval = false
      }
      return returnval
    })

  }
}
