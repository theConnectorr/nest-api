import { forwardRef, Module } from "@nestjs/common";
import { LearnersService } from "./learners.service";
import { LearnersController } from "./learners.controller";
import { AuthService } from "src/auth/auth.service";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [ forwardRef(() => AuthModule)],
  controllers: [LearnersController],
  providers: [LearnersService],
  exports: [LearnersService]
})
export class LearnersModule {}
