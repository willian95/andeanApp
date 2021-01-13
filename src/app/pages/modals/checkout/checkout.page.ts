import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ModalController, ActionSheetController, AlertController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { UrlService } from '../../../services/url.service';
import { ErrorExtractorService } from '../../../services/error-extractor.service';
import { NavController } from '@ionic/angular';

var checkLoad; 

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  image:any = null
  showImage:any = null
  transaction_number:any = null
  transaction_date:any = null
  show_payment_amount:any = "0,00"
  payment_amount:any = 0
  url:any
  reason:any

  attachClientDone:any = false
  paymentDone:any = false
  fillDone:any = false

  orderId:any
  accountId:any
  recipientId:any
  loading:any

  constructor(public modalController: ModalController, public actionSheetController: ActionSheetController, private camera: Camera, public alertController: AlertController, private http: HttpClient, private urlService: UrlService, private errorExtractService: ErrorExtractorService, public loadingController: LoadingController, private navCtrl: NavController) {
    this.url = this.urlService.getUrl()
    this.orderId = window.localStorage.getItem("andean_order_id")
    this.recipientId = window.localStorage.getItem("andean_recipient_id")
    this.accountId = window.localStorage.getItem("andean_account_id")
  }

  ngOnInit() {
  }

  dismiss(){

    this.modalController.dismiss();

  }

  public takePicture() {

    var options = {
      quality: 40,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
    


      this.image = 'data:image/jpeg;base64,' + imageData;
        


    
    }, (err) => {
      //console.log(err)
    });
  }

  openGallery(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.image  = 'data:image/jpeg;base64,' + imageData;
      //this.updateProfileImage()
    }, (err) => {
      // Handle error
    })
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Cámara',
          icon: 'camera',
          handler: () => {
            this.takePicture()
          }
        }, {
          text: 'Galería',
          icon: 'caret-forward-circle',
          handler: () => {
            
            //document.getElementById('image').click();
            this.openGallery()

          }
        }
      ]
    });
    await actionSheet.present();
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      message: message,
      cssClass: 'alert-custom',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({});
    await this.loading.present()
  }

  async dismissLoading(){
    await this.loading.dismiss();
  }

  changeAmount(){

    let payment_amount = this.show_payment_amount.replaceAll(".", "")
    this.payment_amount = parseFloat(payment_amount.replaceAll(",", "."))

  }

  checkLoading(){

    checkLoad = window.setInterval(() => {
      //console.log("attach", this.attachClientDone, "payment", this.paymentDone ,"fill", this.fillDone)
      if(this.attachClientDone == true && this.paymentDone == true && this.fillDone == true){
        this.dismissLoading()
        clearInterval(checkLoad);
      }

    }, 1000)

  }

  attachClient(){
    this.presentLoading()
    this.checkLoading()

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.post(this.url+"/api/v1/orders/"+this.orderId+"/attach-recipient",{recipient_id: this.recipientId, reason: this.reason}, {headers}).subscribe((res:any) => {
      
      //console.log("attach-client", res)
      this.attachClientDone = true
      this.payment()

    }, ()=>{
      this.dismissLoading()
      clearInterval(checkLoad);
    })

  }

  payment(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.post(this.url+"/api/v1/payments/app",{order_id: this.orderId, account_id: this.accountId, transaction_number: this.transaction_number, transaction_date: this.transaction_date, payment_amount: this.payment_amount, image: this.image}, {headers}).subscribe((res:any) => {
      
      //console.log("payment", res)
      this.paymentDone = true
      this.fillOrder()

    }, 
    (errorResponse: HttpErrorResponse) => {
      //this.dimissLoading()

      this.dismissLoading()
      clearInterval(checkLoad);

      let string = ""
      let errors = []
      //console.log("error", errorResponse)
      if(errorResponse.error){
        if(errorResponse.error.errors){

          for (const property in errorResponse.error.errors) {
  
            if (errorResponse.error.errors.hasOwnProperty(property)) {
    
              const propertyErrors: Array<string> = errorResponse.error.errors[property];
              if(typeof propertyErrors == "string"){
                errors.push(propertyErrors)
              }else{
                errors = this.errorExtractService.extractErrorMessagesFromErrorResponse(errorResponse)
              }
              
              //propertyErrors.forEach(error => errors.push(error));
            }
    
          }

        }
      }

        errors.forEach((data) => {
          string += data+"\n"
        })
  
        
        this.presentAlert(string)
            

    })

  }

  fillOrder(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.post(this.url+"/api/v1/orders/"+this.orderId+"/fill",{}, {headers}).subscribe((res:any) => {
      this.fillDone = true
      this.presentAlert("<h3>Has completado una orden</h3>")
      this.modalController.dismiss(null, null, "RecipientsModal");
      this.modalController.dismiss(null, null, "AccountsModal");
      this.modalController.dismiss(null, null, "CreatePaymentsModal");
      this.modalController.dismiss()
      this.navCtrl.navigateRoot("/tabs")

    }, ()=>{
      this.dismissLoading()
      clearInterval(checkLoad);
    })

  }

  async presentAlertConfirm() {

    let error = false
    let string = ""

    if(this.image == null){
      string += "<p>Aún no subes una imagen</p>"
      error = true
    }

    if(this.reason == null){
      string += "<p>Se requiere una descripción</p>"
      error = true
    }

    if(this.transaction_number == null){
      string += "<p>Necesitamos el N° de transferencia</p>"
      error = true
    }

    if(this.transaction_date == null){
      string += "<p>Aún no colocas la fecha de transacción</p>"
      error = true
    }

    if(this.payment_amount == 0){
      string += "<p>Necesitamos conocer la cantidad</p>"
      error = true
    }


    if(!error){
      
      const alert = await this.alertController.create({
        message: '<h3 class="iont-text-center">¿Estás seguro de enviar?<h3>',
        cssClass: 'alert-custom',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            cssClass: 'secondary'
          }, {
            text: 'Sí, enviar',
            cssClass: 'primary',
            handler: () => {
              this.attachClient()
            }
          }
        ]
      });
  
      await alert.present();

    }else{
      this.presentAlert(string)
    }

  }

  convertBase64(event) {
    var input = event.target;
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = (e:any) => {


          this.image = e.target.result;


      
      }
      reader.readAsDataURL(input.files[0]);
      
    }
  }

}
