import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { UserSession } from "../shared/user-session";


@Injectable()
export class HttpEndPoints {

  constructor(private userSession: UserSession) { }

  	headers(): Headers {
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.userSession.userToken    
      });

      return headers;
    }

  private API_URL: string = 'http://localhost:5000/api/';

  // API USER
  public readonly USER_SAVE_POST = `${this.API_URL}user/`;  
  public readonly USER_LOGIN_POST = `${this.API_URL}user/login`;
  public readonly USER_IMAGE_GET = `${this.API_URL}user/image/`;
  public readonly USER_UPDATE_PUT = `${this.API_URL}user/`;
  public readonly USER_DELETE = `${this.API_URL}user/`;

  // API PRODUCTS
  public readonly PRODUCTS_ALL_GET = `${this.API_URL}product`;
  public readonly PRODUCTS_FIND_GET = `${this.API_URL}product`;
  public readonly PRODUCTS_IMAGE_GET = `${this.API_URL}product/image/`;
  public readonly PRODUCTS_SAVE_POST = `${this.API_URL}product`;
  public readonly PRODUCTS_UPDATE_PUT = `${this.API_URL}product`;
  public readonly PRODUCTS_DELETE = `${this.API_URL}product`;
}