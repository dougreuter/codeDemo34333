import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable, of, throwError } from "rxjs"
import { catchError, map, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment'
import { IFakeData } from '../models/fakedata/IFakeData'
import { IPartsSearchResultModel } from '../models/IPartsSearchResultModel'

@Injectable({
  providedIn: 'root'
})
export class PartSearchService {
  private url = 'api/parts/red_helmets.json';
  constructor(private http: HttpClient) { }

  searchParts(q: string = ''): Observable<IPartsSearchResultModel[]> {
    if (!environment.production) {
      return q === environment.fakeQuery ? this.http.get<IFakeData>(this.url).pipe(
        map(fakedata => (
          fakedata.result.hits?.map(hit => {
            const d: IPartsSearchResultModel = {
              name: hit.name,
              brand: hit.brand.name,
              priceMin: Math.min(...hit.parts?.map(m => m.prices.retail) || [0]),
              priceMax: Math.max(...hit.parts?.map(m => m.prices.retail) || [0]),
              media: hit.primaryMedia
            }
            return d
          }) || []
        )),

        tap(data => console.log('data: ', JSON.stringify(data))),
        catchError(this.handleError)
      ) : of([])
    }
    return of([])

  }
  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }
    console.error(errorMessage)
    return throwError(errorMessage)
  }
}
