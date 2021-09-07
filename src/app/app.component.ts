import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs/operators'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    // for demo purposes
    if (!environment.production) {
      this.router.events.pipe(filter(f => f instanceof NavigationEnd)).subscribe(s => {
        this.route.queryParams.pipe(filter(params => !params.q))
          .subscribe((s) =>
            this.router.navigate(['/parts'], { queryParams: { q: 'red mens helmet' } }))
      })
    }
  }
}
