import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, AlertController, ActionSheetController, ToastController, LoadingController} from '@ionic/angular';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../../../services/url.service';
import { ErrorExtractorService } from '../../../services/error-extractor.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  url:any
  country:any = ""
  countries:any = []
  image:any
  city:any
  cod:any
  state:any
  address:any
  address_ext:any
  loading:any

  constructor(private router: Router, private http: HttpClient, private urlService: UrlService,private errorExtractService: ErrorExtractorService, public loadingController: LoadingController, public alertController: AlertController, public actionSheetController: ActionSheetController, public toastController: ToastController, private camera: Camera) {

    this.url = urlService.getUrl()

  }

  ionViewDidEnter(){
    this.fetchCountries()
  }

  fetchCountries(){
   
    this.http.get(this.url+"/api/v1/countries")
    .subscribe((response: any) => {

      this.countries = response.data

    })
  }

  async presentActionSheet(imageType) {
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
            
              document.getElementById('image').click();

          }
        }
      ]
    });
    await actionSheet.present();
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

  public takePicture() {

    var options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
  

        this.image = base64Image

    

    
    }, (err) => {
      console.log(err)
    });
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
    
    });
    await this.loading.present();
  }

  async dismissLoading(){
    await this.loading.dismiss();
    
  }

  verify(){

    this.presentLoading()

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.post(this.url+"/api/v1/user/address/app", 
      {country_id: this.country, 
      image:this.image,
      state:this.state,
      city:this.city,
      cod:this.cod,
      address:this.address,
      address_ext:this.address_ext}, 
      {headers})
    .subscribe((response: any) => { 

      this.dismissLoading()
      this.presentAlertOk("¡Excelente!", "Te notificaremos al momento de haber validado tu dirección")

    },
    (errorResponse: HttpErrorResponse) => {
      this.dismissLoading()
      let string = ""
      let errors = this.errorExtractService.extractErrorMessagesFromErrorResponse(errorResponse);
      
      var i = 0;
      errors.forEach((data) => {
        if(i < 5){
          string += data+"\n"
        }
        i++
      })

      this.presentAlert("¡Ha ocurrido un problema!", string)

    })

  }

  async presentAlertOk(header, text) {
    const alert = await this.alertController.create({
      header: header,
      message: text,
      cssClass: 'alert-custom',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigateByUrl("/tabs/activity");  
        }
      }]
    });

    await alert.present();
  }

  async presentAlert(header, text) {
    const alert = await this.alertController.create({
      header: header,
      message: text,
      cssClass: 'alert-custom',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
