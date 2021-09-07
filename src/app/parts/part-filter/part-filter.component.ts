import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

import { IMinMax } from '../../models/IMinMax';
import { PartSearchValidatorService } from "../validators/PartSearchValidatorService"

@Component({
  selector: 'app-part-filter',
  templateUrl: './part-filter.component.html',
  styleUrls: ['./part-filter.component.css'],
})
export class PartFilterComponent implements OnInit {
  private partsFilterGroupName = 'partsFilterGroup';

  @Input() parentFormGroup = new FormGroup({});
  min: AbstractControl | undefined | null;
  max: AbstractControl | undefined | null;
  filterGroup: AbstractControl | undefined | null;

  @Output() onFilterButtonClick = new EventEmitter<IMinMax>();
  
  constructor(private fb: FormBuilder, private cvs: PartSearchValidatorService) {}

  ngOnInit(): void {
    this.parentFormGroup?.addControl(
      this.partsFilterGroupName,
      this.fb.group(
        {
          min: [null],
          max: [null],
        },
        { validator: this.cvs.minMaxRange }
      )
    );
    this.filterGroup = this.parentFormGroup?.get(this.partsFilterGroupName);
    this.min = this.parentFormGroup?.get(this.partsFilterGroupName)?.get('min');
    this.max = this.parentFormGroup?.get(this.partsFilterGroupName)?.get('max');
  }
  errorMessage(m: any) {
    return this.cvs.errorMessage(m);
  }

  filterClick() {
    const control = this.parentFormGroup?.get(this.partsFilterGroupName);

    if (control && control.valid) {
      const value: IMinMax = {
        min: !!this.min?.value ? this.min?.value : null,
        max: !!this.max?.value ? this.max?.value : null,
      };
      this.onFilterButtonClick.emit(value);
    }
  }
}
