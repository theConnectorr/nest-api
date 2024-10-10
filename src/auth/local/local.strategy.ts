import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: "username",
      passwordField: "hashedPass",
    });
  }

  async validate(username: string, hashedPass: string) {
    const learner = await this.authService.validateLearner(
      username,
      hashedPass,
    );

    if (!learner) throw new UnauthorizedException();

    return learner;
  }
}
