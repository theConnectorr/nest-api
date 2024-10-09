import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import configuration from "src/config/configuration";

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: configuration().database.url,
        },
      },
    });
  }
}
