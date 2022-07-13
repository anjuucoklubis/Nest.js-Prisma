import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DaerahModule } from './daerah/daerah.module';

@Module({
  imports: [PrismaModule, DaerahModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
