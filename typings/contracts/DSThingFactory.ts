/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { DSThing } from "./DSThing";

export class DSThingFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<DSThing> {
    return super.deploy() as Promise<DSThing>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): DSThing {
    return super.attach(address) as DSThing;
  }
  connect(signer: Signer): DSThingFactory {
    return super.connect(signer) as DSThingFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DSThing {
    return new Contract(address, _abi, signerOrProvider) as DSThing;
  }
}

const _abi = [
  {
    anonymous: true,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4"
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "foo",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "bar",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "fax",
        type: "bytes"
      }
    ],
    name: "LogNote",
    type: "event"
  },
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
  },
  {
    constant: true,
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract DSAuthority",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract DSAuthority",
        name: "authority_",
        type: "address"
      }
    ],
    name: "setAuthority",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address"
      }
    ],
    name: "setOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x60806040819052600180546001600160a01b03191633908117909155907fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a26102e1806100516000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806313af4035146100515780637a9e5e4b146100795780638da5cb5b1461009f578063bf7e214f146100c3575b600080fd5b6100776004803603602081101561006757600080fd5b50356001600160a01b03166100cb565b005b6100776004803603602081101561008f57600080fd5b50356001600160a01b031661013a565b6100a76101a5565b604080516001600160a01b039092168252519081900360200190f35b6100a76101b4565b6100e1336000356001600160e01b0319166101c3565b6100ea57600080fd5b600180546001600160a01b0319166001600160a01b0383811691909117918290556040519116907fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b610150336000356001600160e01b0319166101c3565b61015957600080fd5b600080546001600160a01b0319166001600160a01b03838116919091178083556040519116917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a250565b6001546001600160a01b031681565b6000546001600160a01b031681565b60006001600160a01b0383163014156101de575060016102a6565b6001546001600160a01b03848116911614156101fc575060016102a6565b6000546001600160a01b0316610214575060006102a6565b6000546040805163b700961360e01b81526001600160a01b0386811660048301523060248301526001600160e01b0319861660448301529151919092169163b7009613916064808301926020929190829003018186803b15801561027757600080fd5b505afa15801561028b573d6000803e3d6000fd5b505050506040513d60208110156102a157600080fd5b505190505b9291505056fea265627a7a723158205ff65bcb5af2b4ccfbd66c29b543703942f539e071b4422ea2d7b8588dafa9d964736f6c63430005100032";
