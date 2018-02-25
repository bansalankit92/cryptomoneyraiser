import * as bytecode from './contract-bytecode'

export class Constants {
  public static CONTRACT = bytecode.CONTARCT_BYTE_CODE;
  public static CONTRACT_ADDRESS = '0x20CcbCda54FCED4b07608876d1432336Bad478B5'; // Current address if the user selects a custom
  public static DEFAULT_NODEIP = 'http://localhost:8545'; // 'https://eth3.augur.net'; // Default node
  public static GAS_NEW_CAMPAIGN = 245000;
  public static GAS_WITHDRAW = 120000;
  public static GAS_CONTRIBUTE = 184882;
}


