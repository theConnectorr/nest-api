import { ExecutionContext, SetMetadata } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "src/auth/role/role.enum";

export const Roles = (...roles: Role[]) => SetMetadata("roles", roles);
