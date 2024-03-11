import { Injectable } from '@nestjs/common';
import { Random } from 'random-js';

@Injectable()
export class DynamicService {
  private random: Random;

  constructor() {
    this.random = new Random();
  }

  generateRandomData(): any {
    const name = this.random.string(10);
    const email = `${name}@example.com`;
    const address = this.random.string(20);
    const phone = this.random.string(10, '0123456789');

    return { name, email, address, phone };
  }
}