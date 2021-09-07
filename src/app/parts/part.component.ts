import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { IMinMax } from "../models/IMinMax"
import { PartSearchService } from "./part.search.service"
import { IPartsSearchResultModel } from "../models/IPartsSearchResultModel"
import { filter } from 'rxjs/operators'
@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {
  searchForm = this.fb.group({});
  result$: Observable<IPartsSearchResultModel[]> | undefined
  minMax: IMinMax = { min: null, max: null };
  mediaServer = environment.mediaServer;
  
  constructor(private fb: FormBuilder, private partsService: PartSearchService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(filter(params => !!params.q))
      .subscribe((s) =>
        this.result$ = this.partsService.searchParts(s.q))

  }
  onFilterButtonClick(value: IMinMax) {
    this.minMax = value
  }

}