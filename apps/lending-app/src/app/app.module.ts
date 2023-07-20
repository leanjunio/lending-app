import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '../database/database.module';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { PrismaService } from './prisma.service';
import { InstrumentsModule } from '../instruments/instruments.module';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RequestsModule } from '../requests/requests.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule,
    InstrumentsModule,
    RequestsModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard
    }
  ]
})
export class AppModule {}
