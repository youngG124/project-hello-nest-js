import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from "./cat.service";
import { Cat } from "./interfaces/cat.interface";

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}
    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        return 'this action adds a new cat';
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}