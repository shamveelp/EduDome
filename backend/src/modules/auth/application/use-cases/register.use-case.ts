import { Injectable, ConflictException, Inject } from '@nestjs/common';
import type { IAuthRepository } from '../../domain/interfaces/auth.repository.interface';
import { RegisterDto } from '../../presentation/dtos/register.dto';
import { UserEntity } from '../../domain/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RegisterUseCase {
  constructor(
    @Inject('IAuthRepository') private readonly authRepository: IAuthRepository,
  ) {}

  async execute(dto: RegisterDto): Promise<Omit<UserEntity, 'password'>> {
    const existingUser = await this.authRepository.findByEmail(dto.email);
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = await this.authRepository.create({
      email: dto.email,
      password: hashedPassword,
      name: dto.name,
      role: dto.role || 'USER',
    });

    const { password, ...result } = user;
    return result;
  }
}
