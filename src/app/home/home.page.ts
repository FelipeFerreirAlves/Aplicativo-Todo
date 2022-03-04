import { Component } from '@angular/core';
import { ActionSheetController, AlertController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks : any[] = [];
  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController, private actionSheetCtrl : ActionSheetController, private navCtrl : NavController) {
      let taskJson = localStorage.getItem('taskDb');

      if(taskJson!= null){
        this.tasks = JSON.parse(taskJson)
        ;
      }
   }

  async showAdd() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Adicione a tarefa',
      inputs: [
        {
          name: 'newTask',
          type: 'text',
          placeholder: 'A tarefa é: '
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('clicked Cancel');
          }
        },
        {
          text: 'Adicionar',
          handler: (form) => {
            console.log(form.newTask);
            this.add(form.newTask);
          }
        }
      ]
    });

    await alert.present();
  }


  async add(newTask: string) {
    //Valida se p usuario preencheu a task
    if (newTask.trim().length < 1) {
      const toast = await this.toastCtrl.create({
        message: 'Informe o que deseja fazer!',
        duration: 2000,
        position: 'top'
      });

      toast.present();
      return;
    }

    let task = {name : newTask, done: false};

    this.tasks.push(task);

    this.updateLocalStorage();
  }
  updateLocalStorage(){
    localStorage.setItem('taskDb', JSON.stringify(this.tasks));
  }

  async openActions(task :  any){
    const actionSheet = await this.actionSheetCtrl.create({
    header: "O QUE DESEJA FAZER?",
       buttons: [{
         text: task.done ? 'Desmarcar' : 'Feito',
         icon: task.done ? 'radio-button-off' : 'checkmark-circle',
         handler: () => {
           task.done = !task.done;

           this.updateLocalStorage();
         }
       }
         ,{
         text: 'Cancelar',
         icon: 'close',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         } 
       }]
     });
     await actionSheet.present();
  }


  delete(task : any){
    this.tasks = this.tasks.filter(taskArray=> task != taskArray);

    this.updateLocalStorage();
  }

  showPageexercicio(){
    this.navCtrl.navigateForward('exercicio');
  }

  showPageacademico(){
    this.navCtrl.navigateForward('academico');
  }

  showPagepessoal(){
    this.navCtrl.navigateForward('pessoal');
  }

  doReorder(event){
    event.detail.complete()
  }

}