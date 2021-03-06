import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  // -------------------log&reg-----------------------

  confirmLogin(user) {
    console.log("http.service confirmLogin", user);
    return this._http.post('/api/users/login', user);
  }
// -------------------users------------------------------
userUpdate(id, userUpdate) {
  console.log("http.service userupdate", userUpdate);
  return this._http.put('/api/users/' + id, userUpdate);
}
getUser(id) {
  console.log("httpSErvice getting user", id);
  return this._http.get(`/api/users/${id}`);
}


}
