import {IsEmail, IsString}from "class-validator"
export class CreateClienteDto {
    id:     number;
    @IsString()
    nombre: string;
    @IsEmail()
    email: string;
}
