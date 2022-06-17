import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(){
    let url: string = 'https://widner.codefactory.live/FE16-CR06-API/service.php';
    return this.http.get(url);
  }

  getItem(id: number){
    let url: string = 'https://widner.codefactory.live/FE16-CR06-API/service.php?id=' + id;
    // console.log(url);
    return this.http.get(url);
  }
}