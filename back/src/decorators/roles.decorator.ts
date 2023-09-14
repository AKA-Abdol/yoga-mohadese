import { SetMetadata } from '@nestjs/common';

export const Role = (role: RoleType) => SetMetadata('roles', role);
