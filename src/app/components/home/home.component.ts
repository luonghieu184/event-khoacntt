import { Component } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpParams
} from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  apiRoot: string = "https://script.google.com/macros/s/AKfycbzp1brXop99zVGaqSehBVQlO0c5s8b-0fKj4UzPUxx01DkoJWuF/exec?request";
  constructor(private http: HttpClient) { }
  evID : any;
  evTitle:any;
  evDescription:any;
  evContent:any;
  evDateCreate:any;
  evStatus :any;

  doGET() {
    console.log("GET");
    let url = `${this.apiRoot}=getEvent`;
    const httpOptions = {
      params: new HttpParams().set("foo", "moo").set("limit", "25")
    };
    this.http.get(url, httpOptions).subscribe(
      (res: any) => {console.log(res)
        this.evID = res.evID; 
        this.evTitle = res.evTitle; 
        this.evDescription = res.evDescription; 
        this.evContent = res.evContent; 
        this.evDateCreate = res.evDateCreate; 
        this.evStatus = res.evStatus; 
      });
  }

  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/post`;
    const httpOptions = {
      params: new HttpParams().set("foo", "moo").set("limit", "25")
    };
    this.http
      .post(url, { moo: "foo", goo: "loo" }, httpOptions)
      .subscribe(res => console.log(res));
  }


  doDELETE() {
    console.log("DELETE");
    let url = `${this.apiRoot}/delete`;
    const httpOptions = {
      params: new HttpParams().set("foo", "moo").set("limit", "25")
    };
    this.http.delete(url, httpOptions).subscribe(res => console.log(res));
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
    let url = `${this.apiRoot}=getEvent`;
    this.http
      .get(url)
      .toPromise()
      .then(res => console.log(res));
  }
  
}
