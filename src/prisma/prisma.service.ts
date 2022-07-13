import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    remove(arg0: { where: { id: number; }; }) {
        throw new Error('Method not implemented.');
    }
    delete(arg0: { where: { id: number; }; }) {
        throw new Error('Method not implemented.');
    }
    siswa: any;
    async onModuleInit() {
        await this.$connect();
    }
    async enableShutdownHooks(app: INestApplication){
        this.$on('beforeExit', async() => {
            await app.close();
        });
    }
    
}
