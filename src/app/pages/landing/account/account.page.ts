import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, AlertController, ActionSheetController, ToastController, LoadingController} from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../../../services/url.service';
import { ErrorExtractorService } from '../../../services/error-extractor.service';

declare var cordova: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  url:any
  country:any = ""
  countries:any = []
  nationality:any
  documentType:any
  gender:any
  documentNumber:any
  validationNumber:any
  createdDate:any
  dueDate:any
  birthDate:any
  firstName:any
  middleName:any
  firstLastname:any
  secondLastname:any

  imageRear:any = null
  imageFront:any = null
  showImageFront:any = null
  showImageRear:any = null
  loading:any
  token:any
  userimage:any

  constructor(private router: Router, private http: HttpClient, private urlService: UrlService,private errorExtractService: ErrorExtractorService, public loadingController: LoadingController, public alertController: AlertController, public actionSheetController: ActionSheetController, public toastController: ToastController, public loadingControlller: LoadingController, private transfer: FileTransfer, private file: File, private camera: Camera, public platform: Platform, private filePath: FilePath) { 
    this.url = this.urlService.getUrl()
    this.fetchCountries()
  }

  fetchCountries(){
    
    //api/v1/countries
    this.http.get(this.url+"/api/v1/countries")
    .subscribe((response: any) => {

      this.countries = response.data

    })
  }

  verify(){

    this.presentLoading()

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.post(this.url+"/api/v1/user/identity/app", {country_id: this.country, nationality: this.nationality, document_type: this.documentType, first_name: this.firstName, gender: this.gender, dni_number: this.documentNumber, validation_number: this.validationNumber, issue_date: this.createdDate, expiration_date: this.dueDate, dob: this.birthDate, last_name: this.firstLastname, middle_name: this.middleName, second_surname: this.secondLastname, front_image: this.imageFront, back_image: this.imageRear}, {headers})
    .subscribe((response: any) => { 

        this.dismissLoading()

        this.presentAlertOk("!Excelente!", "Te avisaremos cuando sean verificados estos datos")

    },
    (errorResponse: HttpErrorResponse) => {
      
      this.dismissLoading()

      let string = ""
      let errors = this.errorExtractService.extractErrorMessagesFromErrorResponse(errorResponse);
      
      var i = 0;
      errors.forEach((data) => {
        if(i < 5){
          string += "<p>"+data+"</p>"
        }
        i++
      })

      this.presentAlert("¡Ha ocurrido un problema!", string)

    })

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

  async presentAlertOk(header, text) {
    const alert = await this.alertController.create({
      header: header,
      message: text,
      cssClass: 'alert-custom',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigateByUrl("/tabs/activity");  
          }
        }
      ]
    });

    await alert.present();

  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
    
    });
    await this.loading.present();
  }

  async dismissLoading(){
    await this.loading.dismiss();
    
  }

  async presentActionSheet(imageType) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Cámara',
          icon: 'camera',
          handler: () => {
            this.takePicture(imageType)
          }
        }, {
          text: 'Galería',
          icon: 'caret-forward-circle',
          handler: () => {
            
            this.openGallery(imageType)

          }
        }
      ]
    });
    await actionSheet.present();
  }

  openGallery(imageType){

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
      if(imageType == "front"){
        this.imageFront  = 'data:image/jpeg;base64,' + imageData;
      }

      else if(imageType == "rear"){
        this.imageRear  = 'data:image/jpeg;base64,' + imageData;
      }
      
      //this.updateProfileImage()
    }, (err) => {
      // Handle error
    })
  }

  convertBase64(event, imageType) {
    var input = event.target;
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = (e:any) => {

        if(imageType == 'front')
        {
          this.imageFront = e.target.result;
        }else if(imageType == 'rear'){
          this.imageRear = e.target.result;
        }

      
      }
      reader.readAsDataURL(input.files[0]);
      
    }
  }

  uploadFront(){

    document.getElementById('front-identity').click();

  }


  ngOnInit() {
  }

  public takePicture(imageType) {

    var options = {
      quality: 40,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation:true,
      targetWidth:720
    }
   
    this.camera.getPicture(options).then((imageData) => {

        if(imageType == "front"){

          this.imageFront = 'data:image/jpeg;base64,' + imageData;
         
        }else if(imageType == "rear"){
          this.imageRear = 'data:image/jpeg;base64,' + imageData;
         
        }
      

    
    }, (err) => {
      //console.log(err)
    });
  }



}
