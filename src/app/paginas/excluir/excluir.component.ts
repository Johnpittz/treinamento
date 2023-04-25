import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent implements OnInit {

  TAREFA_KEY = 'tarefa_key'
  atividades : any[] = []
  constructor() { }

  ngOnInit(): void {
     const tarefas = localStorage.getItem(this.TAREFA_KEY)
    if (tarefas){
      this.atividades = JSON.parse(tarefas)
    }
  }
  excluir(id: number) {
    this.atividades = this.atividades.filter(item => (item.id != id))
    this.salvarLista()
  }
  private salvarLista(){
    localStorage.setItem(this.TAREFA_KEY, JSON.stringify(this.atividades))
  }

}