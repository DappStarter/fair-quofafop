require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame foot blanket response office coast hunt light army giggle'; 
let testAccounts = [
"0x24275ffd4f24afdcec239226f6791e9b570fc38bc9e0d7211c573b1780d8cfcd",
"0xe92d01d0a6e300ab33f7d661402cb20ebe156c65949e56cc4a1b387689ad7dbd",
"0xcea3547d483c262101ec1134f1b84ddb43793b39dd1bfc4f1c385785266df911",
"0x373efeca63c3548616b15588fc30ae8c33d3c351f40a129a19121420099407fb",
"0xee258e0c8fb1f17e2cbfbab19e776c36a55d002fad3c2ea5d9b83b5540724545",
"0xaad303215af45a9b18a6fc692b329c2e1f3664472596dae5033ae3f2d825f184",
"0x350cfc415350d064a74098013af20bee1eb08d26d4b8a7b35685597cd3eed3bf",
"0xe40fd874d18a00e4f34e2d1729b7f29643601833ee2045bf48a3b507dc9c92f4",
"0x3e6c5ba5cdbfa7256667ccab89a00832f1598a85ebae6135beef385fd4f577bc",
"0xdd5d5577feec3f341e51eec25e3413fb50bb24ac785a71117ca03f8d662db256"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
