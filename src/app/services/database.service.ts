import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/mch_db/collections/compilations';
  readonly API_KEY = 'h4juEelJmp-oKf-vn_fnP2Qu1FmwyRhW';

  constructor(private http: HttpClient) { }

  getParams(): HttpParams {
    // const query = {
    //   'userId': this.authService.user.uid
    // };
    const param = new HttpParams().set('apiKey', this.API_KEY);
      // .append('q', JSON.stringify(query));

    return param;
  }

  saveCompilation(compilation: AudioCompilation) {
    this.http.post(this.URL_DB, compilation, { params: this.getParams() }).subscribe(result => console.log(result));
  }
}
