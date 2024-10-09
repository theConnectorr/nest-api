import { Injectable } from "@nestjs/common";
import configuration from "./config/configuration";

@Injectable()
export class AppService {
  getHello(): string {
    return configuration().database.url;
  }

  getUser(): Object {
    return { name: "Vy Bui" };
  }
}
// https://youtu.be/8_X0nSrzrCw?feature=shared&t=2229
// https://youtu.be/8_X0nSrzrCw?feature=shared&t=3823
// https://youtu.be/GHTA143_b-s?feature=shared&t=2015
// https://youtu.be/GHTA143_b-s?feature=shared&t=2412
// https://youtu.be/GHTA143_b-s?feature=shared&t=3648 working with db

// https://youtu.be/_L225zpUK0M?feature=shared&t=1223 Authentication video
