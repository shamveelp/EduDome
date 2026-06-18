import { Role } from '../../../../shared/generated/prisma/client';

export class UserEntity {
  id: string;
  email: string;
  password?: string;
  name: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
