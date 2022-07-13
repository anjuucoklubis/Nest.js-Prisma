import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { DaerahService } from './daerah.service';

@Controller('daerah')
export class DaerahController {
    constructor(private daerahservice : DaerahService){}

    @Get()
    getall(){
        return this.daerahservice.all()
    }

    @Get(':id')
    getbyid(
        @Param('id') id: number,
    ){
        return this.daerahservice.getbyId(+id)
    }

    @Post()
    async create(
        @Body() body:{namadaerah: string, deskripsi: string;}
    ){
        return await this.daerahservice.create({
            namadaerah: body.namadaerah,
            deskripsi: body.deskripsi
        });
    }

    @Patch(':id')
    async update(
        @Param('id') id: number,
        @Body() body:{namadaerah: string, deskripsi: string;}
    ){
        return await this.daerahservice.update(+id,{
            namadaerah: body.namadaerah,
            deskripsi: body.deskripsi
        });
    }

    @Delete(':id')
    async delete(
        @Param('id') id:number,
    ){
        return await this.daerahservice.delete(+id)  
    }
}
