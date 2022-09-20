const express = require('express');
const app = express();
const ethers = require('ethers');
const tbl = require('@tableland/sdk');

const privateKey = 'PRIVATE_KEY_STRING';
const wallet = new ethers.Wallet(privateKey);

const provider = new ethers.providers.AlchemyProvider(
  'maticmum',
  'ALCHEMY_API_KEY'
);

const signer = wallet.connect(provider);
const tableland = await tbl.connect({
  signer,
  network: 'testnet',
  chain: 'polygon-mumbai',
});
const { name } = await tableland.create(
  `id integer primary key, name text`, // Table schema definition
  {
    prefix: `my_cms_table`, // Optional `prefix` used to define a human-readable string
  }
);

console.log(name);

const writeRes = await tableland.write(
  `INSERT INTO ${name} (id, name) VALUES (0, 'Bobby Tables');`
);

const readRes = await tableland.read(`SELECT * FROM ${name};`);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
