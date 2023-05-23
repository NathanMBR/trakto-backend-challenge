import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ImageModule, MongooseSchemasModule } from '@/modules';

@Module({
  imports: [ConfigModule.forRoot(), MongooseSchemasModule, ImageModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
