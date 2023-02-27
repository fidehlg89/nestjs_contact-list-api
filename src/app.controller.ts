import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact as ContactModel } from '@prisma/client';

@Controller()
export class AppController {


  constructor(private readonly contactService: ContactService) {}

  //Contact Endpoint
  @Get('/')
  async home() {
    return "Hola a la API de contactos";
  }

  //Contact Endpoint
  @Get('contacts/')
  async getContacts(): Promise<ContactModel[]> {
    return this.contactService.contacts({
      where: { id: { not: 0 } },
    });
  }

  @Get('contacts/:searchString')
  async getFilteredContacts(
    @Param('searchString') searchString: string,
  ): Promise<ContactModel[]> {
    return this.contactService.contacts({
      where: {
        OR: [
          {
            name: { contains: searchString },
          },
          {
            address: { contains: searchString },
          },
          {
            phone: { contains: searchString },
          },
          {
            email: { contains: searchString },
          },
        ],
      },
    });
  }

  @Get('contacts/:id')
  async getContactById(@Param('id') id: string): Promise<ContactModel> {
    return this.contactService.contact({ id: Number(id) });
  }

  @Post('contacts')
  async addContact(
    @Body()
    contentData: {
      name?: string;
      address: string;
      phone: string;
      email: string;
    },
  ): Promise<ContactModel> {
    const { name, address, phone, email } = contentData;
    return this.contactService.createContact({
      name,
      address,
      phone,
      email,
    });
  }

  @Put('contacts/:id')
  async editContact(
    @Param('id') id: string,
    @Body()
    contentData: {
      name?: string;
      address: string;
      phone: string;
      email: string;
    },
  ): Promise<ContactModel> {
    const { name, address, phone, email } = contentData;
    return this.contactService.updateContact({
      where: { id: Number(id) },
      data: {
        name,
        address,
        phone,
        email,
      },
    });
  }

  @Delete('contacts/:id')
  async deleteContact(@Param('id') id: string): Promise<ContactModel> {
    return this.contactService.deleteContact({ id: Number(id) });
  }
}
