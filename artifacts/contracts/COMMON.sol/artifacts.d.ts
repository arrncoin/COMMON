// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { COMMON$Type } from "./COMMON";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["COMMON"]: COMMON$Type;
    ["contracts/COMMON.sol:COMMON"]: COMMON$Type;
  }

  interface ContractTypesMap {
    ["COMMON"]: GetContractReturnType<COMMON$Type["abi"]>;
    ["contracts/COMMON.sol:COMMON"]: GetContractReturnType<COMMON$Type["abi"]>;
  }
}
