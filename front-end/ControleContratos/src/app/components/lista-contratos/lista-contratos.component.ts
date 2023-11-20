import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContratosService } from '../../contratos.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-lista-contratos',
  templateUrl: './lista-contratos.component.html',
  styleUrl: './lista-contratos.component.css'
})
export class ListaContratosComponent implements OnInit {
  contratos: any;

  constructor(private contratosService:ContratosService){

  }

  ngOnInit(): void {
    this.contratosService.listContratos().subscribe((data:any)=>{
      this.contratos = data.Contrato
    }
  )}

}
