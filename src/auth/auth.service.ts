import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import configuration from "src/config/configuration";
import { LearnersService } from "src/learners/learners.service";

@Injectable()
export class AuthService {
  constructor(
    private learnersService : LearnersService,
    private jwtService : JwtService
  ) {}

  async validateLearner(username: string, hashedPass: string) {
    const learner = await this.learnersService.findOne(username);

    if (learner && learner.hashedPass === hashedPass) {
      return learner;
    }

    return null;
  }

  async login(learner) {
    const payload = { name: learner.username, sub: learner.id };
    
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
