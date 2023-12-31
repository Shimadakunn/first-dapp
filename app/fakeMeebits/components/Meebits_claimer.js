const Meebits_claimer = [
    {
        "contractName": "FakeMeebitsClaimer",
        "abi": [
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "_maxTokenId",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "_ERC721address",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "_account",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "bool",
                "name": "_value",
                "type": "bool"
              }
            ],
            "name": "UpdateWhitelist",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "_tokenNumber",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "_tokenClaimer",
                "type": "address"
              }
            ],
            "name": "aTokenWasClaimed",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "_withdrawer",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "_funds",
                "type": "uint256"
              }
            ],
            "name": "withdrawFunds",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "_tipper",
                "type": "address"
              }
            ],
            "name": "yeeeeeeaaaaaahThxCoeurCoeurCoeur",
            "type": "event"
          },
          {
            "stateMutability": "payable",
            "type": "fallback",
            "payable": true
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "tokensThatWereClaimed",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "whitelist",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "_tokenToClaim",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "_signature",
                "type": "bytes"
              }
            ],
            "name": "claimAToken",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "payable",
            "type": "function",
            "payable": true
          },
          {
            "inputs": [],
            "name": "withdrawTips",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_account",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "_value",
                "type": "bool"
              }
            ],
            "name": "updateWhitelist",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
        "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maxTokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_ERC721address\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"_value\",\"type\":\"bool\"}],\"name\":\"UpdateWhitelist\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_tokenNumber\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_tokenClaimer\",\"type\":\"address\"}],\"name\":\"aTokenWasClaimed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_withdrawer\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_funds\",\"type\":\"uint256\"}],\"name\":\"withdrawFunds\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_tipper\",\"type\":\"address\"}],\"name\":\"yeeeeeeaaaaaahThxCoeurCoeurCoeur\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenToClaim\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_signature\",\"type\":\"bytes\"}],\"name\":\"claimAToken\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tokensThatWereClaimed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_value\",\"type\":\"bool\"}],\"name\":\"updateWhitelist\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"whitelist\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdrawTips\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"project:/contracts/FakeMeebitsClaimer.sol\":\"FakeMeebitsClaimer\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0x24141d2f6b98d4cb77a8936eae8cbaad2e261d9062bdc08036096f4550092501\",\"urls\":[\"bzz-raw://b710eb003944777135f027500a5a57b479fe857849f5f467c1ef9687401e3c95\",\"dweb:/ipfs/QmcELzi6KRzAs3DXwxdsoKWRJ13KSeipKQsJgD3unctdZM\"]},\"@openzeppelin/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xf70bc25d981e4ec9673a995ad2995d5d493ea188d3d8f388bba9c227ce09fb82\",\"urls\":[\"bzz-raw://bd970f51e3a77790c2f02b5b1759827c3b897c3d98c407b3631e8af32e3dc93c\",\"dweb:/ipfs/QmPF85Amgbqjk3SNZKsPCsqCw8JfwYEPMnnhvMJUyX58je\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xcc78a17dd88fa5a2edc60c8489e2f405c0913b377216a5b26b35656b2d0dab52\",\"urls\":[\"bzz-raw://526dc85e1f9b9b45830e202568d267d93dde7a4fcccf4ad7798dadcd92304d3c\",\"dweb:/ipfs/QmaoXMB972J3cSDLtBq3xBo4jLwqD2uzXTwujtSPqkYVhR\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x118ed7540f56b21ff92e21ebaa73584048e98d2ac04ca67571329bb8dbd9032f\",\"urls\":[\"bzz-raw://da2918b7aff73dd51d41bfcfa548f81eb50531b8353500fdbdacf297076db070\",\"dweb:/ipfs/Qmb8ixAs1vBjZRowQNuNg6bRf2NZmgZ1JTBxmQS14PHpcL\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x2d99a0deb6648c34fbc66d6ac4a2d64798d7a5321b45624f6736fadc63da1962\",\"urls\":[\"bzz-raw://2dcdce5ede1e5e650d174ec0b35be7d47b6a50f30bc895ef0d9e59fb75052e45\",\"dweb:/ipfs/QmQ2XFsDLTYqfEdw7pYzHiGtFRY11yQm4b6ynYgKqDxeB8\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol\":{\"keccak256\":\"0xe6bd1b1218338b6f9fe17776f48623b4ac3d8a40405f74a44bc23c00abe2ca13\",\"urls\":[\"bzz-raw://0c354c3f6e9c487759aa7869be4fba68e0b2efc777b514d289c4cbd3ff8f7e1a\",\"dweb:/ipfs/QmdF9LcSYVmiUCL7JxLEYmSLrjga6zJsujfi6sgEJD4M1z\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\":{\"keccak256\":\"0xccb917776f826ac6b68bd5a15a5f711e3967848a52ba11e6104d9a4f593314a7\",\"urls\":[\"bzz-raw://430255ad2229ced6d880e61a67bdc6e48dbbaed8354a7c1fe918cd8b8714a886\",\"dweb:/ipfs/QmTHY56odzqEpEC6v6tafaWMYY7vmULw25q5XHJLCCAeox\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x52146049d6709c870e8ddcd988b5155cb6c5d640cfcd8978aee52bc1ba2ec4eb\",\"urls\":[\"bzz-raw://ada84513617b7c1b2f890b44503735abaec73a1acd030112a17aac7e6c66a4a1\",\"dweb:/ipfs/QmaiFwdio67iJrfjAdkMac24eJ5sS1qD7CZW6PhUU6KjiK\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x28911e614500ae7c607a432a709d35da25f3bc5ddc8bd12b278b66358070c0ea\",\"urls\":[\"bzz-raw://256c8c8af5eb072bc473226ab2b2187149b8fc04f5f4a4820db22527f5ce8e3c\",\"dweb:/ipfs/QmRvi5BhnL7Rxf85KrJhwM6RRhukm4tzoctRdgQEheNyiN\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"urls\":[\"bzz-raw://ded47ec7c96750f9bd04bbbc84f659992d4ba901cb7b532a52cd468272cf378f\",\"dweb:/ipfs/QmfBrGtQP7rZEqEg6Wz6jh2N2Kukpj1z5v3CGWmAqrzm96\"]},\"@openzeppelin/contracts/utils/EnumerableMap.sol\":{\"keccak256\":\"0x4b087f06b6670a131a5a14e53b1d2a5ef19c034cc5ec42eeebcf9554325744ad\",\"urls\":[\"bzz-raw://f6a6af5d848334e40db419773f6360601e311ffc21c2e274f730b8c542da99fd\",\"dweb:/ipfs/QmfA24cxQ2g41ZWUuDF295dxDJ4xF1bSDYtC3EaLd7CzW8\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0x1562cd9922fbf739edfb979f506809e2743789cbde3177515542161c3d04b164\",\"urls\":[\"bzz-raw://4580d57781513d98870d9738c7d39094336e0a70cdb90d68dad549c6ced466ec\",\"dweb:/ipfs/Qmf9YZzzRFuvMnav9dgmeRUpdYMMECiZX8w25sHWVbA18V\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xa1e12f97981f1d0964b1c048978606a57127c56c438bab61cdfe269cad859a74\",\"urls\":[\"bzz-raw://5eefac1760f524971e14aa3f3d79515a3d54fd28c1d3bdca0b36127da349b830\",\"dweb:/ipfs/QmUMzkyH3ytJX5gVPizQruNLhkKmuJb3nFqBDad4LPdg5U\"]},\"project:/contracts/FakeMeebits.sol\":{\"keccak256\":\"0x80481bf67bbdcf553040bc8b5de5afdda3522c8c4f7828d6d41db9990a32b50c\",\"urls\":[\"bzz-raw://c9979e7c1739e3a3216daca58a612e50d1c2ce34b372ce1b8c74b80a133ce731\",\"dweb:/ipfs/QmT2jF22rwhVjJLxHwymHWxXgXYtMAmpKhfKsFgaMEpQQn\"]},\"project:/contracts/FakeMeebitsClaimer.sol\":{\"keccak256\":\"0x0fd3643adf65ae6f9e162e55c21acfaf76a38f80308d33331c5f0a9ab0508035\",\"urls\":[\"bzz-raw://436d2f8626939da710b3c834b7da43c26be8bc3e85645038e3cba9fdd8f05b10\",\"dweb:/ipfs/Qmbf2WuF4jVHmPdNTErcYhX7XiWZn2K8n4TEMj36oPM6XL\"]}},\"version\":1}",
        "bytecode": "0x608060405234801561001057600080fd5b50604051610c9f380380610c9f8339818101604052604081101561003357600080fd5b81019080805190602001909291908051906020019092919050505060016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508160028190555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610ba1806100fe6000396000f3fe60806040526004361061004e5760003560e01c80630d392cd9146100ce578063255dee64146101435780633aaa74b2146102205780634a80edcb146102375780639b19251a1461028a5761004f565b5b60003411156100cc57346003600082825401925050819055507f98122775feb83292ce43154cc4bc798bff4ba6678820c087b8c80c67cbc636f533604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b005b3480156100da57600080fd5b50610129600480360360408110156100f157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506102f3565b604051808215151515815260200191505060405180910390f35b6102066004803603604081101561015957600080fd5b81019080803590602001909291908035906020019064010000000081111561018057600080fd5b82018360208201111561019257600080fd5b803590602001918460018302840111640100000000831117156101b457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610482565b604051808215151515815260200191505060405180910390f35b34801561022c57600080fd5b5061023561083a565b005b34801561024357600080fd5b506102706004803603602081101561025a57600080fd5b81019080803590602001909291905050506109b0565b604051808215151515815260200191505060405180910390f35b34801561029657600080fd5b506102d9600480360360208110156102ad57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109d0565b604051808215151515815260200191505060405180910390f35b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166103b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4163636f756e74204e6f742057686974656c697374656400000000000000000081525060200191505060405180910390fd5b816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f08b2c0469ecd1d7a21d7e1492f0fc75fc7e8e0fa4fdf4275949c90875f5ebdf58383604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390a16001905092915050565b60006001600084815260200190815260200160002060009054906101000a900460ff1615610518576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f436c61696d3a20746f6b656e20616c726561647920636c61696d65640000000081525060200191505060405180910390fd5b600254831115610590576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f436c61696d3a20746f6b656e4964206f7574626f756e6473000000000000000081525060200191505060405180910390fd5b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405160208183030381529060405280519060200120905061061b81846109f0565b61068d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f436c61696d3a207369676e6572206e6f742077686974656c697374656400000081525060200191505060405180910390fd5b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663bfcd198a866040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561070757600080fd5b505af115801561071b573d6000803e3d6000fd5b50505050600180600087815260200190815260200160002060006101000a81548160ff0219169083151502179055507f4079d6cdd2cbe956002b074ad7fb0ab4a6e5b284448268f20d7e9b0b6e60562a8533604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16000341115610832577f98122775feb83292ce43154cc4bc798bff4ba6678820c087b8c80c67cbc636f533604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1346003600082825401925050819055505b505092915050565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166108f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4163636f756e74204e6f742057686974656c697374656400000000000000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc6003549081150290604051600060405180830381858888f19350505050158015610940573d6000803e3d6000fd5b507fc10753299d70f8b15c8a36ea98ae66c6d383e39fa5dd4e0ffcdea85c2223b2c833600354604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1565b60016020528060005260406000206000915054906101000a900460ff1681565b60006020528060005260406000206000915054906101000a900460ff1681565b6000806000806041855114610a0b5760009350505050610b65565b6020850151925060408501519150606085015160001a9050601b8160ff161015610a3657601b810190505b601b8160ff1614158015610a4e5750601c8160ff1614155b15610a5f5760009350505050610b65565b60008060018860405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018281526020019150506040516020818303038152906040528051906020012084878760405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610b0d573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1693505050505b9291505056fea2646970667358221220dcc19210294c84253225f2a5aa3479cf67ff50f652f8048a2bb753be1883d57764736f6c63430006020033",
        "deployedBytecode": "0x60806040526004361061004e5760003560e01c80630d392cd9146100ce578063255dee64146101435780633aaa74b2146102205780634a80edcb146102375780639b19251a1461028a5761004f565b5b60003411156100cc57346003600082825401925050819055507f98122775feb83292ce43154cc4bc798bff4ba6678820c087b8c80c67cbc636f533604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b005b3480156100da57600080fd5b50610129600480360360408110156100f157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506102f3565b604051808215151515815260200191505060405180910390f35b6102066004803603604081101561015957600080fd5b81019080803590602001909291908035906020019064010000000081111561018057600080fd5b82018360208201111561019257600080fd5b803590602001918460018302840111640100000000831117156101b457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610482565b604051808215151515815260200191505060405180910390f35b34801561022c57600080fd5b5061023561083a565b005b34801561024357600080fd5b506102706004803603602081101561025a57600080fd5b81019080803590602001909291905050506109b0565b604051808215151515815260200191505060405180910390f35b34801561029657600080fd5b506102d9600480360360208110156102ad57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109d0565b604051808215151515815260200191505060405180910390f35b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166103b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4163636f756e74204e6f742057686974656c697374656400000000000000000081525060200191505060405180910390fd5b816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f08b2c0469ecd1d7a21d7e1492f0fc75fc7e8e0fa4fdf4275949c90875f5ebdf58383604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390a16001905092915050565b60006001600084815260200190815260200160002060009054906101000a900460ff1615610518576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f436c61696d3a20746f6b656e20616c726561647920636c61696d65640000000081525060200191505060405180910390fd5b600254831115610590576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f436c61696d3a20746f6b656e4964206f7574626f756e6473000000000000000081525060200191505060405180910390fd5b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405160208183030381529060405280519060200120905061061b81846109f0565b61068d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f436c61696d3a207369676e6572206e6f742077686974656c697374656400000081525060200191505060405180910390fd5b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663bfcd198a866040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561070757600080fd5b505af115801561071b573d6000803e3d6000fd5b50505050600180600087815260200190815260200160002060006101000a81548160ff0219169083151502179055507f4079d6cdd2cbe956002b074ad7fb0ab4a6e5b284448268f20d7e9b0b6e60562a8533604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16000341115610832577f98122775feb83292ce43154cc4bc798bff4ba6678820c087b8c80c67cbc636f533604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1346003600082825401925050819055505b505092915050565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166108f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4163636f756e74204e6f742057686974656c697374656400000000000000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc6003549081150290604051600060405180830381858888f19350505050158015610940573d6000803e3d6000fd5b507fc10753299d70f8b15c8a36ea98ae66c6d383e39fa5dd4e0ffcdea85c2223b2c833600354604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1565b60016020528060005260406000206000915054906101000a900460ff1681565b60006020528060005260406000206000915054906101000a900460ff1681565b6000806000806041855114610a0b5760009350505050610b65565b6020850151925060408501519150606085015160001a9050601b8160ff161015610a3657601b810190505b601b8160ff1614158015610a4e5750601c8160ff1614155b15610a5f5760009350505050610b65565b60008060018860405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018281526020019150506040516020818303038152906040528051906020012084878760405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610b0d573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1693505050505b9291505056fea2646970667358221220dcc19210294c84253225f2a5aa3479cf67ff50f652f8048a2bb753be1883d57764736f6c63430006020033",
        "sourceMap": "86:4216:15:-:0;;;543:180;8:9:-1;5:2;;;30:1;27;20:12;5:2;543:180:15;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;543:180:15;;;;;;;;;;;;;;;;;;;;;;;;;638:4;614:9;:21;624:10;614:21;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;665:11;652:10;:24;;;;702:14;686:13;;:30;;;;;;;;;;;;;;;;;;543:180;;86:4216;;;;;;",
        "deployedSourceMap": "86:4216:15:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;784:1;772:9;:13;768:130;;;815:9;801:10;;:23;;;;;;;;;;;843:44;876:10;843:44;;;;;;;;;;;;;;;;;;;;;;768:130;86:4216;3974:208;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3974:208:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3974:208:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;910:1325;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;910:1325:15;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;910:1325:15;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;910:1325:15;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;910:1325:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;910:1325:15;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2241:148;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2241:148:15;;;:::i;:::-;;416:50;;8:9:-1;5:2;;;30:1;27;20:12;5:2;416:50:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;416:50:15;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;369:41;;8:9:-1;5:2;;;30:1;27;20:12;5:2;369:41:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;369:41:15;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3974:208;4062:4;4233:9;:21;4243:10;4233:21;;;;;;;;;;;;;;;;;;;;;;;;;4225:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4100:6:::1;4078:9;:19:::0;4088:8:::1;4078:19;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;4121:33;4137:8;4147:6;4121:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4171:4;4164:11;;3974:208:::0;;;;:::o;910:1325::-;1014:4;1102:21;:36;1124:13;1102:36;;;;;;;;;;;;;;;;;;;;;1101:37;1093:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1253:10;;1236:13;:27;;1228:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1382:13;1419;;;;;;;;;;;1434;1408:40;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1408:40:15;;;1398:51;;;;;;1382:67;;1527:38;1547:5;1554:10;1527:19;:38::i;:::-;1519:80;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1664:32;1711:13;;;;;;;;;;;1664:61;;1735:20;:31;;;1767:13;1735:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1735:46:15;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1735:46:15;;;;1946:4;1907:21;:36;1929:13;1907:36;;;;;;;;;;;;:43;;;;;;;;;;;;;;;;;;1994;2011:13;2026:10;1994:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;2115:1;2103:9;:13;2099:130;;;2137:44;2170:10;2137:44;;;;;;;;;;;;;;;;;;;;;;2209:9;2195:10;;:23;;;;;;;;;;;2099:130;910:1325;;;;;;:::o;2241:148::-;4233:9;:21;4243:10;4233:21;;;;;;;;;;;;;;;;;;;;;;;;;4225:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2298:10:::1;:19;;:31;2318:10;;2298:31;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39::::0;24:38:::1;77:16;74:1;67:27;5:2;2298:31:15;2344:38;2358:10;2370;;2344:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;2241:148::o:0;416:50::-;;;;;;;;;;;;;;;;;;;;;;:::o;369:41::-;;;;;;;;;;;;;;;;;;;;;;:::o;2672:1189::-;2764:4;2780:9;2799;2818:7;2898:2;2877:10;:17;:23;2873:66;;2923:5;2916:12;;;;;;;2873:66;3241:2;3229:10;3225:19;3219:26;3214:31;;3285:2;3273:10;3269:19;3263:26;3258:31;;3337:2;3325:10;3321:19;3315:26;3312:1;3307:35;3302:40;;3460:2;3456:1;:6;;;3452:44;;;3483:2;3478:7;;;;3452:44;3577:2;3572:1;:7;;;;:18;;;;;3588:2;3583:1;:7;;;;3572:18;3568:287;;;3613:5;3606:12;;;;;;;3568:287;3709:9;:135;3719:124;3809:5;3756:59;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;3756:59:15;;;3729:104;;;;;;3835:1;3838;3841;3719:124;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3719:124:15;;;;;;;;3709:135;;;;;;;;;;;;;;;;;;;;;;;;;3702:142;;;;;2672:1189;;;;;:::o",
        "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.6.2;\n\nimport \"./FakeMeebits.sol\";\n\ncontract FakeMeebitsClaimer {\n    event UpdateWhitelist(address _account, bool _value);\n    event aTokenWasClaimed(uint _tokenNumber, address _tokenClaimer);\n    event yeeeeeeaaaaaahThxCoeurCoeurCoeur(address _tipper);\n    event withdrawFunds(address _withdrawer, uint _funds);\n\n    mapping(address => bool) public whitelist;\n    mapping(uint => bool) public tokensThatWereClaimed;\n\n    uint maxTokenId;\n    uint totalFunds;\n    address ERC721address;\n\n    constructor(uint _maxTokenId, address _ERC721address) public {\n        whitelist[msg.sender] = true;\n        maxTokenId = _maxTokenId;\n        ERC721address = _ERC721address;\n    }\n\n    fallback () external payable {\n        if (msg.value > 0) {\n            totalFunds += msg.value;\n            emit yeeeeeeaaaaaahThxCoeurCoeurCoeur(msg.sender);\n        }\n    }\n\n    function claimAToken(uint _tokenToClaim, bytes memory _signature) \n    public \n    payable\n    returns (bool)\n    {\n\n        // Checking if the token has already been claimed\n        require(!tokensThatWereClaimed[_tokenToClaim], \"Claim: token already claimed\");\n        // Not sure this is useful but oh well\n        require(_tokenToClaim <= maxTokenId, \"Claim: tokenId outbounds\");\n        // Creating a hash unique to this token number, and this token contract\n        bytes32 _hash = keccak256(abi.encode(ERC721address, _tokenToClaim));\n        // Making sure that the signer has been whitelisted\n        require(signerIsWhitelisted(_hash, _signature), \"Claim: signer not whitelisted\");\n        // All should be good, so we mint a token yeah\n        FakeMeebits targetERC721Contract = FakeMeebits(ERC721address);\n        targetERC721Contract.mintAToken(_tokenToClaim);\n\n        // Registering that the token was claimed\n        // Note that there is a check in the ERC721 for this too\n        tokensThatWereClaimed[_tokenToClaim] = true;\n        // Emitting an event\n        emit aTokenWasClaimed(_tokenToClaim, msg.sender);\n\n        // If a tip was included, thank the tipper\n        if (msg.value > 0) {\n            emit yeeeeeeaaaaaahThxCoeurCoeurCoeur(msg.sender);\n            totalFunds += msg.value;\n        }\n    }\n\n    function withdrawTips() public onlyWhitelisted {\n        msg.sender.transfer(totalFunds);\n        emit withdrawFunds(msg.sender, totalFunds );\n    }\n\n\n    // 20/02/27: Borrowed from https://github.com/austintgriffith/bouncer-proxy/blob/master/BouncerProxy/BouncerProxy.sol\n    // borrowed from OpenZeppelin's ESDA stuff:\n    // https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/cryptography/ECDSA.sol\n    function signerIsWhitelisted(bytes32 _hash, bytes memory _signature) internal view returns (bool) {\n        bytes32 r;\n        bytes32 s;\n        uint8 v;\n        // Check the signature length\n        if (_signature.length != 65) {\n            return false;\n        }\n        // Divide the signature in r, s and v variables\n        // ecrecover takes the signature parameters, and the only way to get them\n        // currently is to use assembly.\n        // solium-disable-next-line security/no-inline-assembly\n        assembly {\n            r := mload(add(_signature, 32))\n            s := mload(add(_signature, 64))\n            v := byte(0, mload(add(_signature, 96)))\n        }\n        // Version of signature should be 27 or 28, but 0 and 1 are also possible versions\n        if (v < 27) {\n            v += 27;\n        }\n        // If the version is correct return the signer address\n        if (v != 27 && v != 28) {\n            return false;\n        } else {\n            // solium-disable-next-line arg-overflow\n            return whitelist[ecrecover(keccak256(\n                abi.encodePacked(\"\\x19Ethereum Signed Message:\\n32\", _hash)\n                ), v, r, s)];\n        }\n    }\n\n    //  20/02/27: Borrowed from https://github.com/rocksideio/contracts/blob/master/contracts/Identity.sol\n    function updateWhitelist(address _account, bool _value) onlyWhitelisted public returns (bool) {\n        whitelist[_account] = _value;\n        emit UpdateWhitelist(_account, _value);\n        return true;\n    }\n\n    modifier onlyWhitelisted() {\n        require(whitelist[msg.sender], \"Account Not Whitelisted\");\n        _;\n    }\n}\n",
        "sourcePath": "/home/aymeric/Desktop/erc721-ux/contracts/FakeMeebitsClaimer.sol",
        "ast": {
          "absolutePath": "project:/contracts/FakeMeebitsClaimer.sol",
          "exportedSymbols": {
            "FakeMeebitsClaimer": [
              3298
            ]
          },
          "id": 3299,
          "nodeType": "SourceUnit",
          "nodes": [
            {
              "id": 3013,
              "literals": [
                "solidity",
                "^",
                "0.6",
                ".2"
              ],
              "nodeType": "PragmaDirective",
              "src": "32:23:15"
            },
            {
              "absolutePath": "project:/contracts/FakeMeebits.sol",
              "file": "./FakeMeebits.sol",
              "id": 3014,
              "nodeType": "ImportDirective",
              "scope": 3299,
              "sourceUnit": 3012,
              "src": "57:27:15",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "abstract": false,
              "baseContracts": [],
              "contractDependencies": [],
              "contractKind": "contract",
              "documentation": null,
              "fullyImplemented": true,
              "id": 3298,
              "linearizedBaseContracts": [
                3298
              ],
              "name": "FakeMeebitsClaimer",
              "nodeType": "ContractDefinition",
              "nodes": [
                {
                  "anonymous": false,
                  "documentation": null,
                  "id": 3020,
                  "name": "UpdateWhitelist",
                  "nodeType": "EventDefinition",
                  "parameters": {
                    "id": 3019,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 3016,
                        "indexed": false,
                        "name": "_account",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3020,
                        "src": "142:16:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 3015,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "142:7:15",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 3018,
                        "indexed": false,
                        "name": "_value",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3020,
                        "src": "160:11:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 3017,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "160:4:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "141:31:15"
                  },
                  "src": "120:53:15"
                },
                {
                  "anonymous": false,
                  "documentation": null,
                  "id": 3026,
                  "name": "aTokenWasClaimed",
                  "nodeType": "EventDefinition",
                  "parameters": {
                    "id": 3025,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 3022,
                        "indexed": false,
                        "name": "_tokenNumber",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3026,
                        "src": "201:17:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 3021,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "201:4:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 3024,
                        "indexed": false,
                        "name": "_tokenClaimer",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3026,
                        "src": "220:21:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 3023,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "220:7:15",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "200:42:15"
                  },
                  "src": "178:65:15"
                },
                {
                  "anonymous": false,
                  "documentation": null,
                  "id": 3030,
                  "name": "yeeeeeeaaaaaahThxCoeurCoeurCoeur",
                  "nodeType": "EventDefinition",
                  "parameters": {
                    "id": 3029,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 3028,
                        "indexed": false,
                        "name": "_tipper",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3030,
                        "src": "287:15:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 3027,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "287:7:15",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "286:17:15"
                  },
                  "src": "248:56:15"
                },
                {
                  "anonymous": false,
                  "documentation": null,
                  "id": 3036,
                  "name": "withdrawFunds",
                  "nodeType": "EventDefinition",
                  "parameters": {
                    "id": 3035,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 3032,
                        "indexed": false,
                        "name": "_withdrawer",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3036,
                        "src": "329:19:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 3031,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "329:7:15",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 3034,
                        "indexed": false,
                        "name": "_funds",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3036,
                        "src": "350:11:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 3033,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "350:4:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "328:34:15"
                  },
                  "src": "309:54:15"
                },
                {
                  "constant": false,
                  "functionSelector": "9b19251a",
                  "id": 3040,
                  "name": "whitelist",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 3298,
                  "src": "369:41:15",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                    "typeString": "mapping(address => bool)"
                  },
                  "typeName": {
                    "id": 3039,
                    "keyType": {
                      "id": 3037,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "377:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "369:24:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                      "typeString": "mapping(address => bool)"
                    },
                    "valueType": {
                      "id": 3038,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "388:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "functionSelector": "4a80edcb",
                  "id": 3044,
                  "name": "tokensThatWereClaimed",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 3298,
                  "src": "416:50:15",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                    "typeString": "mapping(uint256 => bool)"
                  },
                  "typeName": {
                    "id": 3043,
                    "keyType": {
                      "id": 3041,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "424:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "416:21:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                      "typeString": "mapping(uint256 => bool)"
                    },
                    "valueType": {
                      "id": 3042,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "432:4:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    }
                  },
                  "value": null,
                  "visibility": "public"
                },
                {
                  "constant": false,
                  "id": 3046,
                  "name": "maxTokenId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 3298,
                  "src": "473:15:15",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3045,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3048,
                  "name": "totalFunds",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 3298,
                  "src": "494:15:15",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3047,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "494:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3050,
                  "name": "ERC721address",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 3298,
                  "src": "515:21:15",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3049,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "515:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "body": {
                    "id": 3072,
                    "nodeType": "Block",
                    "src": "604:119:15",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 3062,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 3057,
                              "name": "whitelist",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3040,
                              "src": "614:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 3060,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 3058,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "624:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 3059,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "624:10:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "614:21:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "74727565",
                            "id": 3061,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "638:4:15",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "614:28:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 3063,
                        "nodeType": "ExpressionStatement",
                        "src": "614:28:15"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 3066,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 3064,
                            "name": "maxTokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3046,
                            "src": "652:10:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 3065,
                            "name": "_maxTokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3052,
                            "src": "665:11:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "652:24:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 3067,
                        "nodeType": "ExpressionStatement",
                        "src": "652:24:15"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 3070,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 3068,
                            "name": "ERC721address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3050,
                            "src": "686:13:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 3069,
                            "name": "_ERC721address",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3054,
                            "src": "702:14:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "686:30:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 3071,
                        "nodeType": "ExpressionStatement",
                        "src": "686:30:15"
                      }
                    ]
                  },
                  "documentation": null,
                  "id": 3073,
                  "implemented": true,
                  "kind": "constructor",
                  "modifiers": [],
                  "name": "",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 3055,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 3052,
                        "name": "_maxTokenId",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3073,
                        "src": "555:16:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 3051,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "555:4:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 3054,
                        "name": "_ERC721address",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3073,
                        "src": "573:22:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 3053,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "573:7:15",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "554:42:15"
                  },
                  "returnParameters": {
                    "id": 3056,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "604:0:15"
                  },
                  "scope": 3298,
                  "src": "543:180:15",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 3092,
                    "nodeType": "Block",
                    "src": "758:146:15",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 3079,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 3076,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "772:3:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 3077,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "772:9:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 3078,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "784:1:15",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "772:13:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 3091,
                        "nodeType": "IfStatement",
                        "src": "768:130:15",
                        "trueBody": {
                          "id": 3090,
                          "nodeType": "Block",
                          "src": "787:111:15",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 3083,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 3080,
                                  "name": "totalFunds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3048,
                                  "src": "801:10:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "+=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 3081,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -15,
                                    "src": "815:3:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 3082,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "815:9:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "801:23:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 3084,
                              "nodeType": "ExpressionStatement",
                              "src": "801:23:15"
                            },
                            {
                              "eventCall": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 3086,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -15,
                                      "src": "876:3:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 3087,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "876:10:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  ],
                                  "id": 3085,
                                  "name": "yeeeeeeaaaaaahThxCoeurCoeurCoeur",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3030,
                                  "src": "843:32:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                                    "typeString": "function (address)"
                                  }
                                },
                                "id": 3088,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "843:44:15",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 3089,
                              "nodeType": "EmitStatement",
                              "src": "838:49:15"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "documentation": null,
                  "id": 3093,
                  "implemented": true,
                  "kind": "fallback",
                  "modifiers": [],
                  "name": "",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 3074,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "738:2:15"
                  },
                  "returnParameters": {
                    "id": 3075,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "758:0:15"
                  },
                  "scope": 3298,
                  "src": "729:175:15",
                  "stateMutability": "payable",
                  "virtual": false,
                  "visibility": "external"
                },
                {
                  "body": {
                    "id": 3175,
                    "nodeType": "Block",
                    "src": "1024:1211:15",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3106,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "!",
                              "prefix": true,
                              "src": "1101:37:15",
                              "subExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 3103,
                                  "name": "tokensThatWereClaimed",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3044,
                                  "src": "1102:21:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                    "typeString": "mapping(uint256 => bool)"
                                  }
                                },
                                "id": 3105,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 3104,
                                  "name": "_tokenToClaim",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3095,
                                  "src": "1124:13:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "1102:36:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "436c61696d3a20746f6b656e20616c726561647920636c61696d6564",
                              "id": 3107,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1140:30:15",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_337c2282379537db254a77fd23f2e4c119b7ca868bb9c6d72297f9e0d0d8035b",
                                "typeString": "literal_string \"Claim: token already claimed\""
                              },
                              "value": "Claim: token already claimed"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_337c2282379537db254a77fd23f2e4c119b7ca868bb9c6d72297f9e0d0d8035b",
                                "typeString": "literal_string \"Claim: token already claimed\""
                              }
                            ],
                            "id": 3102,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "1093:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 3108,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1093:78:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3109,
                        "nodeType": "ExpressionStatement",
                        "src": "1093:78:15"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 3113,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 3111,
                                "name": "_tokenToClaim",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3095,
                                "src": "1236:13:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "<=",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 3112,
                                "name": "maxTokenId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3046,
                                "src": "1253:10:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "1236:27:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "436c61696d3a20746f6b656e4964206f7574626f756e6473",
                              "id": 3114,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1265:26:15",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_d06de1650893762b6903ecd0d1ec58e2cf2461121fb3af5cef9fa2626f28e30a",
                                "typeString": "literal_string \"Claim: tokenId outbounds\""
                              },
                              "value": "Claim: tokenId outbounds"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_d06de1650893762b6903ecd0d1ec58e2cf2461121fb3af5cef9fa2626f28e30a",
                                "typeString": "literal_string \"Claim: tokenId outbounds\""
                              }
                            ],
                            "id": 3110,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "1228:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 3115,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1228:64:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3116,
                        "nodeType": "ExpressionStatement",
                        "src": "1228:64:15"
                      },
                      {
                        "assignments": [
                          3118
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 3118,
                            "name": "_hash",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 3175,
                            "src": "1382:13:15",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 3117,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "1382:7:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 3126,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 3122,
                                  "name": "ERC721address",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3050,
                                  "src": "1419:13:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 3123,
                                  "name": "_tokenToClaim",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3095,
                                  "src": "1434:13:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 3120,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -1,
                                  "src": "1408:3:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 3121,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberName": "encode",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "1408:10:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 3124,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1408:40:15",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 3119,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -8,
                            "src": "1398:9:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 3125,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1398:51:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1382:67:15"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 3129,
                                  "name": "_hash",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3118,
                                  "src": "1547:5:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 3130,
                                  "name": "_signature",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3097,
                                  "src": "1554:10:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                  },
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 3128,
                                "name": "signerIsWhitelisted",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3260,
                                "src": "1527:19:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_bytes_memory_ptr_$returns$_t_bool_$",
                                  "typeString": "function (bytes32,bytes memory) view returns (bool)"
                                }
                              },
                              "id": 3131,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1527:38:15",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "436c61696d3a207369676e6572206e6f742077686974656c6973746564",
                              "id": 3132,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1567:31:15",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_38d22e001cfc2cf75ca4365ae5c400259c4c5a5e496de5ca478129028519683f",
                                "typeString": "literal_string \"Claim: signer not whitelisted\""
                              },
                              "value": "Claim: signer not whitelisted"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_38d22e001cfc2cf75ca4365ae5c400259c4c5a5e496de5ca478129028519683f",
                                "typeString": "literal_string \"Claim: signer not whitelisted\""
                              }
                            ],
                            "id": 3127,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "1519:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 3133,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1519:80:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3134,
                        "nodeType": "ExpressionStatement",
                        "src": "1519:80:15"
                      },
                      {
                        "assignments": [
                          3136
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 3136,
                            "name": "targetERC721Contract",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 3175,
                            "src": "1664:32:15",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_FakeMeebits_$3011",
                              "typeString": "contract FakeMeebits"
                            },
                            "typeName": {
                              "contractScope": null,
                              "id": 3135,
                              "name": "FakeMeebits",
                              "nodeType": "UserDefinedTypeName",
                              "referencedDeclaration": 3011,
                              "src": "1664:11:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_FakeMeebits_$3011",
                                "typeString": "contract FakeMeebits"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 3140,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3138,
                              "name": "ERC721address",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3050,
                              "src": "1711:13:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 3137,
                            "name": "FakeMeebits",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3011,
                            "src": "1699:11:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_FakeMeebits_$3011_$",
                              "typeString": "type(contract FakeMeebits)"
                            }
                          },
                          "id": 3139,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1699:26:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_FakeMeebits_$3011",
                            "typeString": "contract FakeMeebits"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1664:61:15"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3144,
                              "name": "_tokenToClaim",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3095,
                              "src": "1767:13:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 3141,
                              "name": "targetERC721Contract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3136,
                              "src": "1735:20:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_FakeMeebits_$3011",
                                "typeString": "contract FakeMeebits"
                              }
                            },
                            "id": 3143,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "mintAToken",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 2982,
                            "src": "1735:31:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256) external"
                            }
                          },
                          "id": 3145,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1735:46:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3146,
                        "nodeType": "ExpressionStatement",
                        "src": "1735:46:15"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 3151,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 3147,
                              "name": "tokensThatWereClaimed",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3044,
                              "src": "1907:21:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_bool_$",
                                "typeString": "mapping(uint256 => bool)"
                              }
                            },
                            "id": 3149,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 3148,
                              "name": "_tokenToClaim",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3095,
                              "src": "1929:13:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "1907:36:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "74727565",
                            "id": 3150,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1946:4:15",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "1907:43:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 3152,
                        "nodeType": "ExpressionStatement",
                        "src": "1907:43:15"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3154,
                              "name": "_tokenToClaim",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3095,
                              "src": "2011:13:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 3155,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "2026:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 3156,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2026:10:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            ],
                            "id": 3153,
                            "name": "aTokenWasClaimed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3026,
                            "src": "1994:16:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$returns$__$",
                              "typeString": "function (uint256,address)"
                            }
                          },
                          "id": 3157,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1994:43:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3158,
                        "nodeType": "EmitStatement",
                        "src": "1989:48:15"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 3162,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 3159,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "2103:3:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 3160,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2103:9:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 3161,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2115:1:15",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "2103:13:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 3174,
                        "nodeType": "IfStatement",
                        "src": "2099:130:15",
                        "trueBody": {
                          "id": 3173,
                          "nodeType": "Block",
                          "src": "2118:111:15",
                          "statements": [
                            {
                              "eventCall": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 3164,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -15,
                                      "src": "2170:3:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 3165,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2170:10:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  ],
                                  "id": 3163,
                                  "name": "yeeeeeeaaaaaahThxCoeurCoeurCoeur",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3030,
                                  "src": "2137:32:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                                    "typeString": "function (address)"
                                  }
                                },
                                "id": 3166,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2137:44:15",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 3167,
                              "nodeType": "EmitStatement",
                              "src": "2132:49:15"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 3171,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 3168,
                                  "name": "totalFunds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3048,
                                  "src": "2195:10:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "+=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 3169,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -15,
                                    "src": "2209:3:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 3170,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "value",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2209:9:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2195:23:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 3172,
                              "nodeType": "ExpressionStatement",
                              "src": "2195:23:15"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "255dee64",
                  "id": 3176,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "claimAToken",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 3098,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 3095,
                        "name": "_tokenToClaim",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3176,
                        "src": "931:18:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 3094,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "931:4:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 3097,
                        "name": "_signature",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3176,
                        "src": "951:23:15",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes"
                        },
                        "typeName": {
                          "id": 3096,
                          "name": "bytes",
                          "nodeType": "ElementaryTypeName",
                          "src": "951:5:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_storage_ptr",
                            "typeString": "bytes"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "930:45:15"
                  },
                  "returnParameters": {
                    "id": 3101,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 3100,
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3176,
                        "src": "1014:4:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 3099,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "1014:4:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "1013:6:15"
                  },
                  "scope": 3298,
                  "src": "910:1325:15",
                  "stateMutability": "payable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 3195,
                    "nodeType": "Block",
                    "src": "2288:101:15",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3186,
                              "name": "totalFunds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3048,
                              "src": "2318:10:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 3181,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "2298:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 3184,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2298:10:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "id": 3185,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2298:19:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 3187,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2298:31:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3188,
                        "nodeType": "ExpressionStatement",
                        "src": "2298:31:15"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 3190,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "2358:3:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 3191,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2358:10:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 3192,
                              "name": "totalFunds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3048,
                              "src": "2370:10:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 3189,
                            "name": "withdrawFunds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3036,
                            "src": "2344:13:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 3193,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2344:38:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3194,
                        "nodeType": "EmitStatement",
                        "src": "2339:43:15"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "3aaa74b2",
                  "id": 3196,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                    {
                      "arguments": null,
                      "id": 3179,
                      "modifierName": {
                        "argumentTypes": null,
                        "id": 3178,
                        "name": "onlyWhitelisted",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3297,
                        "src": "2272:15:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_modifier$__$",
                          "typeString": "modifier ()"
                        }
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "2272:15:15"
                    }
                  ],
                  "name": "withdrawTips",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 3177,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "2262:2:15"
                  },
                  "returnParameters": {
                    "id": 3180,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "2288:0:15"
                  },
                  "scope": 3298,
                  "src": "2241:148:15",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 3259,
                    "nodeType": "Block",
                    "src": "2770:1091:15",
                    "statements": [
                      {
                        "assignments": [
                          3206
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 3206,
                            "name": "r",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 3259,
                            "src": "2780:9:15",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 3205,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "2780:7:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 3207,
                        "initialValue": null,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2780:9:15"
                      },
                      {
                        "assignments": [
                          3209
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 3209,
                            "name": "s",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 3259,
                            "src": "2799:9:15",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            "typeName": {
                              "id": 3208,
                              "name": "bytes32",
                              "nodeType": "ElementaryTypeName",
                              "src": "2799:7:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 3210,
                        "initialValue": null,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2799:9:15"
                      },
                      {
                        "assignments": [
                          3212
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 3212,
                            "name": "v",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 3259,
                            "src": "2818:7:15",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            },
                            "typeName": {
                              "id": 3211,
                              "name": "uint8",
                              "nodeType": "ElementaryTypeName",
                              "src": "2818:5:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 3213,
                        "initialValue": null,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "2818:7:15"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 3217,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 3214,
                              "name": "_signature",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3200,
                              "src": "2877:10:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 3215,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2877:17:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3635",
                            "id": 3216,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2898:2:15",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_65_by_1",
                              "typeString": "int_const 65"
                            },
                            "value": "65"
                          },
                          "src": "2877:23:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 3221,
                        "nodeType": "IfStatement",
                        "src": "2873:66:15",
                        "trueBody": {
                          "id": 3220,
                          "nodeType": "Block",
                          "src": "2902:37:15",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "hexValue": "66616c7365",
                                "id": 3218,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2923:5:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "value": "false"
                              },
                              "functionReturnParameters": 3204,
                              "id": 3219,
                              "nodeType": "Return",
                              "src": "2916:12:15"
                            }
                          ]
                        }
                      },
                      {
                        "AST": {
                          "nodeType": "YulBlock",
                          "src": "3200:152:15",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "3214:31:15",
                              "value": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "_signature",
                                        "nodeType": "YulIdentifier",
                                        "src": "3229:10:15"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3241:2:15",
                                        "type": "",
                                        "value": "32"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "3225:3:15"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3225:19:15"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "3219:5:15"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3219:26:15"
                              },
                              "variableNames": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "3214:1:15"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "3258:31:15",
                              "value": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "_signature",
                                        "nodeType": "YulIdentifier",
                                        "src": "3273:10:15"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3285:2:15",
                                        "type": "",
                                        "value": "64"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "3269:3:15"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3269:19:15"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "3263:5:15"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3263:26:15"
                              },
                              "variableNames": [
                                {
                                  "name": "s",
                                  "nodeType": "YulIdentifier",
                                  "src": "3258:1:15"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "3302:40:15",
                              "value": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3312:1:15",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "_signature",
                                            "nodeType": "YulIdentifier",
                                            "src": "3325:10:15"
                                          },
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "3337:2:15",
                                            "type": "",
                                            "value": "96"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "3321:3:15"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "3321:19:15"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "3315:5:15"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3315:26:15"
                                  }
                                ],
                                "functionName": {
                                  "name": "byte",
                                  "nodeType": "YulIdentifier",
                                  "src": "3307:4:15"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3307:35:15"
                              },
                              "variableNames": [
                                {
                                  "name": "v",
                                  "nodeType": "YulIdentifier",
                                  "src": "3302:1:15"
                                }
                              ]
                            }
                          ]
                        },
                        "evmVersion": "istanbul",
                        "externalReferences": [
                          {
                            "declaration": 3200,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "3229:10:15",
                            "valueSize": 1
                          },
                          {
                            "declaration": 3200,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "3273:10:15",
                            "valueSize": 1
                          },
                          {
                            "declaration": 3200,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "3325:10:15",
                            "valueSize": 1
                          },
                          {
                            "declaration": 3206,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "3214:1:15",
                            "valueSize": 1
                          },
                          {
                            "declaration": 3209,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "3258:1:15",
                            "valueSize": 1
                          },
                          {
                            "declaration": 3212,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "3302:1:15",
                            "valueSize": 1
                          }
                        ],
                        "id": 3222,
                        "nodeType": "InlineAssembly",
                        "src": "3191:161:15"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          },
                          "id": 3225,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 3223,
                            "name": "v",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3212,
                            "src": "3456:1:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3237",
                            "id": 3224,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3460:2:15",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_27_by_1",
                              "typeString": "int_const 27"
                            },
                            "value": "27"
                          },
                          "src": "3456:6:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 3231,
                        "nodeType": "IfStatement",
                        "src": "3452:44:15",
                        "trueBody": {
                          "id": 3230,
                          "nodeType": "Block",
                          "src": "3464:32:15",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 3228,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 3226,
                                  "name": "v",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3212,
                                  "src": "3478:1:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "+=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "hexValue": "3237",
                                  "id": 3227,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3483:2:15",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_27_by_1",
                                    "typeString": "int_const 27"
                                  },
                                  "value": "27"
                                },
                                "src": "3478:7:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "id": 3229,
                              "nodeType": "ExpressionStatement",
                              "src": "3478:7:15"
                            }
                          ]
                        }
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 3238,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            },
                            "id": 3234,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 3232,
                              "name": "v",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3212,
                              "src": "3572:1:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "!=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "3237",
                              "id": 3233,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3577:2:15",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_27_by_1",
                                "typeString": "int_const 27"
                              },
                              "value": "27"
                            },
                            "src": "3572:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            },
                            "id": 3237,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 3235,
                              "name": "v",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3212,
                              "src": "3583:1:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "!=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "3238",
                              "id": 3236,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3588:2:15",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_28_by_1",
                                "typeString": "int_const 28"
                              },
                              "value": "28"
                            },
                            "src": "3583:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "3572:18:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 3257,
                          "nodeType": "Block",
                          "src": "3635:220:15",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 3242,
                                  "name": "whitelist",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3040,
                                  "src": "3709:9:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                    "typeString": "mapping(address => bool)"
                                  }
                                },
                                "id": 3255,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "arguments": [
                                            {
                                              "argumentTypes": null,
                                              "hexValue": "19457468657265756d205369676e6564204d6573736167653a0a3332",
                                              "id": 3247,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "kind": "string",
                                              "lValueRequested": false,
                                              "nodeType": "Literal",
                                              "src": "3773:34:15",
                                              "subdenomination": null,
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_stringliteral_178a2411ab6fbc1ba11064408972259c558d0e82fd48b0aba3ad81d14f065e73",
                                                "typeString": "literal_string \"\u0019Ethereum Signed Message:\n32\""
                                              },
                                              "value": "\u0019Ethereum Signed Message:\n32"
                                            },
                                            {
                                              "argumentTypes": null,
                                              "id": 3248,
                                              "name": "_hash",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": 3198,
                                              "src": "3809:5:15",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                              }
                                            }
                                          ],
                                          "expression": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_stringliteral_178a2411ab6fbc1ba11064408972259c558d0e82fd48b0aba3ad81d14f065e73",
                                                "typeString": "literal_string \"\u0019Ethereum Signed Message:\n32\""
                                              },
                                              {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                              }
                                            ],
                                            "expression": {
                                              "argumentTypes": null,
                                              "id": 3245,
                                              "name": "abi",
                                              "nodeType": "Identifier",
                                              "overloadedDeclarations": [],
                                              "referencedDeclaration": -1,
                                              "src": "3756:3:15",
                                              "typeDescriptions": {
                                                "typeIdentifier": "t_magic_abi",
                                                "typeString": "abi"
                                              }
                                            },
                                            "id": 3246,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberName": "encodePacked",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "3756:16:15",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                              "typeString": "function () pure returns (bytes memory)"
                                            }
                                          },
                                          "id": 3249,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "kind": "functionCall",
                                          "lValueRequested": false,
                                          "names": [],
                                          "nodeType": "FunctionCall",
                                          "src": "3756:59:15",
                                          "tryCall": false,
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                          }
                                        ],
                                        "id": 3244,
                                        "name": "keccak256",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": -8,
                                        "src": "3729:9:15",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                          "typeString": "function (bytes memory) pure returns (bytes32)"
                                        }
                                      },
                                      "id": 3250,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3729:104:15",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 3251,
                                      "name": "v",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 3212,
                                      "src": "3835:1:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 3252,
                                      "name": "r",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 3206,
                                      "src": "3838:1:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 3253,
                                      "name": "s",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 3209,
                                      "src": "3841:1:15",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      },
                                      {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      },
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      },
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    ],
                                    "id": 3243,
                                    "name": "ecrecover",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -6,
                                    "src": "3719:9:15",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_ecrecover_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$",
                                      "typeString": "function (bytes32,uint8,bytes32,bytes32) pure returns (address)"
                                    }
                                  },
                                  "id": 3254,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3719:124:15",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "3709:135:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "functionReturnParameters": 3204,
                              "id": 3256,
                              "nodeType": "Return",
                              "src": "3702:142:15"
                            }
                          ]
                        },
                        "id": 3258,
                        "nodeType": "IfStatement",
                        "src": "3568:287:15",
                        "trueBody": {
                          "id": 3241,
                          "nodeType": "Block",
                          "src": "3592:37:15",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "hexValue": "66616c7365",
                                "id": 3239,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3613:5:15",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "value": "false"
                              },
                              "functionReturnParameters": 3204,
                              "id": 3240,
                              "nodeType": "Return",
                              "src": "3606:12:15"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "documentation": null,
                  "id": 3260,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "signerIsWhitelisted",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 3201,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 3198,
                        "name": "_hash",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3260,
                        "src": "2701:13:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 3197,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "2701:7:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 3200,
                        "name": "_signature",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3260,
                        "src": "2716:23:15",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes"
                        },
                        "typeName": {
                          "id": 3199,
                          "name": "bytes",
                          "nodeType": "ElementaryTypeName",
                          "src": "2716:5:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_storage_ptr",
                            "typeString": "bytes"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2700:40:15"
                  },
                  "returnParameters": {
                    "id": 3204,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 3203,
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3260,
                        "src": "2764:4:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 3202,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "2764:4:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "2763:6:15"
                  },
                  "scope": 3298,
                  "src": "2672:1189:15",
                  "stateMutability": "view",
                  "virtual": false,
                  "visibility": "internal"
                },
                {
                  "body": {
                    "id": 3284,
                    "nodeType": "Block",
                    "src": "4068:114:15",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 3275,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 3271,
                              "name": "whitelist",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3040,
                              "src": "4078:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                              }
                            },
                            "id": 3273,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 3272,
                              "name": "_account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3262,
                              "src": "4088:8:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4078:19:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 3274,
                            "name": "_value",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3264,
                            "src": "4100:6:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "4078:28:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 3276,
                        "nodeType": "ExpressionStatement",
                        "src": "4078:28:15"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3278,
                              "name": "_account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3262,
                              "src": "4137:8:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 3279,
                              "name": "_value",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3264,
                              "src": "4147:6:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "id": 3277,
                            "name": "UpdateWhitelist",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3020,
                            "src": "4121:15:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_bool_$returns$__$",
                              "typeString": "function (address,bool)"
                            }
                          },
                          "id": 3280,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4121:33:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3281,
                        "nodeType": "EmitStatement",
                        "src": "4116:38:15"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "74727565",
                          "id": 3282,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4171:4:15",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "true"
                        },
                        "functionReturnParameters": 3270,
                        "id": 3283,
                        "nodeType": "Return",
                        "src": "4164:11:15"
                      }
                    ]
                  },
                  "documentation": null,
                  "functionSelector": "0d392cd9",
                  "id": 3285,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [
                    {
                      "arguments": null,
                      "id": 3267,
                      "modifierName": {
                        "argumentTypes": null,
                        "id": 3266,
                        "name": "onlyWhitelisted",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3297,
                        "src": "4030:15:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_modifier$__$",
                          "typeString": "modifier ()"
                        }
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "4030:15:15"
                    }
                  ],
                  "name": "updateWhitelist",
                  "nodeType": "FunctionDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 3265,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 3262,
                        "name": "_account",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3285,
                        "src": "3999:16:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 3261,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "3999:7:15",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 3264,
                        "name": "_value",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3285,
                        "src": "4017:11:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 3263,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "4017:4:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "3998:31:15"
                  },
                  "returnParameters": {
                    "id": 3270,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 3269,
                        "name": "",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 3285,
                        "src": "4062:4:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 3268,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "4062:4:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "src": "4061:6:15"
                  },
                  "scope": 3298,
                  "src": "3974:208:15",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 3296,
                    "nodeType": "Block",
                    "src": "4215:85:15",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 3288,
                                "name": "whitelist",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3040,
                                "src": "4233:9:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                  "typeString": "mapping(address => bool)"
                                }
                              },
                              "id": 3291,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 3289,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -15,
                                  "src": "4243:3:15",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 3290,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "4243:10:15",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "4233:21:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "hexValue": "4163636f756e74204e6f742057686974656c6973746564",
                              "id": 3292,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4256:25:15",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_a89e597819447b11f0480d3b6d9e4f3600f54d3c014040417c6c31ddc4786b69",
                                "typeString": "literal_string \"Account Not Whitelisted\""
                              },
                              "value": "Account Not Whitelisted"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_a89e597819447b11f0480d3b6d9e4f3600f54d3c014040417c6c31ddc4786b69",
                                "typeString": "literal_string \"Account Not Whitelisted\""
                              }
                            ],
                            "id": 3287,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "4225:7:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 3293,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4225:57:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3294,
                        "nodeType": "ExpressionStatement",
                        "src": "4225:57:15"
                      },
                      {
                        "id": 3295,
                        "nodeType": "PlaceholderStatement",
                        "src": "4292:1:15"
                      }
                    ]
                  },
                  "documentation": null,
                  "id": 3297,
                  "name": "onlyWhitelisted",
                  "nodeType": "ModifierDefinition",
                  "overrides": null,
                  "parameters": {
                    "id": 3286,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "4212:2:15"
                  },
                  "src": "4188:112:15",
                  "virtual": false,
                  "visibility": "internal"
                }
              ],
              "scope": 3299,
              "src": "86:4216:15"
            }
          ],
          "src": "32:4271:15"
        },
        "legacyAST": {
          "attributes": {
            "absolutePath": "project:/contracts/FakeMeebitsClaimer.sol",
            "exportedSymbols": {
              "FakeMeebitsClaimer": [
                3298
              ]
            }
          },
          "children": [
            {
              "attributes": {
                "literals": [
                  "solidity",
                  "^",
                  "0.6",
                  ".2"
                ]
              },
              "id": 3013,
              "name": "PragmaDirective",
              "src": "32:23:15"
            },
            {
              "attributes": {
                "SourceUnit": 3012,
                "absolutePath": "project:/contracts/FakeMeebits.sol",
                "file": "./FakeMeebits.sol",
                "scope": 3299,
                "symbolAliases": [
                  null
                ],
                "unitAlias": ""
              },
              "id": 3014,
              "name": "ImportDirective",
              "src": "57:27:15"
            },
            {
              "attributes": {
                "abstract": false,
                "baseContracts": [
                  null
                ],
                "contractDependencies": [
                  null
                ],
                "contractKind": "contract",
                "documentation": null,
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                  3298
                ],
                "name": "FakeMeebitsClaimer",
                "scope": 3299
              },
              "children": [
                {
                  "attributes": {
                    "anonymous": false,
                    "documentation": null,
                    "name": "UpdateWhitelist"
                  },
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "indexed": false,
                            "name": "_account",
                            "overrides": null,
                            "scope": 3020,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "address",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "address",
                                "stateMutability": "nonpayable",
                                "type": "address"
                              },
                              "id": 3015,
                              "name": "ElementaryTypeName",
                              "src": "142:7:15"
                            }
                          ],
                          "id": 3016,
                          "name": "VariableDeclaration",
                          "src": "142:16:15"
                        },
                        {
                          "attributes": {
                            "constant": false,
                            "indexed": false,
                            "name": "_value",
                            "overrides": null,
                            "scope": 3020,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "bool",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bool",
                                "type": "bool"
                              },
                              "id": 3017,
                              "name": "ElementaryTypeName",
                              "src": "160:4:15"
                            }
                          ],
                          "id": 3018,
                          "name": "VariableDeclaration",
                          "src": "160:11:15"
                        }
                      ],
                      "id": 3019,
                      "name": "ParameterList",
                      "src": "141:31:15"
                    }
                  ],
                  "id": 3020,
                  "name": "EventDefinition",
                  "src": "120:53:15"
                },
                {
                  "attributes": {
                    "anonymous": false,
                    "documentation": null,
                    "name": "aTokenWasClaimed"
                  },
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "indexed": false,
                            "name": "_tokenNumber",
                            "overrides": null,
                            "scope": 3026,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "uint256",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "uint",
                                "type": "uint256"
                              },
                              "id": 3021,
                              "name": "ElementaryTypeName",
                              "src": "201:4:15"
                            }
                          ],
                          "id": 3022,
                          "name": "VariableDeclaration",
                          "src": "201:17:15"
                        },
                        {
                          "attributes": {
                            "constant": false,
                            "indexed": false,
                            "name": "_tokenClaimer",
                            "overrides": null,
                            "scope": 3026,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "address",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "address",
                                "stateMutability": "nonpayable",
                                "type": "address"
                              },
                              "id": 3023,
                              "name": "ElementaryTypeName",
                              "src": "220:7:15"
                            }
                          ],
                          "id": 3024,
                          "name": "VariableDeclaration",
                          "src": "220:21:15"
                        }
                      ],
                      "id": 3025,
                      "name": "ParameterList",
                      "src": "200:42:15"
                    }
                  ],
                  "id": 3026,
                  "name": "EventDefinition",
                  "src": "178:65:15"
                },
                {
                  "attributes": {
                    "anonymous": false,
                    "documentation": null,
                    "name": "yeeeeeeaaaaaahThxCoeurCoeurCoeur"
                  },
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "indexed": false,
                            "name": "_tipper",
                            "overrides": null,
                            "scope": 3030,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "address",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "address",
                                "stateMutability": "nonpayable",
                                "type": "address"
                              },
                              "id": 3027,
                              "name": "ElementaryTypeName",
                              "src": "287:7:15"
                            }
                          ],
                          "id": 3028,
                          "name": "VariableDeclaration",
                          "src": "287:15:15"
                        }
                      ],
                      "id": 3029,
                      "name": "ParameterList",
                      "src": "286:17:15"
                    }
                  ],
                  "id": 3030,
                  "name": "EventDefinition",
                  "src": "248:56:15"
                },
                {
                  "attributes": {
                    "anonymous": false,
                    "documentation": null,
                    "name": "withdrawFunds"
                  },
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "indexed": false,
                            "name": "_withdrawer",
                            "overrides": null,
                            "scope": 3036,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "address",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "address",
                                "stateMutability": "nonpayable",
                                "type": "address"
                              },
                              "id": 3031,
                              "name": "ElementaryTypeName",
                              "src": "329:7:15"
                            }
                          ],
                          "id": 3032,
                          "name": "VariableDeclaration",
                          "src": "329:19:15"
                        },
                        {
                          "attributes": {
                            "constant": false,
                            "indexed": false,
                            "name": "_funds",
                            "overrides": null,
                            "scope": 3036,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "uint256",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "uint",
                                "type": "uint256"
                              },
                              "id": 3033,
                              "name": "ElementaryTypeName",
                              "src": "350:4:15"
                            }
                          ],
                          "id": 3034,
                          "name": "VariableDeclaration",
                          "src": "350:11:15"
                        }
                      ],
                      "id": 3035,
                      "name": "ParameterList",
                      "src": "328:34:15"
                    }
                  ],
                  "id": 3036,
                  "name": "EventDefinition",
                  "src": "309:54:15"
                },
                {
                  "attributes": {
                    "constant": false,
                    "functionSelector": "9b19251a",
                    "name": "whitelist",
                    "overrides": null,
                    "scope": 3298,
                    "stateVariable": true,
                    "storageLocation": "default",
                    "type": "mapping(address => bool)",
                    "value": null,
                    "visibility": "public"
                  },
                  "children": [
                    {
                      "attributes": {
                        "type": "mapping(address => bool)"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "address",
                            "type": "address"
                          },
                          "id": 3037,
                          "name": "ElementaryTypeName",
                          "src": "377:7:15"
                        },
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 3038,
                          "name": "ElementaryTypeName",
                          "src": "388:4:15"
                        }
                      ],
                      "id": 3039,
                      "name": "Mapping",
                      "src": "369:24:15"
                    }
                  ],
                  "id": 3040,
                  "name": "VariableDeclaration",
                  "src": "369:41:15"
                },
                {
                  "attributes": {
                    "constant": false,
                    "functionSelector": "4a80edcb",
                    "name": "tokensThatWereClaimed",
                    "overrides": null,
                    "scope": 3298,
                    "stateVariable": true,
                    "storageLocation": "default",
                    "type": "mapping(uint256 => bool)",
                    "value": null,
                    "visibility": "public"
                  },
                  "children": [
                    {
                      "attributes": {
                        "type": "mapping(uint256 => bool)"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint",
                            "type": "uint256"
                          },
                          "id": 3041,
                          "name": "ElementaryTypeName",
                          "src": "424:4:15"
                        },
                        {
                          "attributes": {
                            "name": "bool",
                            "type": "bool"
                          },
                          "id": 3042,
                          "name": "ElementaryTypeName",
                          "src": "432:4:15"
                        }
                      ],
                      "id": 3043,
                      "name": "Mapping",
                      "src": "416:21:15"
                    }
                  ],
                  "id": 3044,
                  "name": "VariableDeclaration",
                  "src": "416:50:15"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "maxTokenId",
                    "overrides": null,
                    "scope": 3298,
                    "stateVariable": true,
                    "storageLocation": "default",
                    "type": "uint256",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint",
                        "type": "uint256"
                      },
                      "id": 3045,
                      "name": "ElementaryTypeName",
                      "src": "473:4:15"
                    }
                  ],
                  "id": 3046,
                  "name": "VariableDeclaration",
                  "src": "473:15:15"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "totalFunds",
                    "overrides": null,
                    "scope": 3298,
                    "stateVariable": true,
                    "storageLocation": "default",
                    "type": "uint256",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "uint",
                        "type": "uint256"
                      },
                      "id": 3047,
                      "name": "ElementaryTypeName",
                      "src": "494:4:15"
                    }
                  ],
                  "id": 3048,
                  "name": "VariableDeclaration",
                  "src": "494:15:15"
                },
                {
                  "attributes": {
                    "constant": false,
                    "name": "ERC721address",
                    "overrides": null,
                    "scope": 3298,
                    "stateVariable": true,
                    "storageLocation": "default",
                    "type": "address",
                    "value": null,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "name": "address",
                        "stateMutability": "nonpayable",
                        "type": "address"
                      },
                      "id": 3049,
                      "name": "ElementaryTypeName",
                      "src": "515:7:15"
                    }
                  ],
                  "id": 3050,
                  "name": "VariableDeclaration",
                  "src": "515:21:15"
                },
                {
                  "attributes": {
                    "documentation": null,
                    "implemented": true,
                    "isConstructor": true,
                    "kind": "constructor",
                    "modifiers": [
                      null
                    ],
                    "name": "",
                    "overrides": null,
                    "scope": 3298,
                    "stateMutability": "nonpayable",
                    "virtual": false,
                    "visibility": "public"
                  },
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "_maxTokenId",
                            "overrides": null,
                            "scope": 3073,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "uint256",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "uint",
                                "type": "uint256"
                              },
                              "id": 3051,
                              "name": "ElementaryTypeName",
                              "src": "555:4:15"
                            }
                          ],
                          "id": 3052,
                          "name": "VariableDeclaration",
                          "src": "555:16:15"
                        },
                        {
                          "attributes": {
                            "constant": false,
                            "name": "_ERC721address",
                            "overrides": null,
                            "scope": 3073,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "address",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "address",
                                "stateMutability": "nonpayable",
                                "type": "address"
                              },
                              "id": 3053,
                              "name": "ElementaryTypeName",
                              "src": "573:7:15"
                            }
                          ],
                          "id": 3054,
                          "name": "VariableDeclaration",
                          "src": "573:22:15"
                        }
                      ],
                      "id": 3055,
                      "name": "ParameterList",
                      "src": "554:42:15"
                    },
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 3056,
                      "name": "ParameterList",
                      "src": "604:0:15"
                    },
                    {
                      "children": [
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "=",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3040,
                                        "type": "mapping(address => bool)",
                                        "value": "whitelist"
                                      },
                                      "id": 3057,
                                      "name": "Identifier",
                                      "src": "614:9:15"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "sender",
                                        "referencedDeclaration": null,
                                        "type": "address payable"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": -15,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 3058,
                                          "name": "Identifier",
                                          "src": "624:3:15"
                                        }
                                      ],
                                      "id": 3059,
                                      "name": "MemberAccess",
                                      "src": "624:10:15"
                                    }
                                  ],
                                  "id": 3060,
                                  "name": "IndexAccess",
                                  "src": "614:21:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "74727565",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "bool",
                                    "type": "bool",
                                    "value": "true"
                                  },
                                  "id": 3061,
                                  "name": "Literal",
                                  "src": "638:4:15"
                                }
                              ],
                              "id": 3062,
                              "name": "Assignment",
                              "src": "614:28:15"
                            }
                          ],
                          "id": 3063,
                          "name": "ExpressionStatement",
                          "src": "614:28:15"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "=",
                                "type": "uint256"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3046,
                                    "type": "uint256",
                                    "value": "maxTokenId"
                                  },
                                  "id": 3064,
                                  "name": "Identifier",
                                  "src": "652:10:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3052,
                                    "type": "uint256",
                                    "value": "_maxTokenId"
                                  },
                                  "id": 3065,
                                  "name": "Identifier",
                                  "src": "665:11:15"
                                }
                              ],
                              "id": 3066,
                              "name": "Assignment",
                              "src": "652:24:15"
                            }
                          ],
                          "id": 3067,
                          "name": "ExpressionStatement",
                          "src": "652:24:15"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "=",
                                "type": "address"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3050,
                                    "type": "address",
                                    "value": "ERC721address"
                                  },
                                  "id": 3068,
                                  "name": "Identifier",
                                  "src": "686:13:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3054,
                                    "type": "address",
                                    "value": "_ERC721address"
                                  },
                                  "id": 3069,
                                  "name": "Identifier",
                                  "src": "702:14:15"
                                }
                              ],
                              "id": 3070,
                              "name": "Assignment",
                              "src": "686:30:15"
                            }
                          ],
                          "id": 3071,
                          "name": "ExpressionStatement",
                          "src": "686:30:15"
                        }
                      ],
                      "id": 3072,
                      "name": "Block",
                      "src": "604:119:15"
                    }
                  ],
                  "id": 3073,
                  "name": "FunctionDefinition",
                  "src": "543:180:15"
                },
                {
                  "attributes": {
                    "documentation": null,
                    "implemented": true,
                    "isConstructor": false,
                    "kind": "fallback",
                    "modifiers": [
                      null
                    ],
                    "name": "",
                    "overrides": null,
                    "scope": 3298,
                    "stateMutability": "payable",
                    "virtual": false,
                    "visibility": "external"
                  },
                  "children": [
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 3074,
                      "name": "ParameterList",
                      "src": "738:2:15"
                    },
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 3075,
                      "name": "ParameterList",
                      "src": "758:0:15"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "falseBody": null
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": ">",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "value",
                                    "referencedDeclaration": null,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": -15,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 3076,
                                      "name": "Identifier",
                                      "src": "772:3:15"
                                    }
                                  ],
                                  "id": 3077,
                                  "name": "MemberAccess",
                                  "src": "772:9:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "30",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "number",
                                    "type": "int_const 0",
                                    "value": "0"
                                  },
                                  "id": 3078,
                                  "name": "Literal",
                                  "src": "784:1:15"
                                }
                              ],
                              "id": 3079,
                              "name": "BinaryOperation",
                              "src": "772:13:15"
                            },
                            {
                              "children": [
                                {
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "operator": "+=",
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 3048,
                                            "type": "uint256",
                                            "value": "totalFunds"
                                          },
                                          "id": 3080,
                                          "name": "Identifier",
                                          "src": "801:10:15"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "member_name": "value",
                                            "referencedDeclaration": null,
                                            "type": "uint256"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": -15,
                                                "type": "msg",
                                                "value": "msg"
                                              },
                                              "id": 3081,
                                              "name": "Identifier",
                                              "src": "815:3:15"
                                            }
                                          ],
                                          "id": 3082,
                                          "name": "MemberAccess",
                                          "src": "815:9:15"
                                        }
                                      ],
                                      "id": 3083,
                                      "name": "Assignment",
                                      "src": "801:23:15"
                                    }
                                  ],
                                  "id": 3084,
                                  "name": "ExpressionStatement",
                                  "src": "801:23:15"
                                },
                                {
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "isStructConstructorCall": false,
                                        "lValueRequested": false,
                                        "names": [
                                          null
                                        ],
                                        "tryCall": false,
                                        "type": "tuple()",
                                        "type_conversion": false
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_address_payable",
                                                "typeString": "address payable"
                                              }
                                            ],
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 3030,
                                            "type": "function (address)",
                                            "value": "yeeeeeeaaaaaahThxCoeurCoeurCoeur"
                                          },
                                          "id": 3085,
                                          "name": "Identifier",
                                          "src": "843:32:15"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "member_name": "sender",
                                            "referencedDeclaration": null,
                                            "type": "address payable"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": -15,
                                                "type": "msg",
                                                "value": "msg"
                                              },
                                              "id": 3086,
                                              "name": "Identifier",
                                              "src": "876:3:15"
                                            }
                                          ],
                                          "id": 3087,
                                          "name": "MemberAccess",
                                          "src": "876:10:15"
                                        }
                                      ],
                                      "id": 3088,
                                      "name": "FunctionCall",
                                      "src": "843:44:15"
                                    }
                                  ],
                                  "id": 3089,
                                  "name": "EmitStatement",
                                  "src": "838:49:15"
                                }
                              ],
                              "id": 3090,
                              "name": "Block",
                              "src": "787:111:15"
                            }
                          ],
                          "id": 3091,
                          "name": "IfStatement",
                          "src": "768:130:15"
                        }
                      ],
                      "id": 3092,
                      "name": "Block",
                      "src": "758:146:15"
                    }
                  ],
                  "id": 3093,
                  "name": "FunctionDefinition",
                  "src": "729:175:15"
                },
                {
                  "attributes": {
                    "documentation": null,
                    "functionSelector": "255dee64",
                    "implemented": true,
                    "isConstructor": false,
                    "kind": "function",
                    "modifiers": [
                      null
                    ],
                    "name": "claimAToken",
                    "overrides": null,
                    "scope": 3298,
                    "stateMutability": "payable",
                    "virtual": false,
                    "visibility": "public"
                  },
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "_tokenToClaim",
                            "overrides": null,
                            "scope": 3176,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "uint256",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "uint",
                                "type": "uint256"
                              },
                              "id": 3094,
                              "name": "ElementaryTypeName",
                              "src": "931:4:15"
                            }
                          ],
                          "id": 3095,
                          "name": "VariableDeclaration",
                          "src": "931:18:15"
                        },
                        {
                          "attributes": {
                            "constant": false,
                            "name": "_signature",
                            "overrides": null,
                            "scope": 3176,
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "type": "bytes",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bytes",
                                "type": "bytes"
                              },
                              "id": 3096,
                              "name": "ElementaryTypeName",
                              "src": "951:5:15"
                            }
                          ],
                          "id": 3097,
                          "name": "VariableDeclaration",
                          "src": "951:23:15"
                        }
                      ],
                      "id": 3098,
                      "name": "ParameterList",
                      "src": "930:45:15"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "",
                            "overrides": null,
                            "scope": 3176,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "bool",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bool",
                                "type": "bool"
                              },
                              "id": 3099,
                              "name": "ElementaryTypeName",
                              "src": "1014:4:15"
                            }
                          ],
                          "id": 3100,
                          "name": "VariableDeclaration",
                          "src": "1014:4:15"
                        }
                      ],
                      "id": 3101,
                      "name": "ParameterList",
                      "src": "1013:6:15"
                    },
                    {
                      "children": [
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      },
                                      {
                                        "typeIdentifier": "t_stringliteral_337c2282379537db254a77fd23f2e4c119b7ca868bb9c6d72297f9e0d0d8035b",
                                        "typeString": "literal_string \"Claim: token already claimed\""
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      -18,
                                      -18
                                    ],
                                    "referencedDeclaration": -18,
                                    "type": "function (bool,string memory) pure",
                                    "value": "require"
                                  },
                                  "id": 3102,
                                  "name": "Identifier",
                                  "src": "1093:7:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "!",
                                    "prefix": true,
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "type": "bool"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 3044,
                                            "type": "mapping(uint256 => bool)",
                                            "value": "tokensThatWereClaimed"
                                          },
                                          "id": 3103,
                                          "name": "Identifier",
                                          "src": "1102:21:15"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 3095,
                                            "type": "uint256",
                                            "value": "_tokenToClaim"
                                          },
                                          "id": 3104,
                                          "name": "Identifier",
                                          "src": "1124:13:15"
                                        }
                                      ],
                                      "id": 3105,
                                      "name": "IndexAccess",
                                      "src": "1102:36:15"
                                    }
                                  ],
                                  "id": 3106,
                                  "name": "UnaryOperation",
                                  "src": "1101:37:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "436c61696d3a20746f6b656e20616c726561647920636c61696d6564",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "string",
                                    "type": "literal_string \"Claim: token already claimed\"",
                                    "value": "Claim: token already claimed"
                                  },
                                  "id": 3107,
                                  "name": "Literal",
                                  "src": "1140:30:15"
                                }
                              ],
                              "id": 3108,
                              "name": "FunctionCall",
                              "src": "1093:78:15"
                            }
                          ],
                          "id": 3109,
                          "name": "ExpressionStatement",
                          "src": "1093:78:15"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      },
                                      {
                                        "typeIdentifier": "t_stringliteral_d06de1650893762b6903ecd0d1ec58e2cf2461121fb3af5cef9fa2626f28e30a",
                                        "typeString": "literal_string \"Claim: tokenId outbounds\""
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      -18,
                                      -18
                                    ],
                                    "referencedDeclaration": -18,
                                    "type": "function (bool,string memory) pure",
                                    "value": "require"
                                  },
                                  "id": 3110,
                                  "name": "Identifier",
                                  "src": "1228:7:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "<=",
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3095,
                                        "type": "uint256",
                                        "value": "_tokenToClaim"
                                      },
                                      "id": 3111,
                                      "name": "Identifier",
                                      "src": "1236:13:15"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3046,
                                        "type": "uint256",
                                        "value": "maxTokenId"
                                      },
                                      "id": 3112,
                                      "name": "Identifier",
                                      "src": "1253:10:15"
                                    }
                                  ],
                                  "id": 3113,
                                  "name": "BinaryOperation",
                                  "src": "1236:27:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "436c61696d3a20746f6b656e4964206f7574626f756e6473",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "string",
                                    "type": "literal_string \"Claim: tokenId outbounds\"",
                                    "value": "Claim: tokenId outbounds"
                                  },
                                  "id": 3114,
                                  "name": "Literal",
                                  "src": "1265:26:15"
                                }
                              ],
                              "id": 3115,
                              "name": "FunctionCall",
                              "src": "1228:64:15"
                            }
                          ],
                          "id": 3116,
                          "name": "ExpressionStatement",
                          "src": "1228:64:15"
                        },
                        {
                          "attributes": {
                            "assignments": [
                              3118
                            ]
                          },
                          "children": [
                            {
                              "attributes": {
                                "constant": false,
                                "name": "_hash",
                                "overrides": null,
                                "scope": 3175,
                                "stateVariable": false,
                                "storageLocation": "default",
                                "type": "bytes32",
                                "value": null,
                                "visibility": "internal"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "name": "bytes32",
                                    "type": "bytes32"
                                  },
                                  "id": 3117,
                                  "name": "ElementaryTypeName",
                                  "src": "1382:7:15"
                                }
                              ],
                              "id": 3118,
                              "name": "VariableDeclaration",
                              "src": "1382:13:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "bytes32",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": -8,
                                    "type": "function (bytes memory) pure returns (bytes32)",
                                    "value": "keccak256"
                                  },
                                  "id": 3119,
                                  "name": "Identifier",
                                  "src": "1398:9:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "isStructConstructorCall": false,
                                    "lValueRequested": false,
                                    "names": [
                                      null
                                    ],
                                    "tryCall": false,
                                    "type": "bytes memory",
                                    "type_conversion": false
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          },
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        ],
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "member_name": "encode",
                                        "referencedDeclaration": null,
                                        "type": "function () pure returns (bytes memory)"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": -1,
                                            "type": "abi",
                                            "value": "abi"
                                          },
                                          "id": 3120,
                                          "name": "Identifier",
                                          "src": "1408:3:15"
                                        }
                                      ],
                                      "id": 3121,
                                      "name": "MemberAccess",
                                      "src": "1408:10:15"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3050,
                                        "type": "address",
                                        "value": "ERC721address"
                                      },
                                      "id": 3122,
                                      "name": "Identifier",
                                      "src": "1419:13:15"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3095,
                                        "type": "uint256",
                                        "value": "_tokenToClaim"
                                      },
                                      "id": 3123,
                                      "name": "Identifier",
                                      "src": "1434:13:15"
                                    }
                                  ],
                                  "id": 3124,
                                  "name": "FunctionCall",
                                  "src": "1408:40:15"
                                }
                              ],
                              "id": 3125,
                              "name": "FunctionCall",
                              "src": "1398:51:15"
                            }
                          ],
                          "id": 3126,
                          "name": "VariableDeclarationStatement",
                          "src": "1382:67:15"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      },
                                      {
                                        "typeIdentifier": "t_stringliteral_38d22e001cfc2cf75ca4365ae5c400259c4c5a5e496de5ca478129028519683f",
                                        "typeString": "literal_string \"Claim: signer not whitelisted\""
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      -18,
                                      -18
                                    ],
                                    "referencedDeclaration": -18,
                                    "type": "function (bool,string memory) pure",
                                    "value": "require"
                                  },
                                  "id": 3127,
                                  "name": "Identifier",
                                  "src": "1519:7:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "isStructConstructorCall": false,
                                    "lValueRequested": false,
                                    "names": [
                                      null
                                    ],
                                    "tryCall": false,
                                    "type": "bool",
                                    "type_conversion": false
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          },
                                          {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                          }
                                        ],
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3260,
                                        "type": "function (bytes32,bytes memory) view returns (bool)",
                                        "value": "signerIsWhitelisted"
                                      },
                                      "id": 3128,
                                      "name": "Identifier",
                                      "src": "1527:19:15"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3118,
                                        "type": "bytes32",
                                        "value": "_hash"
                                      },
                                      "id": 3129,
                                      "name": "Identifier",
                                      "src": "1547:5:15"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3097,
                                        "type": "bytes memory",
                                        "value": "_signature"
                                      },
                                      "id": 3130,
                                      "name": "Identifier",
                                      "src": "1554:10:15"
                                    }
                                  ],
                                  "id": 3131,
                                  "name": "FunctionCall",
                                  "src": "1527:38:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "436c61696d3a207369676e6572206e6f742077686974656c6973746564",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "string",
                                    "type": "literal_string \"Claim: signer not whitelisted\"",
                                    "value": "Claim: signer not whitelisted"
                                  },
                                  "id": 3132,
                                  "name": "Literal",
                                  "src": "1567:31:15"
                                }
                              ],
                              "id": 3133,
                              "name": "FunctionCall",
                              "src": "1519:80:15"
                            }
                          ],
                          "id": 3134,
                          "name": "ExpressionStatement",
                          "src": "1519:80:15"
                        },
                        {
                          "attributes": {
                            "assignments": [
                              3136
                            ]
                          },
                          "children": [
                            {
                              "attributes": {
                                "constant": false,
                                "name": "targetERC721Contract",
                                "overrides": null,
                                "scope": 3175,
                                "stateVariable": false,
                                "storageLocation": "default",
                                "type": "contract FakeMeebits",
                                "value": null,
                                "visibility": "internal"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "contractScope": null,
                                    "name": "FakeMeebits",
                                    "referencedDeclaration": 3011,
                                    "type": "contract FakeMeebits"
                                  },
                                  "id": 3135,
                                  "name": "UserDefinedTypeName",
                                  "src": "1664:11:15"
                                }
                              ],
                              "id": 3136,
                              "name": "VariableDeclaration",
                              "src": "1664:32:15"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "contract FakeMeebits",
                                "type_conversion": true
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3011,
                                    "type": "type(contract FakeMeebits)",
                                    "value": "FakeMeebits"
                                  },
                                  "id": 3137,
                                  "name": "Identifier",
                                  "src": "1699:11:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3050,
                                    "type": "address",
                                    "value": "ERC721address"
                                  },
                                  "id": 3138,
                                  "name": "Identifier",
                                  "src": "1711:13:15"
                                }
                              ],
                              "id": 3139,
                              "name": "FunctionCall",
                              "src": "1699:26:15"
                            }
                          ],
                          "id": 3140,
                          "name": "VariableDeclarationStatement",
                          "src": "1664:61:15"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "mintAToken",
                                    "referencedDeclaration": 2982,
                                    "type": "function (uint256) external"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3136,
                                        "type": "contract FakeMeebits",
                                        "value": "targetERC721Contract"
                                      },
                                      "id": 3141,
                                      "name": "Identifier",
                                      "src": "1735:20:15"
                                    }
                                  ],
                                  "id": 3143,
                                  "name": "MemberAccess",
                                  "src": "1735:31:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3095,
                                    "type": "uint256",
                                    "value": "_tokenToClaim"
                                  },
                                  "id": 3144,
                                  "name": "Identifier",
                                  "src": "1767:13:15"
                                }
                              ],
                              "id": 3145,
                              "name": "FunctionCall",
                              "src": "1735:46:15"
                            }
                          ],
                          "id": 3146,
                          "name": "ExpressionStatement",
                          "src": "1735:46:15"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "=",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3044,
                                        "type": "mapping(uint256 => bool)",
                                        "value": "tokensThatWereClaimed"
                                      },
                                      "id": 3147,
                                      "name": "Identifier",
                                      "src": "1907:21:15"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3095,
                                        "type": "uint256",
                                        "value": "_tokenToClaim"
                                      },
                                      "id": 3148,
                                      "name": "Identifier",
                                      "src": "1929:13:15"
                                    }
                                  ],
                                  "id": 3149,
                                  "name": "IndexAccess",
                                  "src": "1907:36:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "74727565",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "bool",
                                    "type": "bool",
                                    "value": "true"
                                  },
                                  "id": 3150,
                                  "name": "Literal",
                                  "src": "1946:4:15"
                                }
                              ],
                              "id": 3151,
                              "name": "Assignment",
                              "src": "1907:43:15"
                            }
                          ],
                          "id": 3152,
                          "name": "ExpressionStatement",
                          "src": "1907:43:15"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      {
                                        "typeIdentifier": "t_address_payable",
                                        "typeString": "address payable"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3026,
                                    "type": "function (uint256,address)",
                                    "value": "aTokenWasClaimed"
                                  },
                                  "id": 3153,
                                  "name": "Identifier",
                                  "src": "1994:16:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3095,
                                    "type": "uint256",
                                    "value": "_tokenToClaim"
                                  },
                                  "id": 3154,
                                  "name": "Identifier",
                                  "src": "2011:13:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender",
                                    "referencedDeclaration": null,
                                    "type": "address payable"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": -15,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 3155,
                                      "name": "Identifier",
                                      "src": "2026:3:15"
                                    }
                                  ],
                                  "id": 3156,
                                  "name": "MemberAccess",
                                  "src": "2026:10:15"
                                }
                              ],
                              "id": 3157,
                              "name": "FunctionCall",
                              "src": "1994:43:15"
                            }
                          ],
                          "id": 3158,
                          "name": "EmitStatement",
                          "src": "1989:48:15"
                        },
                        {
                          "attributes": {
                            "falseBody": null
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": ">",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "value",
                                    "referencedDeclaration": null,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": -15,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 3159,
                                      "name": "Identifier",
                                      "src": "2103:3:15"
                                    }
                                  ],
                                  "id": 3160,
                                  "name": "MemberAccess",
                                  "src": "2103:9:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "30",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "number",
                                    "type": "int_const 0",
                                    "value": "0"
                                  },
                                  "id": 3161,
                                  "name": "Literal",
                                  "src": "2115:1:15"
                                }
                              ],
                              "id": 3162,
                              "name": "BinaryOperation",
                              "src": "2103:13:15"
                            },
                            {
                              "children": [
                                {
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "isStructConstructorCall": false,
                                        "lValueRequested": false,
                                        "names": [
                                          null
                                        ],
                                        "tryCall": false,
                                        "type": "tuple()",
                                        "type_conversion": false
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": [
                                              {
                                                "typeIdentifier": "t_address_payable",
                                                "typeString": "address payable"
                                              }
                                            ],
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 3030,
                                            "type": "function (address)",
                                            "value": "yeeeeeeaaaaaahThxCoeurCoeurCoeur"
                                          },
                                          "id": 3163,
                                          "name": "Identifier",
                                          "src": "2137:32:15"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "member_name": "sender",
                                            "referencedDeclaration": null,
                                            "type": "address payable"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": -15,
                                                "type": "msg",
                                                "value": "msg"
                                              },
                                              "id": 3164,
                                              "name": "Identifier",
                                              "src": "2170:3:15"
                                            }
                                          ],
                                          "id": 3165,
                                          "name": "MemberAccess",
                                          "src": "2170:10:15"
                                        }
                                      ],
                                      "id": 3166,
                                      "name": "FunctionCall",
                                      "src": "2137:44:15"
                                    }
                                  ],
                                  "id": 3167,
                                  "name": "EmitStatement",
                                  "src": "2132:49:15"
                                },
                                {
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "operator": "+=",
                                        "type": "uint256"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 3048,
                                            "type": "uint256",
                                            "value": "totalFunds"
                                          },
                                          "id": 3168,
                                          "name": "Identifier",
                                          "src": "2195:10:15"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "member_name": "value",
                                            "referencedDeclaration": null,
                                            "type": "uint256"
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": -15,
                                                "type": "msg",
                                                "value": "msg"
                                              },
                                              "id": 3169,
                                              "name": "Identifier",
                                              "src": "2209:3:15"
                                            }
                                          ],
                                          "id": 3170,
                                          "name": "MemberAccess",
                                          "src": "2209:9:15"
                                        }
                                      ],
                                      "id": 3171,
                                      "name": "Assignment",
                                      "src": "2195:23:15"
                                    }
                                  ],
                                  "id": 3172,
                                  "name": "ExpressionStatement",
                                  "src": "2195:23:15"
                                }
                              ],
                              "id": 3173,
                              "name": "Block",
                              "src": "2118:111:15"
                            }
                          ],
                          "id": 3174,
                          "name": "IfStatement",
                          "src": "2099:130:15"
                        }
                      ],
                      "id": 3175,
                      "name": "Block",
                      "src": "1024:1211:15"
                    }
                  ],
                  "id": 3176,
                  "name": "FunctionDefinition",
                  "src": "910:1325:15"
                },
                {
                  "attributes": {
                    "documentation": null,
                    "functionSelector": "3aaa74b2",
                    "implemented": true,
                    "isConstructor": false,
                    "kind": "function",
                    "name": "withdrawTips",
                    "overrides": null,
                    "scope": 3298,
                    "stateMutability": "nonpayable",
                    "virtual": false,
                    "visibility": "public"
                  },
                  "children": [
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 3177,
                      "name": "ParameterList",
                      "src": "2262:2:15"
                    },
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 3180,
                      "name": "ParameterList",
                      "src": "2288:0:15"
                    },
                    {
                      "attributes": {
                        "arguments": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "overloadedDeclarations": [
                              null
                            ],
                            "referencedDeclaration": 3297,
                            "type": "modifier ()",
                            "value": "onlyWhitelisted"
                          },
                          "id": 3178,
                          "name": "Identifier",
                          "src": "2272:15:15"
                        }
                      ],
                      "id": 3179,
                      "name": "ModifierInvocation",
                      "src": "2272:15:15"
                    },
                    {
                      "children": [
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "transfer",
                                    "referencedDeclaration": null,
                                    "type": "function (uint256)"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "sender",
                                        "referencedDeclaration": null,
                                        "type": "address payable"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": -15,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 3181,
                                          "name": "Identifier",
                                          "src": "2298:3:15"
                                        }
                                      ],
                                      "id": 3184,
                                      "name": "MemberAccess",
                                      "src": "2298:10:15"
                                    }
                                  ],
                                  "id": 3185,
                                  "name": "MemberAccess",
                                  "src": "2298:19:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3048,
                                    "type": "uint256",
                                    "value": "totalFunds"
                                  },
                                  "id": 3186,
                                  "name": "Identifier",
                                  "src": "2318:10:15"
                                }
                              ],
                              "id": 3187,
                              "name": "FunctionCall",
                              "src": "2298:31:15"
                            }
                          ],
                          "id": 3188,
                          "name": "ExpressionStatement",
                          "src": "2298:31:15"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_address_payable",
                                        "typeString": "address payable"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3036,
                                    "type": "function (address,uint256)",
                                    "value": "withdrawFunds"
                                  },
                                  "id": 3189,
                                  "name": "Identifier",
                                  "src": "2344:13:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "sender",
                                    "referencedDeclaration": null,
                                    "type": "address payable"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": -15,
                                        "type": "msg",
                                        "value": "msg"
                                      },
                                      "id": 3190,
                                      "name": "Identifier",
                                      "src": "2358:3:15"
                                    }
                                  ],
                                  "id": 3191,
                                  "name": "MemberAccess",
                                  "src": "2358:10:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3048,
                                    "type": "uint256",
                                    "value": "totalFunds"
                                  },
                                  "id": 3192,
                                  "name": "Identifier",
                                  "src": "2370:10:15"
                                }
                              ],
                              "id": 3193,
                              "name": "FunctionCall",
                              "src": "2344:38:15"
                            }
                          ],
                          "id": 3194,
                          "name": "EmitStatement",
                          "src": "2339:43:15"
                        }
                      ],
                      "id": 3195,
                      "name": "Block",
                      "src": "2288:101:15"
                    }
                  ],
                  "id": 3196,
                  "name": "FunctionDefinition",
                  "src": "2241:148:15"
                },
                {
                  "attributes": {
                    "documentation": null,
                    "implemented": true,
                    "isConstructor": false,
                    "kind": "function",
                    "modifiers": [
                      null
                    ],
                    "name": "signerIsWhitelisted",
                    "overrides": null,
                    "scope": 3298,
                    "stateMutability": "view",
                    "virtual": false,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "_hash",
                            "overrides": null,
                            "scope": 3260,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "bytes32",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bytes32",
                                "type": "bytes32"
                              },
                              "id": 3197,
                              "name": "ElementaryTypeName",
                              "src": "2701:7:15"
                            }
                          ],
                          "id": 3198,
                          "name": "VariableDeclaration",
                          "src": "2701:13:15"
                        },
                        {
                          "attributes": {
                            "constant": false,
                            "name": "_signature",
                            "overrides": null,
                            "scope": 3260,
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "type": "bytes",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bytes",
                                "type": "bytes"
                              },
                              "id": 3199,
                              "name": "ElementaryTypeName",
                              "src": "2716:5:15"
                            }
                          ],
                          "id": 3200,
                          "name": "VariableDeclaration",
                          "src": "2716:23:15"
                        }
                      ],
                      "id": 3201,
                      "name": "ParameterList",
                      "src": "2700:40:15"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "",
                            "overrides": null,
                            "scope": 3260,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "bool",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bool",
                                "type": "bool"
                              },
                              "id": 3202,
                              "name": "ElementaryTypeName",
                              "src": "2764:4:15"
                            }
                          ],
                          "id": 3203,
                          "name": "VariableDeclaration",
                          "src": "2764:4:15"
                        }
                      ],
                      "id": 3204,
                      "name": "ParameterList",
                      "src": "2763:6:15"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "assignments": [
                              3206
                            ],
                            "initialValue": null
                          },
                          "children": [
                            {
                              "attributes": {
                                "constant": false,
                                "name": "r",
                                "overrides": null,
                                "scope": 3259,
                                "stateVariable": false,
                                "storageLocation": "default",
                                "type": "bytes32",
                                "value": null,
                                "visibility": "internal"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "name": "bytes32",
                                    "type": "bytes32"
                                  },
                                  "id": 3205,
                                  "name": "ElementaryTypeName",
                                  "src": "2780:7:15"
                                }
                              ],
                              "id": 3206,
                              "name": "VariableDeclaration",
                              "src": "2780:9:15"
                            }
                          ],
                          "id": 3207,
                          "name": "VariableDeclarationStatement",
                          "src": "2780:9:15"
                        },
                        {
                          "attributes": {
                            "assignments": [
                              3209
                            ],
                            "initialValue": null
                          },
                          "children": [
                            {
                              "attributes": {
                                "constant": false,
                                "name": "s",
                                "overrides": null,
                                "scope": 3259,
                                "stateVariable": false,
                                "storageLocation": "default",
                                "type": "bytes32",
                                "value": null,
                                "visibility": "internal"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "name": "bytes32",
                                    "type": "bytes32"
                                  },
                                  "id": 3208,
                                  "name": "ElementaryTypeName",
                                  "src": "2799:7:15"
                                }
                              ],
                              "id": 3209,
                              "name": "VariableDeclaration",
                              "src": "2799:9:15"
                            }
                          ],
                          "id": 3210,
                          "name": "VariableDeclarationStatement",
                          "src": "2799:9:15"
                        },
                        {
                          "attributes": {
                            "assignments": [
                              3212
                            ],
                            "initialValue": null
                          },
                          "children": [
                            {
                              "attributes": {
                                "constant": false,
                                "name": "v",
                                "overrides": null,
                                "scope": 3259,
                                "stateVariable": false,
                                "storageLocation": "default",
                                "type": "uint8",
                                "value": null,
                                "visibility": "internal"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "name": "uint8",
                                    "type": "uint8"
                                  },
                                  "id": 3211,
                                  "name": "ElementaryTypeName",
                                  "src": "2818:5:15"
                                }
                              ],
                              "id": 3212,
                              "name": "VariableDeclaration",
                              "src": "2818:7:15"
                            }
                          ],
                          "id": 3213,
                          "name": "VariableDeclarationStatement",
                          "src": "2818:7:15"
                        },
                        {
                          "attributes": {
                            "falseBody": null
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "!=",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "member_name": "length",
                                    "referencedDeclaration": null,
                                    "type": "uint256"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3200,
                                        "type": "bytes memory",
                                        "value": "_signature"
                                      },
                                      "id": 3214,
                                      "name": "Identifier",
                                      "src": "2877:10:15"
                                    }
                                  ],
                                  "id": 3215,
                                  "name": "MemberAccess",
                                  "src": "2877:17:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "3635",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "number",
                                    "type": "int_const 65",
                                    "value": "65"
                                  },
                                  "id": 3216,
                                  "name": "Literal",
                                  "src": "2898:2:15"
                                }
                              ],
                              "id": 3217,
                              "name": "BinaryOperation",
                              "src": "2877:23:15"
                            },
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "functionReturnParameters": 3204
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "hexvalue": "66616c7365",
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "subdenomination": null,
                                        "token": "bool",
                                        "type": "bool",
                                        "value": "false"
                                      },
                                      "id": 3218,
                                      "name": "Literal",
                                      "src": "2923:5:15"
                                    }
                                  ],
                                  "id": 3219,
                                  "name": "Return",
                                  "src": "2916:12:15"
                                }
                              ],
                              "id": 3220,
                              "name": "Block",
                              "src": "2902:37:15"
                            }
                          ],
                          "id": 3221,
                          "name": "IfStatement",
                          "src": "2873:66:15"
                        },
                        {
                          "attributes": {
                            "evmVersion": "istanbul",
                            "externalReferences": [
                              {
                                "declaration": 3200,
                                "isOffset": false,
                                "isSlot": false,
                                "src": "3229:10:15",
                                "valueSize": 1
                              },
                              {
                                "declaration": 3200,
                                "isOffset": false,
                                "isSlot": false,
                                "src": "3273:10:15",
                                "valueSize": 1
                              },
                              {
                                "declaration": 3200,
                                "isOffset": false,
                                "isSlot": false,
                                "src": "3325:10:15",
                                "valueSize": 1
                              },
                              {
                                "declaration": 3206,
                                "isOffset": false,
                                "isSlot": false,
                                "src": "3214:1:15",
                                "valueSize": 1
                              },
                              {
                                "declaration": 3209,
                                "isOffset": false,
                                "isSlot": false,
                                "src": "3258:1:15",
                                "valueSize": 1
                              },
                              {
                                "declaration": 3212,
                                "isOffset": false,
                                "isSlot": false,
                                "src": "3302:1:15",
                                "valueSize": 1
                              }
                            ],
                            "operations": "{\n    r := mload(add(_signature, 32))\n    s := mload(add(_signature, 64))\n    v := byte(0, mload(add(_signature, 96)))\n}"
                          },
                          "children": [],
                          "id": 3222,
                          "name": "InlineAssembly",
                          "src": "3191:161:15"
                        },
                        {
                          "attributes": {
                            "falseBody": null
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "<",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3212,
                                    "type": "uint8",
                                    "value": "v"
                                  },
                                  "id": 3223,
                                  "name": "Identifier",
                                  "src": "3456:1:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "3237",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "number",
                                    "type": "int_const 27",
                                    "value": "27"
                                  },
                                  "id": 3224,
                                  "name": "Literal",
                                  "src": "3460:2:15"
                                }
                              ],
                              "id": 3225,
                              "name": "BinaryOperation",
                              "src": "3456:6:15"
                            },
                            {
                              "children": [
                                {
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "operator": "+=",
                                        "type": "uint8"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 3212,
                                            "type": "uint8",
                                            "value": "v"
                                          },
                                          "id": 3226,
                                          "name": "Identifier",
                                          "src": "3478:1:15"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "hexvalue": "3237",
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "subdenomination": null,
                                            "token": "number",
                                            "type": "int_const 27",
                                            "value": "27"
                                          },
                                          "id": 3227,
                                          "name": "Literal",
                                          "src": "3483:2:15"
                                        }
                                      ],
                                      "id": 3228,
                                      "name": "Assignment",
                                      "src": "3478:7:15"
                                    }
                                  ],
                                  "id": 3229,
                                  "name": "ExpressionStatement",
                                  "src": "3478:7:15"
                                }
                              ],
                              "id": 3230,
                              "name": "Block",
                              "src": "3464:32:15"
                            }
                          ],
                          "id": 3231,
                          "name": "IfStatement",
                          "src": "3452:44:15"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "&&",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint8",
                                      "typeString": "uint8"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "!=",
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3212,
                                        "type": "uint8",
                                        "value": "v"
                                      },
                                      "id": 3232,
                                      "name": "Identifier",
                                      "src": "3572:1:15"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "hexvalue": "3237",
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "subdenomination": null,
                                        "token": "number",
                                        "type": "int_const 27",
                                        "value": "27"
                                      },
                                      "id": 3233,
                                      "name": "Literal",
                                      "src": "3577:2:15"
                                    }
                                  ],
                                  "id": 3234,
                                  "name": "BinaryOperation",
                                  "src": "3572:7:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint8",
                                      "typeString": "uint8"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "operator": "!=",
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3212,
                                        "type": "uint8",
                                        "value": "v"
                                      },
                                      "id": 3235,
                                      "name": "Identifier",
                                      "src": "3583:1:15"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "hexvalue": "3238",
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "subdenomination": null,
                                        "token": "number",
                                        "type": "int_const 28",
                                        "value": "28"
                                      },
                                      "id": 3236,
                                      "name": "Literal",
                                      "src": "3588:2:15"
                                    }
                                  ],
                                  "id": 3237,
                                  "name": "BinaryOperation",
                                  "src": "3583:7:15"
                                }
                              ],
                              "id": 3238,
                              "name": "BinaryOperation",
                              "src": "3572:18:15"
                            },
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "functionReturnParameters": 3204
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "hexvalue": "66616c7365",
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "subdenomination": null,
                                        "token": "bool",
                                        "type": "bool",
                                        "value": "false"
                                      },
                                      "id": 3239,
                                      "name": "Literal",
                                      "src": "3613:5:15"
                                    }
                                  ],
                                  "id": 3240,
                                  "name": "Return",
                                  "src": "3606:12:15"
                                }
                              ],
                              "id": 3241,
                              "name": "Block",
                              "src": "3592:37:15"
                            },
                            {
                              "children": [
                                {
                                  "attributes": {
                                    "functionReturnParameters": 3204
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "type": "bool"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": 3040,
                                            "type": "mapping(address => bool)",
                                            "value": "whitelist"
                                          },
                                          "id": 3242,
                                          "name": "Identifier",
                                          "src": "3709:9:15"
                                        },
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "isStructConstructorCall": false,
                                            "lValueRequested": false,
                                            "names": [
                                              null
                                            ],
                                            "tryCall": false,
                                            "type": "address",
                                            "type_conversion": false
                                          },
                                          "children": [
                                            {
                                              "attributes": {
                                                "argumentTypes": [
                                                  {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                  },
                                                  {
                                                    "typeIdentifier": "t_uint8",
                                                    "typeString": "uint8"
                                                  },
                                                  {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                  },
                                                  {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                  }
                                                ],
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": -6,
                                                "type": "function (bytes32,uint8,bytes32,bytes32) pure returns (address)",
                                                "value": "ecrecover"
                                              },
                                              "id": 3243,
                                              "name": "Identifier",
                                              "src": "3719:9:15"
                                            },
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "isStructConstructorCall": false,
                                                "lValueRequested": false,
                                                "names": [
                                                  null
                                                ],
                                                "tryCall": false,
                                                "type": "bytes32",
                                                "type_conversion": false
                                              },
                                              "children": [
                                                {
                                                  "attributes": {
                                                    "argumentTypes": [
                                                      {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                      }
                                                    ],
                                                    "overloadedDeclarations": [
                                                      null
                                                    ],
                                                    "referencedDeclaration": -8,
                                                    "type": "function (bytes memory) pure returns (bytes32)",
                                                    "value": "keccak256"
                                                  },
                                                  "id": 3244,
                                                  "name": "Identifier",
                                                  "src": "3729:9:15"
                                                },
                                                {
                                                  "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                      null
                                                    ],
                                                    "tryCall": false,
                                                    "type": "bytes memory",
                                                    "type_conversion": false
                                                  },
                                                  "children": [
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": [
                                                          {
                                                            "typeIdentifier": "t_stringliteral_178a2411ab6fbc1ba11064408972259c558d0e82fd48b0aba3ad81d14f065e73",
                                                            "typeString": "literal_string \"\u0019Ethereum Signed Message:\n32\""
                                                          },
                                                          {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                          }
                                                        ],
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "member_name": "encodePacked",
                                                        "referencedDeclaration": null,
                                                        "type": "function () pure returns (bytes memory)"
                                                      },
                                                      "children": [
                                                        {
                                                          "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                              null
                                                            ],
                                                            "referencedDeclaration": -1,
                                                            "type": "abi",
                                                            "value": "abi"
                                                          },
                                                          "id": 3245,
                                                          "name": "Identifier",
                                                          "src": "3756:3:15"
                                                        }
                                                      ],
                                                      "id": 3246,
                                                      "name": "MemberAccess",
                                                      "src": "3756:16:15"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "hexvalue": "19457468657265756d205369676e6564204d6573736167653a0a3332",
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "subdenomination": null,
                                                        "token": "string",
                                                        "type": "literal_string \"\u0019Ethereum Signed Message:\n32\"",
                                                        "value": "\u0019Ethereum Signed Message:\n32"
                                                      },
                                                      "id": 3247,
                                                      "name": "Literal",
                                                      "src": "3773:34:15"
                                                    },
                                                    {
                                                      "attributes": {
                                                        "argumentTypes": null,
                                                        "overloadedDeclarations": [
                                                          null
                                                        ],
                                                        "referencedDeclaration": 3198,
                                                        "type": "bytes32",
                                                        "value": "_hash"
                                                      },
                                                      "id": 3248,
                                                      "name": "Identifier",
                                                      "src": "3809:5:15"
                                                    }
                                                  ],
                                                  "id": 3249,
                                                  "name": "FunctionCall",
                                                  "src": "3756:59:15"
                                                }
                                              ],
                                              "id": 3250,
                                              "name": "FunctionCall",
                                              "src": "3729:104:15"
                                            },
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": 3212,
                                                "type": "uint8",
                                                "value": "v"
                                              },
                                              "id": 3251,
                                              "name": "Identifier",
                                              "src": "3835:1:15"
                                            },
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": 3206,
                                                "type": "bytes32",
                                                "value": "r"
                                              },
                                              "id": 3252,
                                              "name": "Identifier",
                                              "src": "3838:1:15"
                                            },
                                            {
                                              "attributes": {
                                                "argumentTypes": null,
                                                "overloadedDeclarations": [
                                                  null
                                                ],
                                                "referencedDeclaration": 3209,
                                                "type": "bytes32",
                                                "value": "s"
                                              },
                                              "id": 3253,
                                              "name": "Identifier",
                                              "src": "3841:1:15"
                                            }
                                          ],
                                          "id": 3254,
                                          "name": "FunctionCall",
                                          "src": "3719:124:15"
                                        }
                                      ],
                                      "id": 3255,
                                      "name": "IndexAccess",
                                      "src": "3709:135:15"
                                    }
                                  ],
                                  "id": 3256,
                                  "name": "Return",
                                  "src": "3702:142:15"
                                }
                              ],
                              "id": 3257,
                              "name": "Block",
                              "src": "3635:220:15"
                            }
                          ],
                          "id": 3258,
                          "name": "IfStatement",
                          "src": "3568:287:15"
                        }
                      ],
                      "id": 3259,
                      "name": "Block",
                      "src": "2770:1091:15"
                    }
                  ],
                  "id": 3260,
                  "name": "FunctionDefinition",
                  "src": "2672:1189:15"
                },
                {
                  "attributes": {
                    "documentation": null,
                    "functionSelector": "0d392cd9",
                    "implemented": true,
                    "isConstructor": false,
                    "kind": "function",
                    "name": "updateWhitelist",
                    "overrides": null,
                    "scope": 3298,
                    "stateMutability": "nonpayable",
                    "virtual": false,
                    "visibility": "public"
                  },
                  "children": [
                    {
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "_account",
                            "overrides": null,
                            "scope": 3285,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "address",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "address",
                                "stateMutability": "nonpayable",
                                "type": "address"
                              },
                              "id": 3261,
                              "name": "ElementaryTypeName",
                              "src": "3999:7:15"
                            }
                          ],
                          "id": 3262,
                          "name": "VariableDeclaration",
                          "src": "3999:16:15"
                        },
                        {
                          "attributes": {
                            "constant": false,
                            "name": "_value",
                            "overrides": null,
                            "scope": 3285,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "bool",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bool",
                                "type": "bool"
                              },
                              "id": 3263,
                              "name": "ElementaryTypeName",
                              "src": "4017:4:15"
                            }
                          ],
                          "id": 3264,
                          "name": "VariableDeclaration",
                          "src": "4017:11:15"
                        }
                      ],
                      "id": 3265,
                      "name": "ParameterList",
                      "src": "3998:31:15"
                    },
                    {
                      "children": [
                        {
                          "attributes": {
                            "constant": false,
                            "name": "",
                            "overrides": null,
                            "scope": 3285,
                            "stateVariable": false,
                            "storageLocation": "default",
                            "type": "bool",
                            "value": null,
                            "visibility": "internal"
                          },
                          "children": [
                            {
                              "attributes": {
                                "name": "bool",
                                "type": "bool"
                              },
                              "id": 3268,
                              "name": "ElementaryTypeName",
                              "src": "4062:4:15"
                            }
                          ],
                          "id": 3269,
                          "name": "VariableDeclaration",
                          "src": "4062:4:15"
                        }
                      ],
                      "id": 3270,
                      "name": "ParameterList",
                      "src": "4061:6:15"
                    },
                    {
                      "attributes": {
                        "arguments": null
                      },
                      "children": [
                        {
                          "attributes": {
                            "argumentTypes": null,
                            "overloadedDeclarations": [
                              null
                            ],
                            "referencedDeclaration": 3297,
                            "type": "modifier ()",
                            "value": "onlyWhitelisted"
                          },
                          "id": 3266,
                          "name": "Identifier",
                          "src": "4030:15:15"
                        }
                      ],
                      "id": 3267,
                      "name": "ModifierInvocation",
                      "src": "4030:15:15"
                    },
                    {
                      "children": [
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "operator": "=",
                                "type": "bool"
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3040,
                                        "type": "mapping(address => bool)",
                                        "value": "whitelist"
                                      },
                                      "id": 3271,
                                      "name": "Identifier",
                                      "src": "4078:9:15"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3262,
                                        "type": "address",
                                        "value": "_account"
                                      },
                                      "id": 3272,
                                      "name": "Identifier",
                                      "src": "4088:8:15"
                                    }
                                  ],
                                  "id": 3273,
                                  "name": "IndexAccess",
                                  "src": "4078:19:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3264,
                                    "type": "bool",
                                    "value": "_value"
                                  },
                                  "id": 3274,
                                  "name": "Identifier",
                                  "src": "4100:6:15"
                                }
                              ],
                              "id": 3275,
                              "name": "Assignment",
                              "src": "4078:28:15"
                            }
                          ],
                          "id": 3276,
                          "name": "ExpressionStatement",
                          "src": "4078:28:15"
                        },
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      },
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3020,
                                    "type": "function (address,bool)",
                                    "value": "UpdateWhitelist"
                                  },
                                  "id": 3277,
                                  "name": "Identifier",
                                  "src": "4121:15:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3262,
                                    "type": "address",
                                    "value": "_account"
                                  },
                                  "id": 3278,
                                  "name": "Identifier",
                                  "src": "4137:8:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 3264,
                                    "type": "bool",
                                    "value": "_value"
                                  },
                                  "id": 3279,
                                  "name": "Identifier",
                                  "src": "4147:6:15"
                                }
                              ],
                              "id": 3280,
                              "name": "FunctionCall",
                              "src": "4121:33:15"
                            }
                          ],
                          "id": 3281,
                          "name": "EmitStatement",
                          "src": "4116:38:15"
                        },
                        {
                          "attributes": {
                            "functionReturnParameters": 3270
                          },
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "74727565",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "bool",
                                "type": "bool",
                                "value": "true"
                              },
                              "id": 3282,
                              "name": "Literal",
                              "src": "4171:4:15"
                            }
                          ],
                          "id": 3283,
                          "name": "Return",
                          "src": "4164:11:15"
                        }
                      ],
                      "id": 3284,
                      "name": "Block",
                      "src": "4068:114:15"
                    }
                  ],
                  "id": 3285,
                  "name": "FunctionDefinition",
                  "src": "3974:208:15"
                },
                {
                  "attributes": {
                    "documentation": null,
                    "name": "onlyWhitelisted",
                    "overrides": null,
                    "virtual": false,
                    "visibility": "internal"
                  },
                  "children": [
                    {
                      "attributes": {
                        "parameters": [
                          null
                        ]
                      },
                      "children": [],
                      "id": 3286,
                      "name": "ParameterList",
                      "src": "4212:2:15"
                    },
                    {
                      "children": [
                        {
                          "children": [
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "isStructConstructorCall": false,
                                "lValueRequested": false,
                                "names": [
                                  null
                                ],
                                "tryCall": false,
                                "type": "tuple()",
                                "type_conversion": false
                              },
                              "children": [
                                {
                                  "attributes": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      },
                                      {
                                        "typeIdentifier": "t_stringliteral_a89e597819447b11f0480d3b6d9e4f3600f54d3c014040417c6c31ddc4786b69",
                                        "typeString": "literal_string \"Account Not Whitelisted\""
                                      }
                                    ],
                                    "overloadedDeclarations": [
                                      -18,
                                      -18
                                    ],
                                    "referencedDeclaration": -18,
                                    "type": "function (bool,string memory) pure",
                                    "value": "require"
                                  },
                                  "id": 3287,
                                  "name": "Identifier",
                                  "src": "4225:7:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "type": "bool"
                                  },
                                  "children": [
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "overloadedDeclarations": [
                                          null
                                        ],
                                        "referencedDeclaration": 3040,
                                        "type": "mapping(address => bool)",
                                        "value": "whitelist"
                                      },
                                      "id": 3288,
                                      "name": "Identifier",
                                      "src": "4233:9:15"
                                    },
                                    {
                                      "attributes": {
                                        "argumentTypes": null,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "member_name": "sender",
                                        "referencedDeclaration": null,
                                        "type": "address payable"
                                      },
                                      "children": [
                                        {
                                          "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                              null
                                            ],
                                            "referencedDeclaration": -15,
                                            "type": "msg",
                                            "value": "msg"
                                          },
                                          "id": 3289,
                                          "name": "Identifier",
                                          "src": "4243:3:15"
                                        }
                                      ],
                                      "id": 3290,
                                      "name": "MemberAccess",
                                      "src": "4243:10:15"
                                    }
                                  ],
                                  "id": 3291,
                                  "name": "IndexAccess",
                                  "src": "4233:21:15"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "hexvalue": "4163636f756e74204e6f742057686974656c6973746564",
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "subdenomination": null,
                                    "token": "string",
                                    "type": "literal_string \"Account Not Whitelisted\"",
                                    "value": "Account Not Whitelisted"
                                  },
                                  "id": 3292,
                                  "name": "Literal",
                                  "src": "4256:25:15"
                                }
                              ],
                              "id": 3293,
                              "name": "FunctionCall",
                              "src": "4225:57:15"
                            }
                          ],
                          "id": 3294,
                          "name": "ExpressionStatement",
                          "src": "4225:57:15"
                        },
                        {
                          "id": 3295,
                          "name": "PlaceholderStatement",
                          "src": "4292:1:15"
                        }
                      ],
                      "id": 3296,
                      "name": "Block",
                      "src": "4215:85:15"
                    }
                  ],
                  "id": 3297,
                  "name": "ModifierDefinition",
                  "src": "4188:112:15"
                }
              ],
              "id": 3298,
              "name": "ContractDefinition",
              "src": "86:4216:15"
            }
          ],
          "id": 3299,
          "name": "SourceUnit",
          "src": "32:4271:15"
        },
        "compiler": {
          "name": "solc",
          "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
        },
        "networks": {
          "4": {
            "events": {},
            "links": {},
            "address": "0x656eC82544a3464f07bB86bEA3447A4fdF489C1b",
            "transactionHash": "0x48cefb69ed27f9d636cb8cc6cd7c04aecbd794207de1580e28dc704c459da719"
          },
          "5777": {
            "events": {},
            "links": {},
            "address": "0x156E88B8b750bD7129054d853410A974b0488883",
            "transactionHash": "0x4fe960ae96a1882c4bc1f70478a98e8ad8d3782758b0e753152c701f270ae5c5"
          },
          "11155111": {
            "events": {},
            "links": {},
            "address": "0x5341e225Ab4D29B838a813E380c28b0eFD6FBa55",
            "transactionHash": "0xed51e877a2825fb67e7a2a1de5cb8dd8f31ad8f6ea0b0986b6fe2a3b31c53337"
          }
        },
        "schemaVersion": "3.4.11",
        "updatedAt": "2022-11-25T08:11:37.765Z",
        "networkType": "ethereum",
        "devdoc": {
          "methods": {}
        },
        "userdoc": {
          "methods": {}
        }
      }
]
export default Meebits_claimer;