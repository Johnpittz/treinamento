import { FormsModule} from '@angular/forms';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  
  TAREFA_KEY = 'tarefa_key'
  atividades : any[] = []
  constructor() { }

  ngOnInit(): void {
     const tarefas = localStorage.getItem(this.TAREFA_KEY)
    if (tarefas){
      this.atividades = JSON.parse(tarefas)
    }
  }
  private salvarLista(){
    localStorage.setItem(this.TAREFA_KEY, JSON.stringify(this.atividades))
  }

    editarTarefa(tarefa:any) {
      this.atividades.forEach(item => {
        if (item.id == tarefa.id) {
          item.editando = true;
        } else {
          item.editando = false;
        }
      });
    }
    
    salvarTarefa(){
      this.atividades.forEach(item => {
        if (item.editando) {
          item.editando = false;
        }
      });
      this.salvarLista();
    }
    
  }




