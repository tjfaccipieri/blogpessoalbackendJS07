import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './entities/postagem.entity';
import { PostagemService } from './services/postagem.service';
import { PostagemController } from './controllers/postagem.controller';
import { TemaModule } from '../tema/tema.module';

@Module({
  // importação da modelagem de postagem
  imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
  // importação da service de postagem, que irá passar as regras de pesquisas
  providers: [PostagemService],
  // importação da controladora, que irá liberar os endpoints de acesso
  controllers: [PostagemController],
  exports: [],
})
export class PostagemModule {}
