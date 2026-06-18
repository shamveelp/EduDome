import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './presentation/controllers/auth.controller';
import { RegisterUseCase } from './application/use-cases/register.use-case';
import { LoginUseCase } from './application/use-cases/login.use-case';
import { AuthRepository } from './infrastructure/repositories/auth.repository';
import { JwtStrategy } from './infrastructure/strategies/jwt.strategy';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('jwt.secret'),
        signOptions: { expiresIn: configService.get<string>('jwt.expiresIn') as any },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    { provide: 'IAuthRepository', useClass: AuthRepository },
    RegisterUseCase,
    LoginUseCase,
    JwtStrategy,
    JwtAuthGuard,
  ],
  exports: [JwtModule, JwtAuthGuard, JwtStrategy],
})
export class AuthModule {}
