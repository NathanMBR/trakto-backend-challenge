import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ strict: false })
export class ImageClass {}

export type ImageDocument = HydratedDocument<ImageClass>;

export const ImageSchema = SchemaFactory.createForClass(ImageClass);
