const conseiljs = require('conseiljs');
const tezosNode = '';

conseiljs.setLogLevel('debug');

async function invokeContract(id, value) {
    const keystore = {
        publicKey: 'edpkuuGJ4ssH3N5k7ovwkBe16p8rVX1XLENiZ4FAayrcwUf9sCKXnG',
        privateKey: 'edskRpVqFG2FHo11aB9pzbnHBiPBWhNWdwtNyQSfEEhDf5jhFbAtNS41vg9as7LSYZv6rEbtJTwyyEg9cNDdcAkSr9Z7hfvquB',
        publicKeyHash: 'tz1WpPzK6NwWVTJcXqFvYmoA6msQeVy1YP6z',
        seed: '',
        storeType: conseiljs.StoreType.Fundraiser
    };
    const contractAddress = 'KT1Lx7XAYhySGVGG9MBFcDQo7Cxg4kDBido9';

    const result = await conseiljs.TezosNodeWriter.sendContractInvocationOperation(tezosNode, keystore, contractAddress, value, 100000, '', 1000, 100000, '{"address": "'+id+'"}', conseiljs.TezosParameterFormat.Micheline);
    console.log(`Injected operation group id ${result.operationGroupID}`);
}


function makeTransaction (id, value) {
    invokeContract(id, value)
}






module.exports = { makeTransaction }