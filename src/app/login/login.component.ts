import { Component }        from '@angular/core';

@Component({
  template: `
    <div class="row">
      <cuppa-oauth [authConfig]="config"></cuppa-oauth>
    </div>`
})
export class LoginComponent {
   public authServerBaseUrl = 'http://localhost:4200';
   public config = {
   "loginRoute":"login",
   "facebook":{
     "authEndpoint": this.authServerBaseUrl+"/auth/facebook",
     "clientId":"393653974648168",
     "redirectURI" : this.authServerBaseUrl+"/admin"
   },
   "google":{
     "authEndpoint": this.authServerBaseUrl+"/auth/google",
     "clientId":"266680013552-ubkf1cgbfudbaksurene0oaatfv0d3hs.apps.googleusercontent.com",
     "redirectURI" : this.authServerBaseUrl+"/admin"
   }
 };
}
