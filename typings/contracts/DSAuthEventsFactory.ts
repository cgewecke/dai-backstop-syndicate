/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { DSAuthEvents } from "./DSAuthEvents";

export class DSAuthEventsFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<DSAuthEvents> {
    return super.deploy() as Promise<DSAuthEvents>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): DSAuthEvents {
    return super.attach(address) as DSAuthEvents;
  }
  connect(signer: Signer): DSAuthEventsFactory {
    return super.connect(signer) as DSAuthEventsFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DSAuthEvents {
    return new Contract(address, _abi, signerOrProvider) as DSAuthEvents;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authority",
        type: "address"
      }
    ],
    name: "LogSetAuthority",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "LogSetOwner",
    type: "event"
  }
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603e80601d6000396000f3fe6080604052600080fdfea265627a7a7231582020dc6f978e7e5f86f610c554ea5396241325d4ff2a52bb44419eff099f032c3764736f6c63430005100032";
