import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }

  getUser(): Object {
    return { name: "Vy Bui" };
  }
}
