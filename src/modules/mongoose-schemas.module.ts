import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ImageSchema } from '@/schemas';
import { MONGO_URL } from '@/config';

const mongooseModule = MongooseModule.forFeature([
  { name: 'imageSchema', schema: ImageSchema },
]);

@Global()
@Module({
  imports: [mongooseModule, MongooseModule.forRoot(MONGO_URL)],
  exports: [mongooseModule],
})
export class MongooseSchemasModule {}
