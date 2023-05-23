import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsUrl,
  Min,
  Max,
} from 'class-validator';

export class SaveImageDTO {
  @IsString({
    message: 'The image URL must be a string',
  })
  @IsNotEmpty({ message: 'The image URL cannot be empty' })
  @IsUrl({}, { message: 'The image URL must be in a valid URL format' })
  image: string;

  @IsNumber(
    { allowNaN: false },
    { message: "The image compress factor isn't a number" },
  )
  @Min(0, {
    message: 'The image compress factor must be greater than or equal 0',
  })
  @Max(0.99, {
    message: 'The image compress factor must be less than or equal 0.99',
  })
  compress: number;
}
