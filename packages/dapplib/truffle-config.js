require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle food shoulder riot machine hole coral light army giggle'; 
let testAccounts = [
"0x437b23d050c9b4ccdf728e34e722c524c177a54c66f47a8666b3cd75065abdbc",
"0x293af57fac3079f632211507140a8df4b6762b55534e6a7d34a49d2b15bdc736",
"0x0a284ba16aa471213d31adf24a4c1129f79982a56b00c70028974259e4eec67b",
"0x9b91cb23ad0fef64448303697c717556d4c02f3bfd8b5519b514b6cba6b6479c",
"0x2131f49a52c2d329ed43503c7a3b0d59044e5b82f0cf27d1cc4243c89754b88c",
"0x298de8f3219454cfb366218ba550905c160e7f587bfde19498228ac766283c2b",
"0x4a99421f05ab27cac62b136fdcb38a2d80ae0e38d915623529af76734715262d",
"0x9f178e935f1827e41c9a1676fbef8e0f66b0a4c344e0e80da031bf6562ae4021",
"0x2485c40cd739254e0267c37c0f73b547d32a8e0622368a8235f43aa38c73044d",
"0xeab3c2bc128c5a4c5c94103f86973dc6ec665445bd7a91ce9f0d4461db0ca9ea"
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
            version: '^0.8.0'
        }
    }
};

