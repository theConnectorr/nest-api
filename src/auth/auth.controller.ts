import { Body, Controller, Post } from "@nestjs/common";
import { AuthDto } from "./dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {}
