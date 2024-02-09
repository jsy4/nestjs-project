import { BaseResponseDto } from '@common/common.dto';
import {
  HttpStatus,
} from '@nestjs/common';


export function response<T>(
  data: T,
  message = 'The request was successful.',
  status: number = HttpStatus.OK,
) {
  return {
    result: true,
    code: 0,
    status,
    message,
    data,
  } satisfies BaseResponseDto<T>;
}
