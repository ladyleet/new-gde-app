import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

export interface Gde {
  avatar: string;
  bio: string;
  category: string;
  fullname: string;
  location: string;
  roles: string;
  skills: string;
  social: {
    gplus: string;
    linkedin: string;
    twitter: string;
  };
}

export interface GdeContainer {
  gde: Gde;
}

@Injectable()
export class GdesService {

  constructor(public http: Http) {

  }

  getGdes(query: string): Observable<Gde[]> {
    return this.http.get('https://gde-assistant.firebaseio.com/gdes.json')
      .map(res => res.json())
      .map((containers: GdeContainer[]) =>
        containers
          .filter(obj => obj.gde.skills.includes(query))
          .map(obj => obj.gde)
      )
  }
}