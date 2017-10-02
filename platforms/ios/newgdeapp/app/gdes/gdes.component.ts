import { Component, OnInit } from "@angular/core";
import { GdesService, Gde } from "./gdes.service";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Component({
    selector: "ns-gdes",
    moduleId: module.id,
    templateUrl: "./gdes.component.html",
})
export class GdesComponent implements OnInit {
    findGde$ = new Subject<string>();

    searchResults$ = this.findGde$
        .filter(searchValue =>
            searchValue.replace(/\s+/g, '').length > 0
        )
        .switchMap(searchValue =>
            this.gdesService.getGdes(searchValue)
        )

    gdes: Observable<Gde[]>;

    constructor(
        private gdesService: GdesService
    ) { }

    ngOnInit() {
       //this.gdes = this.gdesService.getGdes(); 
    }
}
