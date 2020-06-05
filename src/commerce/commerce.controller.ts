import {
  Controller,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Get,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateCommerceDTO } from './dto/commerce.dto';
import { CommerceService } from './commerce.service';

@Controller('commerce')
export class CommerceController {
  constructor(private commerceService: CommerceService) {}

  @Post('/create')
  async createPost(@Res() res, @Body() createCommerceDTO: CreateCommerceDTO) {
    const createdCommerce = await this.commerceService.createCommerce(
      createCommerceDTO,
    );
    return res.status(HttpStatus.OK).json({ commerce: createdCommerce });
  }

  @Get('/')
  async getCommerces(@Res() res) {
    const commerces = await this.commerceService.getCommerces();
    return res.status(HttpStatus.OK).json({ commerces });
  }

  @Get('/:commerceID')
  async getCommerce(@Res() res, @Param('commerceID') commerceID) {
    const commerce = await this.commerceService.getCommerce(commerceID);
    if (!commerce) {
      throw new NotFoundException('Commerce not found');
    }
    return res.status(HttpStatus.OK).json({ commerce });
  }

  @Delete('/:commerceID')
  async deleteCommerce(@Res() res, @Param('commerceID') commerceID) {
    const deletedCommerce = await this.commerceService.deleteCommerce(
      commerceID,
    );
    if (!deletedCommerce) {
      throw new NotFoundException('Commerce not found');
    }
    return res.status(HttpStatus.OK).json({ deletedCommerce });
  }

  @Put('/:commerceID')
  async updateCommerce(
    @Res() res,
    @Param('commerceID') commerceID,
    @Body() createCommerceDTO: CreateCommerceDTO,
  ) {
    const updatedCommerce = await this.commerceService.updateCommerce(
      commerceID,
      createCommerceDTO,
    );
    return res.status(HttpStatus.OK).json({ updatedCommerce });
  }
}
