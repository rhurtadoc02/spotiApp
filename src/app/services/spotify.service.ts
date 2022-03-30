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
      'Authorization':'Bearer BQDi0MjgqPCGTH1bho-FK4LjZKKGcjyUyGh-EwNFsmtZu99cDsD5OsoWq751FRtQkUM1-98pdL9sdVBhfPk'
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

  getArtista( id :string ){
    return this.getQuery(`artists/${id}`);
    
  }
}
