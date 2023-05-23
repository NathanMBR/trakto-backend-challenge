import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidImageFormatException extends HttpException {
  constructor() {
    super(
      'Invalid image format (must be .jpg or .jpeg)',
      HttpStatus.BAD_REQUEST,
    );
  }
}
