import { Module } from '@nestjs/common';
import { DaerahService } from './daerah.service';
import { DaerahController } from './daerah.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [DaerahService],
  controllers: [DaerahController]
})
export class DaerahModule {}
