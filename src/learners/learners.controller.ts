import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { LocalAuthGuard } from "src/auth/local/local-auth.guard";
import { AuthService } from "src/auth/auth.service";
import { JwtAuthGuard } from "src/auth/jwt/jwt-auth.guard";
import { RolesGuard } from "src/auth/role/roles.guard";
import { Roles } from "src/auth/role/roles.decorator";
import { Role } from "src/auth/role/role.enum";

// @ApiTags("learners")
@Controller("learners")
export class LearnersController {
  constructor(private authService: AuthService) {}

  // @Post()
  // @ApiResponse({
  //   status: 200,
  //   description: "Describes",
  //   type: LearnersDto,
  // })
  // @ApiOperation({
  //   summary: "just test out the endpoint",
  //   description: "this endpoint is just for testing",
  // })
  // @ApiBody({
  //   type: LearnersDto,
  //   examples: {
  //     user1: {
  //       value: {
  //         email: "adsfasfd",
  //         username: "leanhkhoi",
  //         hashedPass: "asdfasdf",
  //       } as LearnersDto,
  //     },
  //   },
  // })
  // test(@Headers() header: String, @Body() dto: LearnersDto) {
  //   console.log(dto);
  //   console.log(header);
  //   return dto;
  // }

  @UseGuards(LocalAuthGuard)
  @Post("login")
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Get("hehe")
  hehe(@Request() req) {
    return {
      message: "Youresuchanasshole",
      ...req.user,
    };
  }
}
