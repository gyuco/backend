import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getVersion(version: string): string {
    return `Api version ${version}`;
  }
}
