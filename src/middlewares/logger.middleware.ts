import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as moment from 'moment';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const formattedDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(`[${formattedDate}] ${req.method} ${req.originalUrl}`);
    next();
  }
}