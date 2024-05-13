import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  create(createClienteDto: CreateClienteDto) {
    return 'cliente añadido :P';
  }

  findAll() {
    return `This action returns all cliente`;
  }

  findOne(id: number) {
    return `cliente ${id} `;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `cliente #${id} actualizado`;
  }

  remove(id: number) {
    return `cliente #${id} borrado`;
  }
}
