import { Injectable } from '@angular/core'
import { AbstractControl } from '@angular/forms'
import { PartSearchValidatorError } from "./PartSearchValidatorError"

@Injectable({
  providedIn: 'root'
})
export class PartSearchValidatorService {

  minMaxRange(group: AbstractControl): { [key: string]: boolean}  | null {
    let min = group.get('min')
    let max = group.get('max')
    if (min?.pristine && max?.pristine) {
      return null
    }
    if ((typeof min?.value !== 'number' && typeof max?.value !== 'number')) {
      console.log({ mn: min?.value })
      return { [PartSearchValidatorError.MinOrMaxRequired]: true }

    }
    if (typeof max?.value === 'number' && typeof min?.value === 'number') {
      if (min.value > max.value) {
        return { [PartSearchValidatorError.MinValNeedsToBeLess]: true }
      }
    }
    return null
  }
  errorMessage(error: { [key: string]: boolean}  | undefined) {
    if (!error) {
      return ''
    }
    return Object.keys(error)
  }
}
