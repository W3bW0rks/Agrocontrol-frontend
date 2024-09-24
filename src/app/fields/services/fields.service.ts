import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Fields} from "../models/fields.entity";

@Injectable({
  providedIn: 'root'
})
export class FieldsService extends BaseService<Fields>{

  constructor() {
    super();
    this.resourceEndpoint='/fields'
  }
}