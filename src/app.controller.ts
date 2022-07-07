import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('upsert/omni7')
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

  @Get('upsert/ewelcia')
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

  @Get('upsert/promotion')
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
