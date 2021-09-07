import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { IMinMax } from "../../models/IMinMax"
import { IPartsSearchResultModel } from "../../models/IPartsSearchResultModel"

@Component({
  selector: 'app-part-grid',
  templateUrl: './part-grid.component.html',
  styleUrls: ['./part-grid.component.css']
})
export class PartGridComponent implements OnInit {
  @Input()
  result: Observable< IPartsSearchResultModel[]> | null | undefined;

  @Input()
  minMax: IMinMax  = {min:null,max:null};
  mediaServer = environment.mediaServer;
  constructor() { }

  ngOnInit(): void {
  }

}
