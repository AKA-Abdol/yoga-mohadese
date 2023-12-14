import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { verify } from 'jsonwebtoken';
import { TypeJwtPayload } from '../modules/auth/dtos/type-jwt-payload.dto';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    try {
      const role = this.reflector.get<RoleType>('roles', context.getHandler());
      const request: Request = context.switchToHttp().getRequest();
      const jwt = (request.headers.authorization ?? '').split(' ')[1] ?? '';
      let payload: TypeJwtPayload = { role: 'USER', userId: '', username: '' };
      try {
        payload = verify(jwt, 'secret') as TypeJwtPayload;
      } catch (error) {
        if (!role) return true;
        else throw error;
      }
      if (payload.role === 'ADMIN' || !role) {
        context.switchToHttp().getRequest().userId = payload.userId;
        return true;
      }
      if (role !== payload.role) return false;
      context.switchToHttp().getRequest().userId = payload.userId;
      return true;
    } catch {
      return false;
    }
    // return matchRoles(roles, user?.roles);
  }
}

const matchRoles = (a: any, b: any) => {
  return false;
};
