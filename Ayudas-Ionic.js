/**********************************************/
Ir a otra pagina 

<button ion-button
         block
         color="primary"
         (click)="navegarPagina()">
    Ir pagina 2
</button>

 navegarPagina(){
   this.navCtrl.push( Pagina2Page );
 }


Otra Forma

import { Pagina2Page } from "../index.paginas";

pagina2:any = Pagina2Page;

<button ion-button
        block
        color="secondary"
        [navPush]="pagina2">
   Ir pagina 2 - HTML
</button>

/**********************************************/

Ir otra Pagina con Parametros

import { Pagina3Page } from "../index.paginas";

constructor(public navCtrl: NavController, public navParams: NavParams) {}


irPagina3( mutante:any ){

   console.log( mutante );

   this.navCtrl.push( Pagina3Page, { 'mutante': mutante  } );

}

<ion-item *ngFor="let mutante of mutantes"
     (click)="irPagina3( mutante )">
     {{ mutante.nombre }}
</ion-item>

Otra Forma

<h1>Enviando con HTML</h1>


import { Pagina3Page } from "../index.paginas";

pagina3:any = Pagina3Page;

<ion-list>

  <ion-item *ngFor="let mutante of mutantes"
              [navPush]="pagina3"
              [navParams]="{ 'mutante': mutante }">
      {{ mutante.nombre }}
  </ion-item>

</ion-list>


/**********************************************/

3 Formas de Ir para Atras

irAtras(){
    this.navCtrl.pop();
}

<button ion-button
       block
       color="primary"
       (click)="irAtras()">
    ir atras con evento
</button>


Otra Forma

<button ion-button
        block
        color="danger"
        navPop>
   ir atras sin evento
</button>


Otra forma de ir al root

irRoot(){
   this.navCtrl.popToRoot();
}

<button ion-button
        block
        color="secondary"
        (click)="irRoot()">
  ir al root
</button>

/**********************************************/

Activar Una pagina en especifico de tab


<button ion-button
          block
         (click)="activarPrincipal()">
    Activar Principal
 </button>

/*Se le dice cual de los tabs es el que se va a activar*/
activarPrincipal(){

  this.navCtrl.parent.select(2);

}


/**********************************************/

Mostrar un modal

import {ModalController } from 'ionic-angular';

/*Se debe crear una pagina nueva que va a actuar como modal*/
import { ModalPage } from "../index.paginas";

constructor(private modalCtrl:ModalController ) {}

mostrar_modal(){

  let modal = this.modalCtrl.create( ModalPage,  { nombre:"Fernando", edad: 30  }    );

  modal.present();

  modal.onDidDismiss(  parametros =>{

    if( parametros ){
      console.log("Data del modal:");
      console.log( parametros  );
    }else{
      console.log("Se cerro el modal sin parametros");
    }

  })

 }

 <button ion-button
          block
          color="morado"
          (click)="mostrar_modal()">
    Mostrar modal
  </button>



/**********************************************/
Cerar Modal

import { NavParams, ViewController } from 'ionic-angular';

constructor(  public viewCtrl: ViewController,
              public navParams: NavParams) {
  }

cerrar_con_parametros(){

    let data = {
      nombre: "Juan Carlos",
      edad: 18,
      coords: {
        lat: 10,
        lng: -10
      }
    };


    this.viewCtrl.dismiss( data );

  }


  cerrar_sin_parametros(){

    this.viewCtrl.dismiss();

  }

<button ion-button
          block
          color="primary"
          (click)="cerrar_con_parametros()">
    Cerrar con parametros
</button>

<button ion-button
          block
          color="morado"
          (click)="cerrar_sin_parametros()">
   Cerrar sin parametros
 </button>

/**********************************************/
Cambiar la palabra back en el navController

@NgModule({
  declarations: [
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Atras'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

/********************************************************************/
Crear Toast Message


import { ToastController } from "ionic-angular";

constructor( private toastCtrl:ToastController) { }

private crear_toast( mensaje:string ){

  this.toastCtrl.create({
    message: mensaje,
    duration: 2500
  }).present();

}

/***************************************************************************/
Forms Ionic 4 Recomendado de la documentacion

import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  template: '
    <form [formGroup]="todo" (ngSubmit)="logForm()">
      <ion-item>
        <ion-label floating>Todo</ion-label>
        <ion-input type="text" formControlName="title"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label floating>Description</ion-label>
        <ion-textarea formControlName="description"></ion-textarea>
      </ion-item>
      <button ion-button type="submit" [disabled]="!todo.valid">Submit</button>
    </form>
  '
})

export class FormsPage {

  private todo : FormGroup;

  constructor( private formBuilder: FormBuilder ) {

    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });

  }

  logForm(){
    console.log(this.todo.value)
  }

}

/***************************************************************************/

















































































































