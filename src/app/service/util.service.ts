import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  isValidAddress(etherAddress: string): boolean {
   return (etherAddress.length === 42 || etherAddress.length === 40);
  }

}
