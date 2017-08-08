import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../services/servidor.service';

@Component({
  selector: 'tabla',
  templateUrl: './tabla.component.html',
})

export class TablaComponent implements OnInit{
  public arrayNorma = [];
  norms: any = [];
  newData: any = {};
  show_form = false;
  save_click = false;
  options_buttons = false;

  constructor(private service: ServidorService){}

  ngOnInit(){
    this.service.getData('ejemplo', '')
    .subscribe(
      norms => {
        this.norms = norms;
      }
    )
  }

  save_new(){
    this.newData.Monto = parseInt(this.newData.Monto)
    this.newData.Numero = parseInt(this.newData.Numero)

    this.service.postData('ejemplo', this.newData)
    .subscribe(
      res => this.newData = res
    )

    this.show_form = false;
    location.reload();
  }

  save_edit() {
    this.newData.Monto = parseInt(this.newData.Monto)
    this.newData.Numero = parseInt(this.newData.Numero)
    console.log(this.newData, "Antes.......................")
    this.service.editData('ejemplo', this.newData)
    .subscribe()

    console.log(this.newData, "Despues.............")

    this.show_form = false;
    this.newData = {};
  }

  delete(){
    console.log()
    this.service.deleteData('ejemplo', this.newData.Id)
    .subscribe()

    window.location.reload();
  }

  add(){
    this.newData = {};
    this.show_form = this.save_click = true;
    this.options_buttons = false;
  }

  selectData(data){
    this.newData = data;
    this.save_click = false;
    this.show_form = this.options_buttons = true;
  }

  cancel(){
    this.show_form = false;
  }
}

//2015-09-15T14:00:12-00:00
