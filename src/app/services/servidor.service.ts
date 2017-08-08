import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServidorService{
  private apiURL = 'http://127.0.0.1:8080/v1/'

  constructor(private http: Http) { }

  getData(tabla, params){
    return this.http.get(this.apiURL + tabla + "/?" + params)
      .map((res: Response) => res.json());
  }

  postData(tabla, elemento){
    return this.http.post(this.apiURL + tabla, elemento)
      .map((res:Response) => res.json());
  }

  editData(tabla, elemento){
    console.log('Entrando al editData....')
    return this.http.put(this.apiURL + tabla + "/" + elemento.Id, elemento)
      .map((res:Response) => res.json());
  }

  deleteData(tabla, id){
    console.log('Entrando al deleteData....')
    return this.http.delete(this.apiURL + tabla + "/" + id)
      .map((res:Response) => res.json());
  }
}
