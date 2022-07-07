import { Injectable } from '@nestjs/common';
import database from './util/firebase';
@Injectable()
export class AppService {
  async omni7_insert(data: {
    name: string;
    image: string;
    price: string;
    category: string;
    code: string;
    description: string;
  }) {
    const updatedata = {};
    if (data.name != undefined) {
      updatedata['/name'] = data.name;
    }
    if (data.image != undefined) {
      updatedata['/image'] = data.image;
    }
    if (data.price != undefined) {
      updatedata['/price'] = data.price;
    }
    if (data.category != undefined) {
      updatedata['/category'] = data.category;
    }
    if (data.description != undefined) {
      updatedata['/description'] = data.description;
    }
    try {
      database.ref(`omni7/${data.code}`).update(updatedata);
    } catch (err) {
      console.log(err);
    }
  }

  async ewelcia_insert(data: {
    name: string;
    image: string;
    price: string;
    category: string;
    code: string;
    description: string;
  }) {
    const updatedata = {};
    if (data.name != undefined) {
      updatedata['/name'] = data.name;
    }
    if (data.image != undefined) {
      updatedata['/image'] = data.image;
    }
    if (data.price != undefined) {
      updatedata['/price'] = data.price;
    }
    if (data.category != undefined) {
      updatedata['/category'] = data.category;
    }
    if (data.description != undefined) {
      updatedata['/description'] = data.description;
    }
    try {
      database.ref(`ewelcia/${data.code}`).update(updatedata);
    } catch (err) {
      console.log(err);
    }
  }

  async promotion_insert(data: {
    name: string;
    image: string;
    price: string;
    category: string;
    code: string;
    description: string;
  }) {
    const updatedata = {};
    if (data.name != undefined) {
      updatedata['/name'] = data.name;
    }
    if (data.image != undefined) {
      updatedata['/image'] = data.image;
    }
    if (data.price != undefined) {
      updatedata['/price'] = data.price;
    }
    if (data.category != undefined) {
      updatedata['/category'] = data.category;
    }
    if (data.description != undefined) {
      updatedata['/description'] = data.description;
    }
    try {
      database.ref(`promotion/${data.code}`).update(updatedata);
    } catch (err) {
      console.log(err);
    }
  }
}
