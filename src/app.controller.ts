import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('upsert/omni7')
  async omni7_upsert(
    @Body()
    data: {
      name: string;
      image: string;
      price: string;
      category: string;
      code: string;
      description: string;
    },
  ) {
    let res;
    if (data.code != undefined) {
      this.appService.omni7_insert(data);
      res = 'Finishing upsert';
    } else {
      res = 'Missing product code';
    }
    return res;
  }

  @Post('upsert/ewelcia')
  async eweicia_upsert(
    @Body()
    data: {
      name: string;
      image: string;
      price: string;
      category: string;
      code: string;
      description: string;
    },
  ) {
    let res;
    if (data.code != undefined) {
      this.appService.ewelcia_insert(data);
      res = 'Finishing upsert';
    } else {
      res = 'Missing product code';
    }
    return res;
  }

  @Post('upsert/promotion')
  async promotion_upsert(
    @Body()
    data: {
      name: string;
      image: string;
      price: string;
      category: string;
      code: string;
      description: string;
    },
  ) {
    let res;
    if (data.code != undefined) {
      this.appService.promotion_insert(data);
      res = 'Finishing upsert';
    } else {
      res = 'Missing product code';
    }
    return res;
  }
}
