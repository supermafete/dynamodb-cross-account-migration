var copyddb = require('copy-dynamodb-table')

var sourceAWSConfig = {
  accessKeyId: '[ACCESS_KEY_ID]',
  secretAccessKey: '[SECRET_ACCESS_KEY]',
  region: 'us-east-1'
};

var destinationAWSConfig = {
  accessKeyId: '[ACCESS_KEY_ID]',
  secretAccessKey: '[SECRET_ACCESS_KEY]/uF9ZLUo8e9s',
  region: 'us-east-1' // support cross zone copying
};

var tables = [
  {
    source: 'table1',
    destination: 'table1_dest'
  },
  {
    source: 'table2',
    destination: 'table2_dest'
  }  
];

tables.forEach(table => {
  console.log('Copying table... ' + table.source + ' to ' + table.destination);
  copyddb.copy({
    // config: globalAWSConfig,
    source: {
      tableName: table.source,  // required
      config: sourceAWSConfig   // optional , leave blank to use globalAWSConfig
    },
    destination: {
      tableName: table.destination, // required
      config: destinationAWSConfig  // optional , leave blank to use globalAWSConfig
    },
    log: true,    // default false
    create : true // create destination table if not exist
  },
  function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
});
