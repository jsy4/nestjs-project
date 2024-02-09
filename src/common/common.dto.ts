import { ApiProperty } from '@nestjs/swagger';

export class BaseResponseDto<T> {
  @ApiProperty({ description: '코드', example: 0 })
  code: number;

  @ApiProperty({ description: '성공 여부', example: true })
  result: boolean;

  @ApiProperty({ description: '상태값', example: 200 })
  status: number;

  @ApiProperty({ description: '메세지', example: 'Ok' })
  message: string;

  @ApiProperty({ description: '실제 사용하는 데이터 전문' })
  data: T;
}

export type EmptyObject = Record<string, never>;

export class ErrorExceptionDto {
  @ApiProperty({ description: '코드', example: 0 })
  code: number;

  @ApiProperty({ description: '상태값', example: 500 })
  status: number;

  @ApiProperty({
    description: 'error backtrace',
    example: 'ApiErrorException: at AuthJwtGaurd.handleRequest...',
  })
  backtrace?: string;
}
