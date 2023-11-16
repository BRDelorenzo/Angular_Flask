import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContratosService } from '../../contratos.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-adicionar-contrato',
  templateUrl: './adicionar-contrato.component.html',
  styleUrl: './adicionar-contrato.component.css'
})
export class AdicionarContratoComponent implements OnInit {

  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private contratoService:ContratosService,
  ){

    this.angForm = this.fb.group({
      numeroContrato: ['',Validators.required],
      dtInicio:['',Validators.required],

    })

  }
  ngOnInit(): void {
    
  }

  postdata(forms:any){
      this.contratoService.addContrato(
      this.angForm.value.numeroContrato,
      this.angForm.value.dtInicio,
      ).pipe(first()).subscribe(data =>{
        this.route.navigate(['lista-contrato'])

      });
  }
}
