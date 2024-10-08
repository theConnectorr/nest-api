import { forwardRef, Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local/local.strategy";
import { LearnersModule } from "src/learners/learners.module";
import { JwtModule } from "@nestjs/jwt";
import configuration from "src/config/configuration";
import { JwtStrategy } from "./jwt/jwt.strategy";

@Module({
  imports: [
    forwardRef(() => LearnersModule),
    PassportModule,
    JwtModule.register({
      secret: configuration().security.jwt_secret,
      signOptions: {
        expiresIn: "60s",
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
