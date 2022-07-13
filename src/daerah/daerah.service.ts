import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DaerahService {
    constructor( private prisma : PrismaService){}

    all(){
        return this.prisma.daerah.findMany()
    }

    getbyId(id: number){
        return this.prisma.daerah.findFirst({
            where: {
                id: id,
            },
        });
    }

    async create(data: Prisma.DaerahCreateInput){
        return await this.prisma.daerah.create({
            data,
        });
    }

    async update (id: number, data: Prisma.DaerahUpdateInput){  
        return await this.prisma.daerah.update({
            where: {
                id:id,
            },data
        });
    }

    async delete(id: number){
        return await this.prisma.daerah.delete({
            where: {
                id: id,
            },
        });
    }



}
