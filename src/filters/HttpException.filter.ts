import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const mutipleMessages = exception['response']?.['message'] as
      | Array<string>
      | undefined;

    const hasMultipleMessages =
      !!mutipleMessages && Array.isArray(mutipleMessages);

    return response.status(status).json({
      errors: hasMultipleMessages
        ? mutipleMessages.map((message) => ({
            code: status,
            message,
          }))
        : [
            {
              code: status,
              message: exception.message,
            },
          ],
    });
  }
}
