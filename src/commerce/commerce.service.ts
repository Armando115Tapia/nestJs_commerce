import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Commerce } from './interfaces/commerce.interface';
import { CreateCommerceDTO } from './dto/commerce.dto';

@Injectable()
export class CommerceService {
  constructor(
    @InjectModel('Commerce') private readonly commerceModel: Model<Commerce>,
  ) {}

  async getCommerces(): Promise<Commerce[]> {
    const commerces = await this.commerceModel.find();
    return commerces;
  }
  async getCommerce(commerceID: string): Promise<Commerce> {
    const commerce = await this.commerceModel.findById(commerceID);
    return commerce;
  }

  async createCommerce(
    createCommerceDTO: CreateCommerceDTO,
  ): Promise<Commerce> {
    const newCommerce = new this.commerceModel(createCommerceDTO);
    return await newCommerce.save();
  }

  async deleteCommerce(commerceID: string): Promise<Commerce> {
    const deletedCommerce = await this.commerceModel.findByIdAndDelete(
      commerceID,
    );
    return deletedCommerce;
  }
  async updateCommerce(
    commerceID: string,
    createCommerceDTO: CreateCommerceDTO,
  ): Promise<Commerce> {
    const updatedCommerce = await this.commerceModel.findByIdAndUpdate(
      commerceID,
      createCommerceDTO,
      { new: true },
    );
    return updatedCommerce;
  }
}
