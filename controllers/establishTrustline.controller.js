const axios = require("axios");
const { sendResponse } = require("../utils");

const {
  TransactionBuilder,
  Account,
  Networks,
  Asset,
  Operation,
} = require("@stellar/stellar-sdk");

const {
  STELLAR_RPC_URL,
  STELLAR_EXAMLE_CONNECTED_ACCOUNT_PUBLIC_KEY
} = require("../constants");

const getEstablishTrustline= async (req, res) => {

  try {
    const accountResponse = await axios.get(
      `${STELLAR_RPC_URL}/accounts/${STELLAR_EXAMLE_CONNECTED_ACCOUNT_PUBLIC_KEY}`
    );

    const sequence = accountResponse.data.sequence;
    const account = new Account(publicKey, sequence);
    
    // 2. Create asset
    const asset = new Asset(ASSET_CODE, ASSET_ISSUER);

    // 3. Define Network Phrase
    const NETWORK_PASSPHRASE = Networks.TESTNET;

    // 4. Build the Transaction

    const tx = new TransactionBuilder(account, {
      fee: '100',
      networkPassphrase: NETWORK_PASSPHRASE,
    })
      .addOperation(Operation.changeTrust({ asset }))
      .setTimeout(30)
      .build();

    // 5. Ask StellarWalletsKit (Freighter) to sign the transaction

    const { signedTxXdr } = await kit.signTransaction(tx.toXDR(), {
      address: publicKey,
      networkPassphrase: NETWORK_PASSPHRASE,
    });

    // 6. Submit the signed transaction
    const formData = new URLSearchParams();
    formData.append('tx', signedTxXdr);
    
    const response = await axios.post(`${RPC_URL}/transactions`, formData.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    // Return the Trustline Established
    console.log('✅ Trustline established:', response.data);

    return sendResponse(res, "success", 200, "Fetch Assets", response.data);
  } catch (error) {
    return sendResponse(res, "error", 500, "Something went wrong");
  }
  
};

module.exports = {
  getEstablishTrustline,
};
