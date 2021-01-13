import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../../../services/url.service';
import { ErrorExtractorService } from '../../../services/error-extractor.service';
import { LoadingController,AlertController,ModalController  } from '@ionic/angular';
import { RecipientsPage } from '../../modals/recipients/recipients.page';

@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {

  senderCurrency:any = 0
  receiverCurrency:any = null
  priority:any = 0
  url:any = ""
  symbols:any
  showMoneySend:any = "0,00"
  sendMoney:any = 0
  receiveMoney:any = ""
  showReceiveMoney:any = "0,00"
  exchangeRate:any = null
  symbol:any = null
  baseCur:any = []
  quoteCur:any = []
  priorities:any= []
  params:any = []
  loading:any

  transCost:any = 0
  priorityCost:any = 0
  totalCost:any = 0
  tax:any = 0
  total:any = 0
  totalToExchange:any = 0

  fetchParamsDone:any = true
  fetchSymbolsDone:any = true
  fetchExchangeDone:any = false

  minAmount:any
  maxAmount:any
  decimalsToShow:any
  showInverse:any = 0


  //checkLoad:any

  constructor(private http: HttpClient, private urlService: UrlService,private errorExtractService: ErrorExtractorService, public loadingController: LoadingController, public alertController: AlertController, public modalController: ModalController) { 
    this.url = this.urlService.getUrl()
  }

  firstLoad(){
    this.presentLoading()
    this.checkLoading()
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({});
    await this.loading.present()
  }

  async dismissLoading(){
    await this.loading.dismiss();
  }

  checkLoading(){

    var checkLoad = window.setInterval(() => {

      if(this.fetchParamsDone == true && this.fetchSymbolsDone == true && this.fetchExchangeDone == true){
        this.dismissLoading()
        clearInterval(checkLoad);
      }

    }, 1000)


  }

  ngOnInit() {
    this.firstLoad()
    this.fetchSymbols()
    this.fetchParams()
  }

  ionViewDidEnter(){
    this.showMoneySend = "0,00"
    this.showReceiveMoney = "0"
    this.fetchSymbols()
  }

  fetchSymbols(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });
   
    this.http.get(this.url+"/api/v1/symbols", {headers}).subscribe((res:any) => {

      this.fetchSymbolsDone = true
      this.symbols = res.data
      this.fetchBaseCur()

    })

  }

  fetchParams(){

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.http.get(this.url+"/api/v1/params", {headers}).subscribe((res:any) => {
      
      this.fetchParamsDone = true
      this.priorities = res.priorities
      this.params = res.params

    })

  }

  fetchExchangeRate() {
    
    if(this.senderCurrency != null && this.receiverCurrency != null){
      //console.log("entre")
      this.symbols.forEach((data, index) => {

        if(data.base.id == this.symbols[this.senderCurrency].base.id && data.quoted.id == this.receiverCurrency){
          this.symbol = data.id
        }

      })

      let headers = new HttpHeaders({
        Authorization: "Bearer "+window.localStorage.getItem('token'),
      });

      if(this.fetchExchangeDone == true){ //luego de la primera carga
        this.presentLoading()
      }


      if(window.localStorage.getItem("address_verified") == "true"){
        this.maxAmount = this.symbols[this.senderCurrency].max_tier_2
      }else{
        this.maxAmount =  this.symbols[this.senderCurrency].max_tier_1
      }

      this.showMoneySend =  this.symbols[this.senderCurrency].default_amount
      this.showMoneySend = parseFloat(this.showMoneySend).toFixed(2)+""

      this.showMoneySend = this.showMoneySend.replaceAll(".", ",")
      
      this.minAmount = this.symbols[this.senderCurrency].minAmount

      this.sendMoney =  parseFloat(this.symbols[this.senderCurrency].default_amount).toFixed(2)
      this.decimalsToShow = this.symbols[this.senderCurrency].decimals
      this.showInverse = this.symbols[this.senderCurrency].show_inverse
      
      this.http.get(this.url+`/api/v1/exchange-rate/${this.symbol}`, {headers}).subscribe((res:any) => {

        if(this.fetchExchangeDone == true){ //luego de la primera carga
          this.dismissLoading()
        }

        this.fetchExchangeDone = true
        this.exchangeRate = res.rate
       
        this.sendedAmountChanged()
      }, () => {
        
      })
    }
    
  }

  fetchBaseCur(){
    this.quoteCur = []
    this.symbols.forEach((data, index) => {

      var exists = false
      this.baseCur.forEach((dataBase, index) => {

        if(dataBase.id == data.base.id){
          exists = true
        }

      })

      if(!exists){

        this.baseCur.push({id: data.base.id, symbol: data.base.symbol})
        
      }

    })

    this.fetchQuoteCur()

  }

  fetchQuoteCur(){

    this.quoteCur = []
    var i = 0;
    this.symbols.forEach((data, index) => {

      if(data.base.id == this.symbols[this.senderCurrency].base.id){
        this.quoteCur.push({id: data.quoted.id, symbol: data.quoted.symbol})
        if(i == 0){
          this.receiverCurrency = this.quoteCur[0].id
   
          if(this.fetchExchangeDone == false){ // solo la primera vez
            this.fetchExchangeRate()
          }
          
        }
        i++;
      }



    })


  }

  calculateComission(){

    if(this.priority != null){
      this.transCost = this.sendMoney
      this.transCost = this.transCost * this.params.transactionCostPct / 100

      this.priorityCost = this.sendMoney
      this.priorityCost = this.priorityCost * this.priorities[this.priority].costPct/100;

      this.totalCost = this.transCost + this.priorityCost

      this.tax = this.totalCost * this.params.taxPct / 100

      this.total = this.totalCost + this.tax
      this.totalToExchange = this.sendMoney - this.total
    }

  }

  sendedAmountChanged(){

    //this.fetchExchangeRate()
    //console.log("money send", this.showMoneySend)
    let newMoney = this.showMoneySend.replaceAll(".", "")
    this.sendMoney = parseFloat(newMoney.replaceAll(",", "."))
    
    this.calculateComission()

    if(this.showInverse == 0){
      this.receiveMoney = this.totalToExchange * this.exchangeRate;
    }else{
      this.receiveMoney = 1/(this.totalToExchange * this.exchangeRate);
    }
    
    let receiveMoney = parseFloat(this.receiveMoney).toFixed(this.decimalsToShow)
    this.showReceiveMoney = this.number_format(receiveMoney, this.decimalsToShow, ",", ".")

    //console.log("receiveMoney", )


  }

  async presentAlertConfirm() {

    if(this.receiveMoney > 0){
      
      if(this.sendMoney < this.minAmount){
        this.presentAlert("Monto a enviar debe ser mayor a "+this.minAmount)
      }

      else if(this.sendMoney > this.maxAmount){
        this.presentAlert("Monto a enviar debe ser menor a "+this.maxAmount)
      }

      else{
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
                this.store()
              }
            }
          ]
        });
    
        await alert.present();
      }

    }else{
      this.presentAlert("El monto a recibir debe ser mayor a 0")
    }
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      message: message,
      cssClass: 'alert-custom',
      buttons: ['OK']
    });

    await alert.present();
  }

  async showRecipients() {

    this.senderCurrency = 0
    this.receiverCurrency = null
    this.priority = 0
    this.sendMoney = 0
    this.receiveMoney = 0
    this.exchangeRate = null

    this.transCost = 0
    this.priorityCost = 0
    this.totalCost = 0
    this.tax = 0
    this.total = 0
    this.totalToExchange = 0


    const modal = await this.modalController.create({
      component: RecipientsPage,
      id:"RecipientsModal"
    });
    return await modal.present();
  }

  store(){

    var symbolId
    this.symbols.forEach((data) => {

      if(data.base.id == this.symbols[this.senderCurrency].base.id && data.quoted.id == this.receiverCurrency){
        symbolId = data.id
      }

    })

    let headers = new HttpHeaders({
      Authorization: "Bearer "+window.localStorage.getItem('token'),
    });

    this.presentLoading()
    this.http.post(this.url+'/api/v1/orders', {symbol_id: symbolId, priority_id: this.priorities[this.priority].id, payment_amount: this.sendMoney}, {headers}).subscribe((res:any) => {

      this.dismissLoading()
      localStorage.setItem("andean_order_id", res.data.id)
      localStorage.setItem("andean_currency_id", res.data.symbol.base.id)
      this.showRecipients()

    }, () => {
      this.dismissLoading()
    })

  }

  number_format(number, decimals, dec_point, thousands_point) {

    if (number == null || !isFinite(number)) {
        throw new TypeError("number is not valid");
    }

    if (!decimals) {
        var len = number.toString().split('.').length;
        decimals = len > 1 ? len : 0;
    }

    if (!dec_point) {
        dec_point = '.';
    }

    if (!thousands_point) {
        thousands_point = ',';
    }

    number = parseFloat(number).toFixed(decimals);

    number = number.replace(".", dec_point);

    var splitNum = number.split(dec_point);
    splitNum[0] = splitNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_point);
    number = splitNum.join(dec_point);

    return number;
}


}
