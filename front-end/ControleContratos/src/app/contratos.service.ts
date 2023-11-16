import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Contratos } from './contratos.model';


@Injectable({
  providedIn: 'root'
})
export class ContratosService {


  baseUrl:string = "http://127.0.0.1:5000/"



  constructor(private httpClient : HttpClient) {}

  public addContrato(
    numeroContrato:any,dtInicio:any
  ){
    return this.httpClient.post<any>(this.baseUrl+'contratos',{numeroContrato,dtInicio})
    .pipe(map((Contratos:any) => {
      return Contratos;
    }))
  }
}
