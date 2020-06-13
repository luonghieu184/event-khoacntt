import { Component, OnInit } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpParams
} from "@angular/common/http";
@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  apiRoot: string = "https://script.google.com/macros/s/AKfycbzp1brXop99zVGaqSehBVQlO0c5s8b-0fKj4UzPUxx01DkoJWuF/exec?request";
  constructor(private http: HttpClient) { }

  getLastWord(phrWord){
    var nSpace = phrWord.split("-");
    return nSpace[nSpace.length - 1];
  } 
  ngOnInit() {
    
   var eventID = location.search.split("=")[1];
   var getEventID = this.getLastWord(eventID);
   if(getEventID != ""){
    this.doGetEV(getEventID);
   }
  }
  evID : any;
  evTitle:any;
  evDescription:any;
  evContent:any;
  evDateCreate:any;
  evStatus :any;


  doGetEV(id){
    console.log("GET EVENT");
    let url = `${this.apiRoot}=getEventID&evID=`+id;
    const httpOptions = {
      params: new HttpParams().set("foo", "moo").set("limit", "25")
    };
    this.http.get(url, httpOptions).subscribe(
      (res: any) => {console.log(res)
        this.evID = res.evID; 
        // this.evTitle = res.evTitle; 
        // this.evDescription = res.evDescription; 
        this.evContent = res.evContent; 
        // this.evDateCreate = res.evDateCreate; 
        // this.evStatus = res.evStatus; 
      });

  }

}
