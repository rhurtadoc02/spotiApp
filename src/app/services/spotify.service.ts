import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 

    
  }


  getQuery( query: string){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDIsKMXmxJLgR5HgEMxgSHkGFHeRO6atfU9b4e0deoMTAdIrXiKxlzw7W8xZpER2eExfMB6guKkChCNkkk'
    });

    return this.http.get(url, {headers});
  }

  
  getNewRealeses(){

    return this.getQuery('browse/new-releases?limit=20')
                .pipe(map( data =>data['albums'].items));
              
  }

  getArtistas(termino:string){
    
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( data=>data['artists'].items));
      
  }
}
