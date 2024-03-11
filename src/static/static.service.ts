import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class StaticService {
  private readonly products: any[];

  constructor() {
    this.products = JSON.parse(fs.readFileSync('products.json', 'utf8'));
  }

  getProducts(): any[] {
    return this.products;
  }
}