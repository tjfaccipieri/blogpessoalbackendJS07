import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Postagem } from '../../postagem/entities/postagem.entity';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty({ example: 'email@email.com' })
  usuario: string;

  @MinLength(8)
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty({ example: 'Minimo de 8 caracteres' })
  senha: string;

  @Column({ length: 5000 })
  @ApiProperty()
  foto: string;

  @OneToMany(() => Postagem, (postagem) => postagem.usuario)
  @ApiProperty()
  postagem: Postagem[];
}
