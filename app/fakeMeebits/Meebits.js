const Meebits = [{
    "contractName": "FakeMeebits",
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "baseURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
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
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
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
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
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
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
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
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
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
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
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
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
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
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
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
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
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
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
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
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
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
            "name": "_token",
            "type": "uint256"
          }
        ],
        "name": "mintAToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newMinter",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "permission",
            "type": "bool"
          }
        ],
        "name": "manageMinter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newMinter\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"permission\",\"type\":\"bool\"}],\"name\":\"manageMinter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_token\",\"type\":\"uint256\"}],\"name\":\"mintAToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"whitelist\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"baseURI()\":{\"details\":\"Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"project:/contracts/FakeMeebits.sol\":\"FakeMeebits\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0x24141d2f6b98d4cb77a8936eae8cbaad2e261d9062bdc08036096f4550092501\",\"urls\":[\"bzz-raw://b710eb003944777135f027500a5a57b479fe857849f5f467c1ef9687401e3c95\",\"dweb:/ipfs/QmcELzi6KRzAs3DXwxdsoKWRJ13KSeipKQsJgD3unctdZM\"]},\"@openzeppelin/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xf70bc25d981e4ec9673a995ad2995d5d493ea188d3d8f388bba9c227ce09fb82\",\"urls\":[\"bzz-raw://bd970f51e3a77790c2f02b5b1759827c3b897c3d98c407b3631e8af32e3dc93c\",\"dweb:/ipfs/QmPF85Amgbqjk3SNZKsPCsqCw8JfwYEPMnnhvMJUyX58je\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xcc78a17dd88fa5a2edc60c8489e2f405c0913b377216a5b26b35656b2d0dab52\",\"urls\":[\"bzz-raw://526dc85e1f9b9b45830e202568d267d93dde7a4fcccf4ad7798dadcd92304d3c\",\"dweb:/ipfs/QmaoXMB972J3cSDLtBq3xBo4jLwqD2uzXTwujtSPqkYVhR\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x118ed7540f56b21ff92e21ebaa73584048e98d2ac04ca67571329bb8dbd9032f\",\"urls\":[\"bzz-raw://da2918b7aff73dd51d41bfcfa548f81eb50531b8353500fdbdacf297076db070\",\"dweb:/ipfs/Qmb8ixAs1vBjZRowQNuNg6bRf2NZmgZ1JTBxmQS14PHpcL\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x2d99a0deb6648c34fbc66d6ac4a2d64798d7a5321b45624f6736fadc63da1962\",\"urls\":[\"bzz-raw://2dcdce5ede1e5e650d174ec0b35be7d47b6a50f30bc895ef0d9e59fb75052e45\",\"dweb:/ipfs/QmQ2XFsDLTYqfEdw7pYzHiGtFRY11yQm4b6ynYgKqDxeB8\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol\":{\"keccak256\":\"0xe6bd1b1218338b6f9fe17776f48623b4ac3d8a40405f74a44bc23c00abe2ca13\",\"urls\":[\"bzz-raw://0c354c3f6e9c487759aa7869be4fba68e0b2efc777b514d289c4cbd3ff8f7e1a\",\"dweb:/ipfs/QmdF9LcSYVmiUCL7JxLEYmSLrjga6zJsujfi6sgEJD4M1z\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\":{\"keccak256\":\"0xccb917776f826ac6b68bd5a15a5f711e3967848a52ba11e6104d9a4f593314a7\",\"urls\":[\"bzz-raw://430255ad2229ced6d880e61a67bdc6e48dbbaed8354a7c1fe918cd8b8714a886\",\"dweb:/ipfs/QmTHY56odzqEpEC6v6tafaWMYY7vmULw25q5XHJLCCAeox\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x52146049d6709c870e8ddcd988b5155cb6c5d640cfcd8978aee52bc1ba2ec4eb\",\"urls\":[\"bzz-raw://ada84513617b7c1b2f890b44503735abaec73a1acd030112a17aac7e6c66a4a1\",\"dweb:/ipfs/QmaiFwdio67iJrfjAdkMac24eJ5sS1qD7CZW6PhUU6KjiK\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x28911e614500ae7c607a432a709d35da25f3bc5ddc8bd12b278b66358070c0ea\",\"urls\":[\"bzz-raw://256c8c8af5eb072bc473226ab2b2187149b8fc04f5f4a4820db22527f5ce8e3c\",\"dweb:/ipfs/QmRvi5BhnL7Rxf85KrJhwM6RRhukm4tzoctRdgQEheNyiN\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"urls\":[\"bzz-raw://ded47ec7c96750f9bd04bbbc84f659992d4ba901cb7b532a52cd468272cf378f\",\"dweb:/ipfs/QmfBrGtQP7rZEqEg6Wz6jh2N2Kukpj1z5v3CGWmAqrzm96\"]},\"@openzeppelin/contracts/utils/EnumerableMap.sol\":{\"keccak256\":\"0x4b087f06b6670a131a5a14e53b1d2a5ef19c034cc5ec42eeebcf9554325744ad\",\"urls\":[\"bzz-raw://f6a6af5d848334e40db419773f6360601e311ffc21c2e274f730b8c542da99fd\",\"dweb:/ipfs/QmfA24cxQ2g41ZWUuDF295dxDJ4xF1bSDYtC3EaLd7CzW8\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0x1562cd9922fbf739edfb979f506809e2743789cbde3177515542161c3d04b164\",\"urls\":[\"bzz-raw://4580d57781513d98870d9738c7d39094336e0a70cdb90d68dad549c6ced466ec\",\"dweb:/ipfs/Qmf9YZzzRFuvMnav9dgmeRUpdYMMECiZX8w25sHWVbA18V\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xa1e12f97981f1d0964b1c048978606a57127c56c438bab61cdfe269cad859a74\",\"urls\":[\"bzz-raw://5eefac1760f524971e14aa3f3d79515a3d54fd28c1d3bdca0b36127da349b830\",\"dweb:/ipfs/QmUMzkyH3ytJX5gVPizQruNLhkKmuJb3nFqBDad4LPdg5U\"]},\"project:/contracts/FakeMeebits.sol\":{\"keccak256\":\"0x80481bf67bbdcf553040bc8b5de5afdda3522c8c4f7828d6d41db9990a32b50c\",\"urls\":[\"bzz-raw://c9979e7c1739e3a3216daca58a612e50d1c2ce34b372ce1b8c74b80a133ce731\",\"dweb:/ipfs/QmT2jF22rwhVjJLxHwymHWxXgXYtMAmpKhfKsFgaMEpQQn\"]}},\"version\":1}",
    "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280600c81526020017f46616b65204d65656269747300000000000000000000000000000000000000008152506040518060400160405280600381526020017f464d420000000000000000000000000000000000000000000000000000000000815250620000966301ffc9a760e01b620001ad60201b60201c565b8160069080519060200190620000ae9291906200072f565b508060079080519060200190620000c79291906200072f565b50620000e06380ac58cd60e01b620001ad60201b60201c565b620000f8635b5e139f60e01b620001ad60201b60201c565b6200011063780e9d6360e01b620001ad60201b60201c565b505062000125336001620002b660201b60201c565b6001600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620001a76040518060600160405280602581526020016200345260259139620004ca60201b60201c565b620007de565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614156200024a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200035a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b6200036b81620004e660201b60201c565b15620003df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b620003f3600083836200050a60201b60201c565b6200044b81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206200050f60201b620020101790919060201c565b5062000469818360026200053160201b6200202a179092919060201c565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b8060099080519060200190620004e29291906200072f565b5050565b6000620005038260026200056e60201b62001fc61790919060201c565b9050919050565b505050565b600062000529836000018360001b6200059060201b60201c565b905092915050565b600062000565846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b6200060a60201b60201c565b90509392505050565b600062000588836000018360001b620006e960201b60201c565b905092915050565b6000620005a483836200070c60201b60201c565b620005ff57826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905062000604565b600090505b92915050565b6000808460010160008581526020019081526020016000205490506000811415620006b357846000016040518060400160405280868152602001858152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508460000180549050856001016000868152602001908152602001600020819055506001915050620006e2565b82856000016001830381548110620006c757fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080836001016000848152602001908152602001600020541415905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200077257805160ff1916838001178555620007a3565b82800160010185558215620007a3579182015b82811115620007a257825182559160200191906001019062000785565b5b509050620007b29190620007b6565b5090565b620007db91905b80821115620007d7576000816000905550600101620007bd565b5090565b90565b612c6480620007ee6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80636c0360eb116100ad578063a22cb46511610071578063a22cb465146106eb578063b88d4fde1461073b578063bfcd198a14610840578063c87b56dd1461086e578063e985e9c5146109155761012c565b80636c0360eb146104e157806370a08231146105645780637e7dd60b146105bc57806395d89b411461060c5780639b19251a1461068f5761012c565b806323b872dd116100f457806323b872dd146102f35780632f745c591461036157806342842e0e146103c35780634f6ccce7146104315780636352211e146104735761012c565b806301ffc9a71461013157806306fdde0314610196578063081812fc14610219578063095ea7b31461028757806318160ddd146102d5575b600080fd5b61017c6004803603602081101561014757600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610991565b604051808215151515815260200191505060405180910390f35b61019e6109f8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101de5780820151818401526020810190506101c3565b50505050905090810190601f16801561020b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102456004803603602081101561022f57600080fd5b8101908080359060200190929190505050610a9a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102d36004803603604081101561029d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b35565b005b6102dd610c79565b6040518082815260200191505060405180910390f35b61035f6004803603606081101561030957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c8a565b005b6103ad6004803603604081101561037757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d00565b6040518082815260200191505060405180910390f35b61042f600480360360608110156103d957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d5b565b005b61045d6004803603602081101561044757600080fd5b8101908080359060200190929190505050610d7b565b6040518082815260200191505060405180910390f35b61049f6004803603602081101561048957600080fd5b8101908080359060200190929190505050610d9e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104e9610dd5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561052957808201518184015260208101905061050e565b50505050905090810190601f1680156105565780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105a66004803603602081101561057a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e77565b6040518082815260200191505060405180910390f35b61060a600480360360408110156105d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610f4c565b005b610614611066565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610654578082015181840152602081019050610639565b50505050905090810190601f1680156106815780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106d1600480360360208110156106a557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611108565b604051808215151515815260200191505060405180910390f35b6107396004803603604081101561070157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611128565b005b61083e6004803603608081101561075157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156107b857600080fd5b8201836020820111156107ca57600080fd5b803590602001918460018302840111640100000000831117156107ec57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506112e0565b005b61086c6004803603602081101561085657600080fd5b8101908080359060200190929190505050611358565b005b61089a6004803603602081101561088457600080fd5b8101908080359060200190929190505050611424565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108da5780820151818401526020810190506108bf565b50505050905090810190601f1680156109075780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6109776004803603604081101561092b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506116f5565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a905780601f10610a6557610100808354040283529160200191610a90565b820191906000526020600020905b815481529060010190602001808311610a7357829003601f168201915b5050505050905090565b6000610aa582611789565b610afa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612b59602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610b4082610d9e565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610bc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612bdd6021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610be66117a6565b73ffffffffffffffffffffffffffffffffffffffff161480610c155750610c1481610c0f6117a6565b6116f5565b5b610c6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180612aac6038913960400191505060405180910390fd5b610c7483836117ae565b505050565b6000610c856002611867565b905090565b610c9b610c956117a6565b8261187c565b610cf0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612bfe6031913960400191505060405180910390fd5b610cfb838383611970565b505050565b6000610d5382600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611bb390919063ffffffff16565b905092915050565b610d76838383604051806020016040528060008152506112e0565b505050565b600080610d92836002611bcd90919063ffffffff16565b50905080915050919050565b6000610dce82604051806060016040528060298152602001612b0e602991396002611bfc9092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e6d5780601f10610e4257610100808354040283529160200191610e6d565b820191906000526020600020905b815481529060010190602001808311610e5057829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610efe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612ae4602a913960400191505060405180910390fd5b610f45600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611c1b565b9050919050565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661100b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4163636f756e74204e6f742057686974656c697374656400000000000000000081525060200191505060405180910390fd5b80600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b606060078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110fe5780601f106110d3576101008083540402835291602001916110fe565b820191906000526020600020905b8154815290600101906020018083116110e157829003601f168201915b5050505050905090565b600a6020528060005260406000206000915054906101000a900460ff1681565b6111306117a6565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156111d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b80600560006111de6117a6565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff1661128b6117a6565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6112f16112eb6117a6565b8361187c565b611346576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612bfe6031913960400191505060405180910390fd5b61135284848484611c30565b50505050565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611417576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4163636f756e74204e6f742057686974656c697374656400000000000000000081525060200191505060405180910390fd5b6114213382611ca2565b50565b606061142f82611789565b611484576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612bae602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561152d5780601f106115025761010080835404028352916020019161152d565b820191906000526020600020905b81548152906001019060200180831161151057829003601f168201915b50505050509050606061153e610dd5565b90506000815114156115545781925050506116f0565b6000825111156116255780826040516020018083805190602001908083835b602083106115965780518252602082019150602081019050602083039250611573565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106115e757805182526020820191506020810190506020830392506115c4565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050506116f0565b8061162f85611e96565b6040516020018083805190602001908083835b602083106116655780518252602082019150602081019050602083039250611642565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106116b65780518252602082019150602081019050602083039250611693565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600061179f826002611fc690919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661182183610d9e565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061187582600001611fe0565b9050919050565b600061188782611789565b6118dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612a80602c913960400191505060405180910390fd5b60006118e783610d9e565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061195657508373ffffffffffffffffffffffffffffffffffffffff1661193e84610a9a565b73ffffffffffffffffffffffffffffffffffffffff16145b80611967575061196681856116f5565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661199082610d9e565b73ffffffffffffffffffffffffffffffffffffffff16146119fc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180612b856029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611a82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612a366024913960400191505060405180910390fd5b611a8d838383611ff1565b611a986000826117ae565b611ae981600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611ff690919063ffffffff16565b50611b3b81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061201090919063ffffffff16565b50611b528183600261202a9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000611bc2836000018361205f565b60001c905092915050565b600080600080611be086600001866120e2565b915091508160001c8160001c8090509350935050509250929050565b6000611c0f846000018460001b8461217b565b60001c90509392505050565b6000611c2982600001612271565b9050919050565b611c3b848484611970565b611c4784848484612282565b611c9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180612a046032913960400191505060405180910390fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d45576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611d4e81611789565b15611dc1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b611dcd60008383611ff1565b611e1e81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061201090919063ffffffff16565b50611e358183600261202a9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60606000821415611ede576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611fc1565b600082905060005b60008214611f08578080600101915050600a8281611f0057fe5b049150611ee6565b6060816040519080825280601f01601f191660200182016040528015611f3d5781602001600182028038833980820191505090505b50905060006001830390508593505b60008414611fb957600a8481611f5e57fe5b0660300160f81b82828060019003935081518110611f7857fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611fb157fe5b049350611f4c565b819450505050505b919050565b6000611fd8836000018360001b6124c7565b905092915050565b600081600001805490509050919050565b505050565b6000612008836000018360001b6124ea565b905092915050565b6000612022836000018360001b6125d2565b905092915050565b6000612056846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b612642565b90509392505050565b6000818360000180549050116120c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806129e26022913960400191505060405180910390fd5b8260000182815481106120cf57fe5b9060005260206000200154905092915050565b60008082846000018054905011612144576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612b376022913960400191505060405180910390fd5b600084600001848154811061215557fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390612242576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156122075780820151818401526020810190506121ec565b50505050905090810190601f1680156122345780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5084600001600182038154811061225557fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b60006122a38473ffffffffffffffffffffffffffffffffffffffff1661271e565b6122b057600190506124bf565b606061244663150b7a0260e01b6122c56117a6565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561237557808201518184015260208101905061235a565b50505050905090810190601f1680156123a25780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001612a04603291398773ffffffffffffffffffffffffffffffffffffffff166127319092919063ffffffff16565b9050600081806020019051602081101561245f57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b600080836001016000848152602001908152602001600020549050600081146125c6576000600182039050600060018660000180549050039050600086600001828154811061253557fe5b906000526020600020015490508087600001848154811061255257fe5b906000526020600020018190555060018301876001016000838152602001908152602001600020819055508660000180548061258a57fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506125cc565b60009150505b92915050565b60006125de8383612749565b61263757826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905061263c565b600090505b92915050565b60008084600101600085815260200190815260200160002054905060008114156126e957846000016040518060400160405280868152602001858152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508460000180549050856001016000868152602001908152602001600020819055506001915050612717565b828560000160018303815481106126fc57fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080823b905060008111915050919050565b6060612740848460008561276c565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b6060824710156127c7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612a5a6026913960400191505060405180910390fd5b6127d08561271e565b612842576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310612892578051825260208201915060208101905060208303925061286f565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146128f4576040519150601f19603f3d011682016040523d82523d6000602084013e6128f9565b606091505b5091509150612909828286612915565b92505050949350505050565b60608315612925578290506129da565b6000835111156129385782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561299f578082015181840152602081019050612984565b50505050905090810190601f1680156129cc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a26469706673582212209907637a907501407113f346224d2c6622676ee879b803d9b3d26b9024b0743164736f6c6343000602003368747470733a2f2f6d6565626974732e6c617276616c6162732e636f6d2f6d65656269742f",
    "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061012c5760003560e01c80636c0360eb116100ad578063a22cb46511610071578063a22cb465146106eb578063b88d4fde1461073b578063bfcd198a14610840578063c87b56dd1461086e578063e985e9c5146109155761012c565b80636c0360eb146104e157806370a08231146105645780637e7dd60b146105bc57806395d89b411461060c5780639b19251a1461068f5761012c565b806323b872dd116100f457806323b872dd146102f35780632f745c591461036157806342842e0e146103c35780634f6ccce7146104315780636352211e146104735761012c565b806301ffc9a71461013157806306fdde0314610196578063081812fc14610219578063095ea7b31461028757806318160ddd146102d5575b600080fd5b61017c6004803603602081101561014757600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610991565b604051808215151515815260200191505060405180910390f35b61019e6109f8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101de5780820151818401526020810190506101c3565b50505050905090810190601f16801561020b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102456004803603602081101561022f57600080fd5b8101908080359060200190929190505050610a9a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102d36004803603604081101561029d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b35565b005b6102dd610c79565b6040518082815260200191505060405180910390f35b61035f6004803603606081101561030957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c8a565b005b6103ad6004803603604081101561037757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d00565b6040518082815260200191505060405180910390f35b61042f600480360360608110156103d957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d5b565b005b61045d6004803603602081101561044757600080fd5b8101908080359060200190929190505050610d7b565b6040518082815260200191505060405180910390f35b61049f6004803603602081101561048957600080fd5b8101908080359060200190929190505050610d9e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104e9610dd5565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561052957808201518184015260208101905061050e565b50505050905090810190601f1680156105565780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105a66004803603602081101561057a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e77565b6040518082815260200191505060405180910390f35b61060a600480360360408110156105d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610f4c565b005b610614611066565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610654578082015181840152602081019050610639565b50505050905090810190601f1680156106815780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106d1600480360360208110156106a557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611108565b604051808215151515815260200191505060405180910390f35b6107396004803603604081101561070157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611128565b005b61083e6004803603608081101561075157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156107b857600080fd5b8201836020820111156107ca57600080fd5b803590602001918460018302840111640100000000831117156107ec57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506112e0565b005b61086c6004803603602081101561085657600080fd5b8101908080359060200190929190505050611358565b005b61089a6004803603602081101561088457600080fd5b8101908080359060200190929190505050611424565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108da5780820151818401526020810190506108bf565b50505050905090810190601f1680156109075780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6109776004803603604081101561092b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506116f5565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a905780601f10610a6557610100808354040283529160200191610a90565b820191906000526020600020905b815481529060010190602001808311610a7357829003601f168201915b5050505050905090565b6000610aa582611789565b610afa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612b59602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610b4082610d9e565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610bc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612bdd6021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610be66117a6565b73ffffffffffffffffffffffffffffffffffffffff161480610c155750610c1481610c0f6117a6565b6116f5565b5b610c6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180612aac6038913960400191505060405180910390fd5b610c7483836117ae565b505050565b6000610c856002611867565b905090565b610c9b610c956117a6565b8261187c565b610cf0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612bfe6031913960400191505060405180910390fd5b610cfb838383611970565b505050565b6000610d5382600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611bb390919063ffffffff16565b905092915050565b610d76838383604051806020016040528060008152506112e0565b505050565b600080610d92836002611bcd90919063ffffffff16565b50905080915050919050565b6000610dce82604051806060016040528060298152602001612b0e602991396002611bfc9092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e6d5780601f10610e4257610100808354040283529160200191610e6d565b820191906000526020600020905b815481529060010190602001808311610e5057829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610efe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180612ae4602a913960400191505060405180910390fd5b610f45600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611c1b565b9050919050565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661100b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4163636f756e74204e6f742057686974656c697374656400000000000000000081525060200191505060405180910390fd5b80600a60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b606060078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110fe5780601f106110d3576101008083540402835291602001916110fe565b820191906000526020600020905b8154815290600101906020018083116110e157829003601f168201915b5050505050905090565b600a6020528060005260406000206000915054906101000a900460ff1681565b6111306117a6565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156111d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b80600560006111de6117a6565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff1661128b6117a6565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6112f16112eb6117a6565b8361187c565b611346576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526031815260200180612bfe6031913960400191505060405180910390fd5b61135284848484611c30565b50505050565b600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611417576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f4163636f756e74204e6f742057686974656c697374656400000000000000000081525060200191505060405180910390fd5b6114213382611ca2565b50565b606061142f82611789565b611484576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612bae602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561152d5780601f106115025761010080835404028352916020019161152d565b820191906000526020600020905b81548152906001019060200180831161151057829003601f168201915b50505050509050606061153e610dd5565b90506000815114156115545781925050506116f0565b6000825111156116255780826040516020018083805190602001908083835b602083106115965780518252602082019150602081019050602083039250611573565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106115e757805182526020820191506020810190506020830392506115c4565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050506116f0565b8061162f85611e96565b6040516020018083805190602001908083835b602083106116655780518252602082019150602081019050602083039250611642565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106116b65780518252602082019150602081019050602083039250611693565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600061179f826002611fc690919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661182183610d9e565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061187582600001611fe0565b9050919050565b600061188782611789565b6118dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612a80602c913960400191505060405180910390fd5b60006118e783610d9e565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061195657508373ffffffffffffffffffffffffffffffffffffffff1661193e84610a9a565b73ffffffffffffffffffffffffffffffffffffffff16145b80611967575061196681856116f5565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661199082610d9e565b73ffffffffffffffffffffffffffffffffffffffff16146119fc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180612b856029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611a82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612a366024913960400191505060405180910390fd5b611a8d838383611ff1565b611a986000826117ae565b611ae981600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611ff690919063ffffffff16565b50611b3b81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061201090919063ffffffff16565b50611b528183600261202a9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000611bc2836000018361205f565b60001c905092915050565b600080600080611be086600001866120e2565b915091508160001c8160001c8090509350935050509250929050565b6000611c0f846000018460001b8461217b565b60001c90509392505050565b6000611c2982600001612271565b9050919050565b611c3b848484611970565b611c4784848484612282565b611c9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180612a046032913960400191505060405180910390fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d45576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611d4e81611789565b15611dc1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b611dcd60008383611ff1565b611e1e81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061201090919063ffffffff16565b50611e358183600261202a9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60606000821415611ede576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611fc1565b600082905060005b60008214611f08578080600101915050600a8281611f0057fe5b049150611ee6565b6060816040519080825280601f01601f191660200182016040528015611f3d5781602001600182028038833980820191505090505b50905060006001830390508593505b60008414611fb957600a8481611f5e57fe5b0660300160f81b82828060019003935081518110611f7857fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611fb157fe5b049350611f4c565b819450505050505b919050565b6000611fd8836000018360001b6124c7565b905092915050565b600081600001805490509050919050565b505050565b6000612008836000018360001b6124ea565b905092915050565b6000612022836000018360001b6125d2565b905092915050565b6000612056846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b612642565b90509392505050565b6000818360000180549050116120c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806129e26022913960400191505060405180910390fd5b8260000182815481106120cf57fe5b9060005260206000200154905092915050565b60008082846000018054905011612144576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612b376022913960400191505060405180910390fd5b600084600001848154811061215557fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390612242576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156122075780820151818401526020810190506121ec565b50505050905090810190601f1680156122345780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5084600001600182038154811061225557fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b60006122a38473ffffffffffffffffffffffffffffffffffffffff1661271e565b6122b057600190506124bf565b606061244663150b7a0260e01b6122c56117a6565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561237557808201518184015260208101905061235a565b50505050905090810190601f1680156123a25780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001612a04603291398773ffffffffffffffffffffffffffffffffffffffff166127319092919063ffffffff16565b9050600081806020019051602081101561245f57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b600080836001016000848152602001908152602001600020549050600081146125c6576000600182039050600060018660000180549050039050600086600001828154811061253557fe5b906000526020600020015490508087600001848154811061255257fe5b906000526020600020018190555060018301876001016000838152602001908152602001600020819055508660000180548061258a57fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506125cc565b60009150505b92915050565b60006125de8383612749565b61263757826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905061263c565b600090505b92915050565b60008084600101600085815260200190815260200160002054905060008114156126e957846000016040518060400160405280868152602001858152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508460000180549050856001016000868152602001908152602001600020819055506001915050612717565b828560000160018303815481106126fc57fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080823b905060008111915050919050565b6060612740848460008561276c565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b6060824710156127c7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612a5a6026913960400191505060405180910390fd5b6127d08561271e565b612842576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b60208310612892578051825260208201915060208101905060208303925061286f565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146128f4576040519150601f19603f3d011682016040523d82523d6000602084013e6128f9565b606091505b5091509150612909828286612915565b92505050949350505050565b60608315612925578290506129da565b6000835111156129385782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561299f578082015181840152602081019050612984565b50505050905090810190601f1680156129cc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b939250505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a26469706673582212209907637a907501407113f346224d2c6622676ee879b803d9b3d26b9024b0743164736f6c63430006020033",
    "sourceMap": "183:659:14:-:0;;;285:188;8:9:-1;5:2;;;30:1;27;20:12;5:2;285:188:14;3577:369:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;768:40:0;435:10;787:20;;768:18;;;:40;;:::i;:::-;3659:5:3;3651;:13;;;;;;;;;;;;:::i;:::-;;3684:7;3674;:17;;;;;;;;;;;;:::i;:::-;;3779:40;2742:10;3798:20;;3779:18;;;:40;;:::i;:::-;3829:49;3074:10;3848:29;;3829:18;;;:49;;:::i;:::-;3888:51;3447:10;3907:31;;3888:18;;;:51;;:::i;:::-;3577:369;;346:20:14::1;352:10;364:1;346:5;;;:20;;:::i;:::-;400:4;376:9;:21;386:10;376:21;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;414:52;;;;;;;;;;;;;;;;;;:11;;;:52;;:::i;:::-;183:659:::0;;1507:198:0;1605:10;1590:25;;:11;:25;;;;;1582:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1694:4;1658:20;:33;1679:11;1658:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;1507:198;:::o;12246:393:3:-;12339:1;12325:16;;:2;:16;;;;12317:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12397:16;12405:7;12397;;;:16;;:::i;:::-;12396:17;12388:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12457:45;12486:1;12490:2;12494:7;12457:20;;;:45;;:::i;:::-;12513:30;12535:7;12513:13;:17;12527:2;12513:17;;;;;;;;;;;;;;;:21;;;;;;:30;;;;:::i;:::-;;12554:29;12571:7;12580:2;12554:12;:16;;;;;;:29;;;;;:::i;:::-;;12624:7;12620:2;12599:33;;12616:1;12599:33;;;;;;;;;;;;12246:393;;:::o;14873:98::-;14956:8;14945;:19;;;;;;;;;;;;:::i;:::-;;14873:98;:::o;10383:125::-;10448:4;10471:30;10493:7;10471:12;:21;;;;;;:30;;;;:::i;:::-;10464:37;;10383:125;;;:::o;17010:93::-;;;;:::o;8068:129:11:-;8135:4;8158:32;8163:3;:10;;8183:5;8175:14;;8158:4;;;:32;;:::i;:::-;8151:39;;8068:129;;;;:::o;7027:183:10:-;7116:4;7139:64;7144:3;:10;;7164:3;7156:12;;7194:5;7178:23;;7170:32;;7139:4;;;:64;;:::i;:::-;7132:71;;7027:183;;;;;:::o;7588:149::-;7672:4;7695:35;7705:3;:10;;7725:3;7717:12;;7695:9;;;:35;;:::i;:::-;7688:42;;7588:149;;;;:::o;1640:404:11:-;1703:4;1724:21;1734:3;1739:5;1724:9;;;:21;;:::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1761:23:11;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;1836:678:10:-;1912:4;2026:16;2045:3;:12;;:17;2058:3;2045:17;;;;;;;;;;;;2026:36;;2089:1;2077:8;:13;2073:435;;;2143:3;:12;;2161:38;;;;;;;;2178:3;2161:38;;;;2191:5;2161:38;;;2143:57;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2143:57:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2355:3;:12;;:19;;;;2335:3;:12;;:17;2348:3;2335:17;;;;;;;;;;;:39;;;;2395:4;2388:11;;;;;2073:435;2466:5;2430:3;:12;;2454:1;2443:8;:12;2430:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2492:5;2485:12;;;1836:678;;;;;;:::o;4278:123::-;4349:4;4393:1;4372:3;:12;;:17;4385:3;4372:17;;;;;;;;;;;;:22;;4365:29;;4278:123;;;;:::o;3805:127:11:-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;183:659:14:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "183:659:14:-:0;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;183:659:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;965:148:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;965:148:0;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;4517:98:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4517:98:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7222:217;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7222:217:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;6766:395;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6766:395:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6260:208;;;:::i;:::-;;;;;;;;;;;;;;;;;;;8086:300;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8086:300:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6029:160;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6029:160:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;8452:149;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8452:149:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6540:169;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6540:169:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4280:175;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4280:175:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5855:95;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;5855:95:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4005:218;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4005:218:3;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;581:146:14;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;581:146:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;4679:102:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4679:102:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;237:41:14;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;237:41:14;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;7506:290:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7506:290:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;8667:282;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;8667:282:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;8667:282:3;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;8667:282:3;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;8667:282:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;8667:282:3;;;;;;;;;;;;;;;:::i;:::-;;479:96:14;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;479:96:14;;;;;;;;;;;;;;;;;:::i;:::-;;4847:776:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4847:776:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4847:776:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7862:162;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7862:162:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;965:148:0;1050:4;1073:20;:33;1094:11;1073:33;;;;;;;;;;;;;;;;;;;;;;;;;;;1066:40;;965:148;;;:::o;4517:98:3:-;4571:13;4603:5;4596:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4517:98;:::o;7222:217::-;7298:7;7325:16;7333:7;7325;:16::i;:::-;7317:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7408:15;:24;7424:7;7408:24;;;;;;;;;;;;;;;;;;;;;7401:31;;7222:217;;;:::o;6766:395::-;6846:13;6862:23;6877:7;6862:14;:23::i;:::-;6846:39;;6909:5;6903:11;;:2;:11;;;;6895:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6987:5;6971:21;;:12;:10;:12::i;:::-;:21;;;:69;;;;6996:44;7020:5;7027:12;:10;:12::i;:::-;6996:23;:44::i;:::-;6971:69;6963:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7133:21;7142:2;7146:7;7133:8;:21::i;:::-;6766:395;;;:::o;6260:208::-;6321:7;6440:21;:12;:19;:21::i;:::-;6433:28;;6260:208;:::o;8086:300::-;8245:41;8264:12;:10;:12::i;:::-;8278:7;8245:18;:41::i;:::-;8237:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8351:28;8361:4;8367:2;8371:7;8351:9;:28::i;:::-;8086:300;;;:::o;6029:160::-;6126:7;6152:30;6176:5;6152:13;:20;6166:5;6152:20;;;;;;;;;;;;;;;:23;;:30;;;;:::i;:::-;6145:37;;6029:160;;;;:::o;8452:149::-;8555:39;8572:4;8578:2;8582:7;8555:39;;;;;;;;;;;;:16;:39::i;:::-;8452:149;;;:::o;6540:169::-;6615:7;6635:15;6656:22;6672:5;6656:12;:15;;:22;;;;:::i;:::-;6634:44;;;6695:7;6688:14;;;6540:169;;;:::o;4280:175::-;4352:7;4378:70;4395:7;4378:70;;;;;;;;;;;;;;;;;:12;:16;;:70;;;;;:::i;:::-;4371:77;;4280:175;;;:::o;5855:95::-;5903:13;5935:8;5928:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5855:95;:::o;4005:218::-;4077:7;4121:1;4104:19;;:5;:19;;;;4096:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4187:29;:13;:20;4201:5;4187:20;;;;;;;;;;;;;;;:27;:29::i;:::-;4180:36;;4005:218;;;:::o;581:146:14:-;773:9;:21;783:10;773:21;;;;;;;;;;;;;;;;;;;;;;;;;765:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;710:10:::1;687:9;:20;697:9;687:20;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;581:146:::0;;:::o;4679:102:3:-;4735:13;4767:7;4760:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4679:102;:::o;237:41:14:-;;;;;;;;;;;;;;;;;;;;;;:::o;7506:290:3:-;7620:12;:10;:12::i;:::-;7608:24;;:8;:24;;;;7600:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7718:8;7673:18;:32;7692:12;:10;:12::i;:::-;7673:32;;;;;;;;;;;;;;;:42;7706:8;7673:42;;;;;;;;;;;;;;;;:53;;;;;;;;;;;;;;;;;;7770:8;7741:48;;7756:12;:10;:12::i;:::-;7741:48;;;7780:8;7741:48;;;;;;;;;;;;;;;;;;;;;;7506:290;;:::o;8667:282::-;8798:41;8817:12;:10;:12::i;:::-;8831:7;8798:18;:41::i;:::-;8790:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8903:39;8917:4;8923:2;8927:7;8936:5;8903:13;:39::i;:::-;8667:282;;;;:::o;479:96:14:-;773:9;:21;783:10;773:21;;;;;;;;;;;;;;;;;;;;;;;;;765:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;543:25:::1;549:10;561:6;543:5;:25::i;:::-;479:96:::0;:::o;4847:776:3:-;4920:13;4953:16;4961:7;4953;:16::i;:::-;4945:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5032:23;5058:10;:19;5069:7;5058:19;;;;;;;;;;;5032:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5087:18;5108:9;:7;:9::i;:::-;5087:30;;5212:1;5196:4;5190:18;:23;5186:70;;;5236:9;5229:16;;;;;;5186:70;5384:1;5364:9;5358:23;:27;5354:106;;;5432:4;5438:9;5415:33;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5415:33:3;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5415:33:3;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5415:33:3;;;5401:48;;;;;;5354:106;5590:4;5596:18;:7;:16;:18::i;:::-;5573:42;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5573:42:3;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5573:42:3;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5573:42:3;;;5559:57;;;;4847:776;;;;:::o;7862:162::-;7959:4;7982:18;:25;8001:5;7982:25;;;;;;;;;;;;;;;:35;8008:8;7982:35;;;;;;;;;;;;;;;;;;;;;;;;;7975:42;;7862:162;;;;:::o;10383:125::-;10448:4;10471:30;10493:7;10471:12;:21;;:30;;;;:::i;:::-;10464:37;;10383:125;;;:::o;598:104:9:-;651:15;685:10;678:17;;598:104;:::o;16225:189:3:-;16326:2;16299:15;:24;16315:7;16299:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;16381:7;16377:2;16343:46;;16352:23;16367:7;16352:14;:23::i;:::-;16343:46;;;;;;;;;;;;16225:189;;:::o;7820:121:10:-;7889:7;7915:19;7923:3;:10;;7915:7;:19::i;:::-;7908:26;;7820:121;;;:::o;10666:351:3:-;10759:4;10783:16;10791:7;10783;:16::i;:::-;10775:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10858:13;10874:23;10889:7;10874:14;:23::i;:::-;10858:39;;10926:5;10915:16;;:7;:16;;;:51;;;;10959:7;10935:31;;:20;10947:7;10935:11;:20::i;:::-;:31;;;10915:51;:94;;;;10970:39;10994:5;11001:7;10970:23;:39::i;:::-;10915:94;10907:103;;;10666:351;;;;:::o;13707:584::-;13831:4;13804:31;;:23;13819:7;13804:14;:23::i;:::-;:31;;;13796:85;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13931:1;13917:16;;:2;:16;;;;13909:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13985:39;14006:4;14012:2;14016:7;13985:20;:39::i;:::-;14086:29;14103:1;14107:7;14086:8;:29::i;:::-;14126:35;14153:7;14126:13;:19;14140:4;14126:19;;;;;;;;;;;;;;;:26;;:35;;;;:::i;:::-;;14171:30;14193:7;14171:13;:17;14185:2;14171:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;14212:29;14229:7;14238:2;14212:12;:16;;:29;;;;;:::i;:::-;;14276:7;14272:2;14257:27;;14266:4;14257:27;;;;;;;;;;;;13707:584;;;:::o;9250:135:11:-;9321:7;9355:22;9359:3;:10;;9371:5;9355:3;:22::i;:::-;9347:31;;9340:38;;9250:135;;;;:::o;8269:233:10:-;8349:7;8358;8378:11;8391:13;8408:22;8412:3;:10;;8424:5;8408:3;:22::i;:::-;8377:53;;;;8456:3;8448:12;;8486:5;8478:14;;8440:55;;;;;;;;;8269:233;;;;;:::o;9522:211::-;9629:7;9679:44;9684:3;:10;;9704:3;9696:12;;9710;9679:4;:44::i;:::-;9671:53;;9648:78;;9522:211;;;;;:::o;8806:112:11:-;8866:7;8892:19;8900:3;:10;;8892:7;:19::i;:::-;8885:26;;8806:112;;;:::o;9811:269:3:-;9924:28;9934:4;9940:2;9944:7;9924:9;:28::i;:::-;9970:48;9993:4;9999:2;10003:7;10012:5;9970:22;:48::i;:::-;9962:111;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9811:269;;;;:::o;12246:393::-;12339:1;12325:16;;:2;:16;;;;12317:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12397:16;12405:7;12397;:16::i;:::-;12396:17;12388:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12457:45;12486:1;12490:2;12494:7;12457:20;:45::i;:::-;12513:30;12535:7;12513:13;:17;12527:2;12513:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;12554:29;12571:7;12580:2;12554:12;:16;;:29;;;;;:::i;:::-;;12624:7;12620:2;12599:33;;12616:1;12599:33;;;;;;;;;;;;12246:393;;:::o;210:725:12:-;266:13;492:1;483:5;:10;479:51;;;509:10;;;;;;;;;;;;;;;;;;;;;479:51;539:12;554:5;539:20;;569:14;593:75;608:1;600:4;:9;593:75;;625:8;;;;;;;655:2;647:10;;;;;;;;;593:75;;;677:19;709:6;699:17;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;699:17:12;;;;677:39;;726:13;751:1;742:6;:10;726:26;;769:5;762:12;;784:114;799:1;791:4;:9;784:114;;859:2;852:4;:9;;;;;;847:2;:14;834:29;;816:6;823:7;;;;;;;816:15;;;;;;;;;;;:47;;;;;;;;;;;885:2;877:10;;;;;;;;;784:114;;;921:6;907:21;;;;;;210:725;;;;:::o;7588:149:10:-;7672:4;7695:35;7705:3;:10;;7725:3;7717:12;;7695:9;:35::i;:::-;7688:42;;7588:149;;;;:::o;4491:108::-;4547:7;4573:3;:12;;:19;;;;4566:26;;4491:108;;;:::o;17010:93:3:-;;;;:::o;8365:135:11:-;8435:4;8458:35;8466:3;:10;;8486:5;8478:14;;8458:7;:35::i;:::-;8451:42;;8365:135;;;;:::o;8068:129::-;8135:4;8158:32;8163:3;:10;;8183:5;8175:14;;8158:4;:32::i;:::-;8151:39;;8068:129;;;;:::o;7027:183:10:-;7116:4;7139:64;7144:3;:10;;7164:3;7156:12;;7194:5;7178:23;;7170:32;;7139:4;:64::i;:::-;7132:71;;7027:183;;;;;:::o;4452:201:11:-;4519:7;4567:5;4546:3;:11;;:18;;;;:26;4538:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4628:3;:11;;4640:5;4628:18;;;;;;;;;;;;;;;;4621:25;;4452:201;;;;:::o;4942:274:10:-;5009:7;5018;5067:5;5045:3;:12;;:19;;;;:27;5037:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5122:22;5147:3;:12;;5160:5;5147:19;;;;;;;;;;;;;;;;;;5122:44;;5184:5;:10;;;5196:5;:12;;;5176:33;;;;;4942:274;;;;;:::o;6403:315::-;6497:7;6516:16;6535:3;:12;;:17;6548:3;6535:17;;;;;;;;;;;;6516:36;;6582:1;6570:8;:13;;6585:12;6562:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;6562:36:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6651:3;:12;;6675:1;6664:8;:12;6651:26;;;;;;;;;;;;;;;;;;:33;;;6644:40;;;6403:315;;;;;:::o;4013:107:11:-;4069:7;4095:3;:11;;:18;;;;4088:25;;4013:107;;;:::o;15524:589:3:-;15644:4;15669:15;:2;:13;;;:15::i;:::-;15664:58;;15707:4;15700:11;;;;15664:58;15731:23;15757:246;15809:45;;;15868:12;:10;:12::i;:::-;15894:4;15912:7;15933:5;15773:175;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;15773:175:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;15773:175:3;;;;;;;38:4:-1;29:7;25:18;67:10;61:17;96:58;199:8;192:4;186;182:15;179:29;167:10;160:49;0:215;;;15773:175:3;15757:246;;;;;;;;;;;;;;;;;:2;:15;;;;:246;;;;;:::i;:::-;15731:272;;16013:13;16040:10;16029:32;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;16029:32:3;;;;;;;;;;;;;;;;16013:48;;1078:10;16089:16;;16079:26;;;:6;:26;;;;16071:35;;;;15524:589;;;;;;;:::o;4278:123:10:-;4349:4;4393:1;4372:3;:12;;:17;4385:3;4372:17;;;;;;;;;;;;:22;;4365:29;;4278:123;;;;:::o;2212:1512:11:-;2278:4;2394:18;2415:3;:12;;:19;2428:5;2415:19;;;;;;;;;;;;2394:40;;2463:1;2449:10;:15;2445:1273;;2806:21;2843:1;2830:10;:14;2806:38;;2858:17;2899:1;2878:3;:11;;:18;;;;:22;2858:42;;3140:17;3160:3;:11;;3172:9;3160:22;;;;;;;;;;;;;;;;3140:42;;3303:9;3274:3;:11;;3286:13;3274:26;;;;;;;;;;;;;;;:38;;;;3420:1;3404:13;:17;3378:3;:12;;:23;3391:9;3378:23;;;;;;;;;;;:43;;;;3527:3;:11;;:17;;;;;;;;;;;;;;;;;;;;;;;;3619:3;:12;;:19;3632:5;3619:19;;;;;;;;;;;3612:26;;;3660:4;3653:11;;;;;;;;2445:1273;3702:5;3695:12;;;2212:1512;;;;;:::o;1640:404::-;1703:4;1724:21;1734:3;1739:5;1724:9;:21::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1761:23:11;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;1836:678:10:-;1912:4;2026:16;2045:3;:12;;:17;2058:3;2045:17;;;;;;;;;;;;2026:36;;2089:1;2077:8;:13;2073:435;;;2143:3;:12;;2161:38;;;;;;;;2178:3;2161:38;;;;2191:5;2161:38;;;2143:57;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2143:57:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2355:3;:12;;:19;;;;2335:3;:12;;:17;2348:3;2335:17;;;;;;;;;;;:39;;;;2395:4;2388:11;;;;;2073:435;2466:5;2430:3;:12;;2454:1;2443:8;:12;2430:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2492:5;2485:12;;;1836:678;;;;;;:::o;726:413:8:-;786:4;989:12;1098:7;1086:20;1078:28;;1131:1;1124:4;:8;1117:15;;;726:413;;;:::o;3581:193::-;3684:12;3715:52;3737:6;3745:4;3751:1;3754:12;3715:21;:52::i;:::-;3708:59;;3581:193;;;;;:::o;3805:127:11:-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;4608:523:8:-;4735:12;4792:5;4767:21;:30;;4759:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4858:18;4869:6;4858:10;:18::i;:::-;4850:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4981:12;4995:23;5022:6;:11;;5042:5;5050:4;5022:33;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5022:33:8;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;19;14:27;;;;67:4;61:11;56:16;;134:4;130:9;123:4;105:16;101:27;97:43;94:1;90:51;84:4;77:65;157:16;154:1;147:27;211:16;208:1;201:4;198:1;194:12;179:49;5:228;;14:27;32:4;27:9;;5:228;;4980:75:8;;;;5072:52;5090:7;5099:10;5111:12;5072:17;:52::i;:::-;5065:59;;;;4608:523;;;;;;:::o;7091:725::-;7206:12;7234:7;7230:580;;;7264:10;7257:17;;;;7230:580;7395:1;7375:10;:17;:21;7371:429;;;7633:10;7627:17;7693:15;7680:10;7676:2;7672:19;7665:44;7582:145;7772:12;7765:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;7765:20:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7091:725;;;;;;:::o",
    "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.6.2;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\";\n\ncontract FakeMeebits is IERC721Metadata, ERC721 {\n    mapping(address => bool) public whitelist;\n\n    constructor() public ERC721(\"Fake Meebits\", \"FMB\") {\n        _mint(msg.sender, 1);\n        whitelist[msg.sender] = true;\n        _setBaseURI(\"https://meebits.larvalabs.com/meebit/\");\n    }\n\n    function mintAToken(uint256 _token) public onlyMinter {\n        _mint(msg.sender, _token);\n    }\n\n    function manageMinter(address newMinter, bool permission)\n        public\n        onlyMinter\n    {\n        whitelist[newMinter] = permission;\n    }\n\n    modifier onlyMinter() {\n        require(whitelist[msg.sender], \"Account Not Whitelisted\");\n        _;\n    }\n}\n",
    "sourcePath": "/home/aymeric/Desktop/erc721-ux/contracts/FakeMeebits.sol",
    "ast": {
      "absolutePath": "project:/contracts/FakeMeebits.sol",
      "exportedSymbols": {
        "FakeMeebits": [
          3011
        ]
      },
      "id": 3012,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 2933,
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".2"
          ],
          "nodeType": "PragmaDirective",
          "src": "32:23:14"
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "id": 2934,
          "nodeType": "ImportDirective",
          "scope": 3012,
          "sourceUnit": 1317,
          "src": "57:57:14",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
          "file": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
          "id": 2935,
          "nodeType": "ImportDirective",
          "scope": 3012,
          "sourceUnit": 1470,
          "src": "115:66:14",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 2936,
                "name": "IERC721Metadata",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1469,
                "src": "207:15:14",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IERC721Metadata_$1469",
                  "typeString": "contract IERC721Metadata"
                }
              },
              "id": 2937,
              "nodeType": "InheritanceSpecifier",
              "src": "207:15:14"
            },
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 2938,
                "name": "ERC721",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1316,
                "src": "224:6:14",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_ERC721_$1316",
                  "typeString": "contract ERC721"
                }
              },
              "id": 2939,
              "nodeType": "InheritanceSpecifier",
              "src": "224:6:14"
            }
          ],
          "contractDependencies": [
            52,
            62,
            1316,
            1419,
            1446,
            1469,
            1793
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "id": 3011,
          "linearizedBaseContracts": [
            3011,
            1316,
            1446,
            1469,
            1419,
            52,
            62,
            1793
          ],
          "name": "FakeMeebits",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "functionSelector": "9b19251a",
              "id": 2943,
              "name": "whitelist",
              "nodeType": "VariableDeclaration",
              "overrides": null,
              "scope": 3011,
              "src": "237:41:14",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "typeName": {
                "id": 2942,
                "keyType": {
                  "id": 2940,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "245:7:14",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "237:24:14",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueType": {
                  "id": 2941,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "256:4:14",
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
              "body": {
                "id": 2967,
                "nodeType": "Block",
                "src": "336:137:14",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 2951,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "352:3:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2952,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "352:10:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 2953,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "364:1:14",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "id": 2950,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1055,
                        "src": "346:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 2954,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "346:20:14",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2955,
                    "nodeType": "ExpressionStatement",
                    "src": "346:20:14"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 2961,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 2956,
                          "name": "whitelist",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2943,
                          "src": "376:9:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 2959,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 2957,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "386:3:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2958,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "386:10:14",
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
                        "src": "376:21:14",
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
                        "id": 2960,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "400:4:14",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "376:28:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 2962,
                    "nodeType": "ExpressionStatement",
                    "src": "376:28:14"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "68747470733a2f2f6d6565626974732e6c617276616c6162732e636f6d2f6d65656269742f",
                          "id": 2964,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "426:39:14",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_0d18b0985cabdff2cfdf3f703eaa511b3a434348792814f145352fc8fd139c5e",
                            "typeString": "literal_string \"https://meebits.larvalabs.com/meebit/\""
                          },
                          "value": "https://meebits.larvalabs.com/meebit/"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_0d18b0985cabdff2cfdf3f703eaa511b3a434348792814f145352fc8fd139c5e",
                            "typeString": "literal_string \"https://meebits.larvalabs.com/meebit/\""
                          }
                        ],
                        "id": 2963,
                        "name": "_setBaseURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1225,
                        "src": "414:11:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory)"
                        }
                      },
                      "id": 2965,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "414:52:14",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2966,
                    "nodeType": "ExpressionStatement",
                    "src": "414:52:14"
                  }
                ]
              },
              "documentation": null,
              "id": 2968,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "hexValue": "46616b65204d656562697473",
                      "id": 2946,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "313:14:14",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_5e2d56b48e9073cc82909b01049768a5e6f578b7cc938390a6a3da94725af6d6",
                        "typeString": "literal_string \"Fake Meebits\""
                      },
                      "value": "Fake Meebits"
                    },
                    {
                      "argumentTypes": null,
                      "hexValue": "464d42",
                      "id": 2947,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "329:5:14",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_37097b8be6a4bb0d6e4ebf9a0017144591b4af157fbe45c853ae02f34d2d584f",
                        "typeString": "literal_string \"FMB\""
                      },
                      "value": "FMB"
                    }
                  ],
                  "id": 2948,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 2945,
                    "name": "ERC721",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1316,
                    "src": "306:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_contract$_ERC721_$1316_$",
                      "typeString": "type(contract ERC721)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "306:29:14"
                }
              ],
              "name": "",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 2944,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "296:2:14"
              },
              "returnParameters": {
                "id": 2949,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "336:0:14"
              },
              "scope": 3011,
              "src": "285:188:14",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 2981,
                "nodeType": "Block",
                "src": "533:42:14",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 2976,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "549:3:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 2977,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "549:10:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 2978,
                          "name": "_token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2970,
                          "src": "561:6:14",
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
                        "id": 2975,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1055,
                        "src": "543:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 2979,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "543:25:14",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 2980,
                    "nodeType": "ExpressionStatement",
                    "src": "543:25:14"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "bfcd198a",
              "id": 2982,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 2973,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 2972,
                    "name": "onlyMinter",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3010,
                    "src": "522:10:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "522:10:14"
                }
              ],
              "name": "mintAToken",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 2971,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2970,
                    "name": "_token",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 2982,
                    "src": "499:14:14",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 2969,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "499:7:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "498:16:14"
              },
              "returnParameters": {
                "id": 2974,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "533:0:14"
              },
              "scope": 3011,
              "src": "479:96:14",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 2997,
                "nodeType": "Block",
                "src": "677:50:14",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 2995,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 2991,
                          "name": "whitelist",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2943,
                          "src": "687:9:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 2993,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 2992,
                          "name": "newMinter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2984,
                          "src": "697:9:14",
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
                        "src": "687:20:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "id": 2994,
                        "name": "permission",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2986,
                        "src": "710:10:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "687:33:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 2996,
                    "nodeType": "ExpressionStatement",
                    "src": "687:33:14"
                  }
                ]
              },
              "documentation": null,
              "functionSelector": "7e7dd60b",
              "id": 2998,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "arguments": null,
                  "id": 2989,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 2988,
                    "name": "onlyMinter",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3010,
                    "src": "662:10:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_modifier$__$",
                      "typeString": "modifier ()"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "662:10:14"
                }
              ],
              "name": "manageMinter",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 2987,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 2984,
                    "name": "newMinter",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 2998,
                    "src": "603:17:14",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 2983,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "603:7:14",
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
                    "id": 2986,
                    "name": "permission",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 2998,
                    "src": "622:15:14",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 2985,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "622:4:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "602:36:14"
              },
              "returnParameters": {
                "id": 2990,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "677:0:14"
              },
              "scope": 3011,
              "src": "581:146:14",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 3009,
                "nodeType": "Block",
                "src": "755:85:14",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 3001,
                            "name": "whitelist",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2943,
                            "src": "773:9:14",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 3004,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 3002,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "783:3:14",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 3003,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "783:10:14",
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
                          "src": "773:21:14",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "4163636f756e74204e6f742057686974656c6973746564",
                          "id": 3005,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "796:25:14",
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
                        "id": 3000,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -18,
                          -18
                        ],
                        "referencedDeclaration": -18,
                        "src": "765:7:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 3006,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "765:57:14",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 3007,
                    "nodeType": "ExpressionStatement",
                    "src": "765:57:14"
                  },
                  {
                    "id": 3008,
                    "nodeType": "PlaceholderStatement",
                    "src": "832:1:14"
                  }
                ]
              },
              "documentation": null,
              "id": 3010,
              "name": "onlyMinter",
              "nodeType": "ModifierDefinition",
              "overrides": null,
              "parameters": {
                "id": 2999,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "752:2:14"
              },
              "src": "733:107:14",
              "virtual": false,
              "visibility": "internal"
            }
          ],
          "scope": 3012,
          "src": "183:659:14"
        }
      ],
      "src": "32:811:14"
    },
    "legacyAST": {
      "attributes": {
        "absolutePath": "project:/contracts/FakeMeebits.sol",
        "exportedSymbols": {
          "FakeMeebits": [
            3011
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
          "id": 2933,
          "name": "PragmaDirective",
          "src": "32:23:14"
        },
        {
          "attributes": {
            "SourceUnit": 1317,
            "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
            "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
            "scope": 3012,
            "symbolAliases": [
              null
            ],
            "unitAlias": ""
          },
          "id": 2934,
          "name": "ImportDirective",
          "src": "57:57:14"
        },
        {
          "attributes": {
            "SourceUnit": 1470,
            "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
            "file": "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol",
            "scope": 3012,
            "symbolAliases": [
              null
            ],
            "unitAlias": ""
          },
          "id": 2935,
          "name": "ImportDirective",
          "src": "115:66:14"
        },
        {
          "attributes": {
            "abstract": false,
            "contractDependencies": [
              52,
              62,
              1316,
              1419,
              1446,
              1469,
              1793
            ],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "linearizedBaseContracts": [
              3011,
              1316,
              1446,
              1469,
              1419,
              52,
              62,
              1793
            ],
            "name": "FakeMeebits",
            "scope": 3012
          },
          "children": [
            {
              "attributes": {
                "arguments": null
              },
              "children": [
                {
                  "attributes": {
                    "contractScope": null,
                    "name": "IERC721Metadata",
                    "referencedDeclaration": 1469,
                    "type": "contract IERC721Metadata"
                  },
                  "id": 2936,
                  "name": "UserDefinedTypeName",
                  "src": "207:15:14"
                }
              ],
              "id": 2937,
              "name": "InheritanceSpecifier",
              "src": "207:15:14"
            },
            {
              "attributes": {
                "arguments": null
              },
              "children": [
                {
                  "attributes": {
                    "contractScope": null,
                    "name": "ERC721",
                    "referencedDeclaration": 1316,
                    "type": "contract ERC721"
                  },
                  "id": 2938,
                  "name": "UserDefinedTypeName",
                  "src": "224:6:14"
                }
              ],
              "id": 2939,
              "name": "InheritanceSpecifier",
              "src": "224:6:14"
            },
            {
              "attributes": {
                "constant": false,
                "functionSelector": "9b19251a",
                "name": "whitelist",
                "overrides": null,
                "scope": 3011,
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
                      "id": 2940,
                      "name": "ElementaryTypeName",
                      "src": "245:7:14"
                    },
                    {
                      "attributes": {
                        "name": "bool",
                        "type": "bool"
                      },
                      "id": 2941,
                      "name": "ElementaryTypeName",
                      "src": "256:4:14"
                    }
                  ],
                  "id": 2942,
                  "name": "Mapping",
                  "src": "237:24:14"
                }
              ],
              "id": 2943,
              "name": "VariableDeclaration",
              "src": "237:41:14"
            },
            {
              "attributes": {
                "documentation": null,
                "implemented": true,
                "isConstructor": true,
                "kind": "constructor",
                "name": "",
                "overrides": null,
                "scope": 3011,
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
                  "id": 2944,
                  "name": "ParameterList",
                  "src": "296:2:14"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 2949,
                  "name": "ParameterList",
                  "src": "336:0:14"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "argumentTypes": null,
                        "overloadedDeclarations": [
                          null
                        ],
                        "referencedDeclaration": 1316,
                        "type": "type(contract ERC721)",
                        "value": "ERC721"
                      },
                      "id": 2945,
                      "name": "Identifier",
                      "src": "306:6:14"
                    },
                    {
                      "attributes": {
                        "argumentTypes": null,
                        "hexvalue": "46616b65204d656562697473",
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "subdenomination": null,
                        "token": "string",
                        "type": "literal_string \"Fake Meebits\"",
                        "value": "Fake Meebits"
                      },
                      "id": 2946,
                      "name": "Literal",
                      "src": "313:14:14"
                    },
                    {
                      "attributes": {
                        "argumentTypes": null,
                        "hexvalue": "464d42",
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "subdenomination": null,
                        "token": "string",
                        "type": "literal_string \"FMB\"",
                        "value": "FMB"
                      },
                      "id": 2947,
                      "name": "Literal",
                      "src": "329:5:14"
                    }
                  ],
                  "id": 2948,
                  "name": "ModifierInvocation",
                  "src": "306:29:14"
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
                                  },
                                  {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1055,
                                "type": "function (address,uint256)",
                                "value": "_mint"
                              },
                              "id": 2950,
                              "name": "Identifier",
                              "src": "346:5:14"
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
                                  "id": 2951,
                                  "name": "Identifier",
                                  "src": "352:3:14"
                                }
                              ],
                              "id": 2952,
                              "name": "MemberAccess",
                              "src": "352:10:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "31",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "number",
                                "type": "int_const 1",
                                "value": "1"
                              },
                              "id": 2953,
                              "name": "Literal",
                              "src": "364:1:14"
                            }
                          ],
                          "id": 2954,
                          "name": "FunctionCall",
                          "src": "346:20:14"
                        }
                      ],
                      "id": 2955,
                      "name": "ExpressionStatement",
                      "src": "346:20:14"
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
                                    "referencedDeclaration": 2943,
                                    "type": "mapping(address => bool)",
                                    "value": "whitelist"
                                  },
                                  "id": 2956,
                                  "name": "Identifier",
                                  "src": "376:9:14"
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
                                      "id": 2957,
                                      "name": "Identifier",
                                      "src": "386:3:14"
                                    }
                                  ],
                                  "id": 2958,
                                  "name": "MemberAccess",
                                  "src": "386:10:14"
                                }
                              ],
                              "id": 2959,
                              "name": "IndexAccess",
                              "src": "376:21:14"
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
                              "id": 2960,
                              "name": "Literal",
                              "src": "400:4:14"
                            }
                          ],
                          "id": 2961,
                          "name": "Assignment",
                          "src": "376:28:14"
                        }
                      ],
                      "id": 2962,
                      "name": "ExpressionStatement",
                      "src": "376:28:14"
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
                                    "typeIdentifier": "t_stringliteral_0d18b0985cabdff2cfdf3f703eaa511b3a434348792814f145352fc8fd139c5e",
                                    "typeString": "literal_string \"https://meebits.larvalabs.com/meebit/\""
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1225,
                                "type": "function (string memory)",
                                "value": "_setBaseURI"
                              },
                              "id": 2963,
                              "name": "Identifier",
                              "src": "414:11:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "hexvalue": "68747470733a2f2f6d6565626974732e6c617276616c6162732e636f6d2f6d65656269742f",
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "subdenomination": null,
                                "token": "string",
                                "type": "literal_string \"https://meebits.larvalabs.com/meebit/\"",
                                "value": "https://meebits.larvalabs.com/meebit/"
                              },
                              "id": 2964,
                              "name": "Literal",
                              "src": "426:39:14"
                            }
                          ],
                          "id": 2965,
                          "name": "FunctionCall",
                          "src": "414:52:14"
                        }
                      ],
                      "id": 2966,
                      "name": "ExpressionStatement",
                      "src": "414:52:14"
                    }
                  ],
                  "id": 2967,
                  "name": "Block",
                  "src": "336:137:14"
                }
              ],
              "id": 2968,
              "name": "FunctionDefinition",
              "src": "285:188:14"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "bfcd198a",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "name": "mintAToken",
                "overrides": null,
                "scope": 3011,
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
                        "name": "_token",
                        "overrides": null,
                        "scope": 2982,
                        "stateVariable": false,
                        "storageLocation": "default",
                        "type": "uint256",
                        "value": null,
                        "visibility": "internal"
                      },
                      "children": [
                        {
                          "attributes": {
                            "name": "uint256",
                            "type": "uint256"
                          },
                          "id": 2969,
                          "name": "ElementaryTypeName",
                          "src": "499:7:14"
                        }
                      ],
                      "id": 2970,
                      "name": "VariableDeclaration",
                      "src": "499:14:14"
                    }
                  ],
                  "id": 2971,
                  "name": "ParameterList",
                  "src": "498:16:14"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 2974,
                  "name": "ParameterList",
                  "src": "533:0:14"
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
                        "referencedDeclaration": 3010,
                        "type": "modifier ()",
                        "value": "onlyMinter"
                      },
                      "id": 2972,
                      "name": "Identifier",
                      "src": "522:10:14"
                    }
                  ],
                  "id": 2973,
                  "name": "ModifierInvocation",
                  "src": "522:10:14"
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
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 1055,
                                "type": "function (address,uint256)",
                                "value": "_mint"
                              },
                              "id": 2975,
                              "name": "Identifier",
                              "src": "543:5:14"
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
                                  "id": 2976,
                                  "name": "Identifier",
                                  "src": "549:3:14"
                                }
                              ],
                              "id": 2977,
                              "name": "MemberAccess",
                              "src": "549:10:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 2970,
                                "type": "uint256",
                                "value": "_token"
                              },
                              "id": 2978,
                              "name": "Identifier",
                              "src": "561:6:14"
                            }
                          ],
                          "id": 2979,
                          "name": "FunctionCall",
                          "src": "543:25:14"
                        }
                      ],
                      "id": 2980,
                      "name": "ExpressionStatement",
                      "src": "543:25:14"
                    }
                  ],
                  "id": 2981,
                  "name": "Block",
                  "src": "533:42:14"
                }
              ],
              "id": 2982,
              "name": "FunctionDefinition",
              "src": "479:96:14"
            },
            {
              "attributes": {
                "documentation": null,
                "functionSelector": "7e7dd60b",
                "implemented": true,
                "isConstructor": false,
                "kind": "function",
                "name": "manageMinter",
                "overrides": null,
                "scope": 3011,
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
                        "name": "newMinter",
                        "overrides": null,
                        "scope": 2998,
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
                          "id": 2983,
                          "name": "ElementaryTypeName",
                          "src": "603:7:14"
                        }
                      ],
                      "id": 2984,
                      "name": "VariableDeclaration",
                      "src": "603:17:14"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "permission",
                        "overrides": null,
                        "scope": 2998,
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
                          "id": 2985,
                          "name": "ElementaryTypeName",
                          "src": "622:4:14"
                        }
                      ],
                      "id": 2986,
                      "name": "VariableDeclaration",
                      "src": "622:15:14"
                    }
                  ],
                  "id": 2987,
                  "name": "ParameterList",
                  "src": "602:36:14"
                },
                {
                  "attributes": {
                    "parameters": [
                      null
                    ]
                  },
                  "children": [],
                  "id": 2990,
                  "name": "ParameterList",
                  "src": "677:0:14"
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
                        "referencedDeclaration": 3010,
                        "type": "modifier ()",
                        "value": "onlyMinter"
                      },
                      "id": 2988,
                      "name": "Identifier",
                      "src": "662:10:14"
                    }
                  ],
                  "id": 2989,
                  "name": "ModifierInvocation",
                  "src": "662:10:14"
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
                                    "referencedDeclaration": 2943,
                                    "type": "mapping(address => bool)",
                                    "value": "whitelist"
                                  },
                                  "id": 2991,
                                  "name": "Identifier",
                                  "src": "687:9:14"
                                },
                                {
                                  "attributes": {
                                    "argumentTypes": null,
                                    "overloadedDeclarations": [
                                      null
                                    ],
                                    "referencedDeclaration": 2984,
                                    "type": "address",
                                    "value": "newMinter"
                                  },
                                  "id": 2992,
                                  "name": "Identifier",
                                  "src": "697:9:14"
                                }
                              ],
                              "id": 2993,
                              "name": "IndexAccess",
                              "src": "687:20:14"
                            },
                            {
                              "attributes": {
                                "argumentTypes": null,
                                "overloadedDeclarations": [
                                  null
                                ],
                                "referencedDeclaration": 2986,
                                "type": "bool",
                                "value": "permission"
                              },
                              "id": 2994,
                              "name": "Identifier",
                              "src": "710:10:14"
                            }
                          ],
                          "id": 2995,
                          "name": "Assignment",
                          "src": "687:33:14"
                        }
                      ],
                      "id": 2996,
                      "name": "ExpressionStatement",
                      "src": "687:33:14"
                    }
                  ],
                  "id": 2997,
                  "name": "Block",
                  "src": "677:50:14"
                }
              ],
              "id": 2998,
              "name": "FunctionDefinition",
              "src": "581:146:14"
            },
            {
              "attributes": {
                "documentation": null,
                "name": "onlyMinter",
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
                  "id": 2999,
                  "name": "ParameterList",
                  "src": "752:2:14"
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
                              "id": 3000,
                              "name": "Identifier",
                              "src": "765:7:14"
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
                                    "referencedDeclaration": 2943,
                                    "type": "mapping(address => bool)",
                                    "value": "whitelist"
                                  },
                                  "id": 3001,
                                  "name": "Identifier",
                                  "src": "773:9:14"
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
                                      "id": 3002,
                                      "name": "Identifier",
                                      "src": "783:3:14"
                                    }
                                  ],
                                  "id": 3003,
                                  "name": "MemberAccess",
                                  "src": "783:10:14"
                                }
                              ],
                              "id": 3004,
                              "name": "IndexAccess",
                              "src": "773:21:14"
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
                              "id": 3005,
                              "name": "Literal",
                              "src": "796:25:14"
                            }
                          ],
                          "id": 3006,
                          "name": "FunctionCall",
                          "src": "765:57:14"
                        }
                      ],
                      "id": 3007,
                      "name": "ExpressionStatement",
                      "src": "765:57:14"
                    },
                    {
                      "id": 3008,
                      "name": "PlaceholderStatement",
                      "src": "832:1:14"
                    }
                  ],
                  "id": 3009,
                  "name": "Block",
                  "src": "755:85:14"
                }
              ],
              "id": 3010,
              "name": "ModifierDefinition",
              "src": "733:107:14"
            }
          ],
          "id": 3011,
          "name": "ContractDefinition",
          "src": "183:659:14"
        }
      ],
      "id": 3012,
      "name": "SourceUnit",
      "src": "32:811:14"
    },
    "compiler": {
      "name": "solc",
      "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {},
        "links": {},
        "address": "0x2D48C391DC6b9Db2A3FdadCD2b64B5eCb0B11B5E",
        "transactionHash": "0x0df4c1ae180816b101afa9812de2c1d7133211984c3f6f4b42d2878998b181f6"
      },
      "11155111": {
        "events": {},
        "links": {},
        "address": "0xD1d148Be044AEB4948B48A03BeA2874871a26003",
        "transactionHash": "0xefc6e9f9ba8ad0b223b747be124cd857b4c615671e16820bedf8fbd74f74f17b"
      }
    },
    "schemaVersion": "3.4.11",
    "updatedAt": "2022-11-25T08:11:37.761Z",
    "networkType": "ethereum",
    "devdoc": {
      "methods": {
        "approve(address,uint256)": {
          "details": "See {IERC721-approve}."
        },
        "balanceOf(address)": {
          "details": "See {IERC721-balanceOf}."
        },
        "baseURI()": {
          "details": "Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID."
        },
        "getApproved(uint256)": {
          "details": "See {IERC721-getApproved}."
        },
        "isApprovedForAll(address,address)": {
          "details": "See {IERC721-isApprovedForAll}."
        },
        "name()": {
          "details": "See {IERC721Metadata-name}."
        },
        "ownerOf(uint256)": {
          "details": "See {IERC721-ownerOf}."
        },
        "safeTransferFrom(address,address,uint256)": {
          "details": "See {IERC721-safeTransferFrom}."
        },
        "safeTransferFrom(address,address,uint256,bytes)": {
          "details": "See {IERC721-safeTransferFrom}."
        },
        "setApprovalForAll(address,bool)": {
          "details": "See {IERC721-setApprovalForAll}."
        },
        "supportsInterface(bytes4)": {
          "details": "See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas."
        },
        "symbol()": {
          "details": "See {IERC721Metadata-symbol}."
        },
        "tokenByIndex(uint256)": {
          "details": "See {IERC721Enumerable-tokenByIndex}."
        },
        "tokenOfOwnerByIndex(address,uint256)": {
          "details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
        },
        "tokenURI(uint256)": {
          "details": "See {IERC721Metadata-tokenURI}."
        },
        "totalSupply()": {
          "details": "See {IERC721Enumerable-totalSupply}."
        },
        "transferFrom(address,address,uint256)": {
          "details": "See {IERC721-transferFrom}."
        }
      }
    },
    "userdoc": {
      "methods": {}
    }
  }]
export default Meebits