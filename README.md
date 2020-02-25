# dynamodb-cross-account-migration
DynamoDB cross account/zone migration script

This scripts migrates DynamoDB tables between different zones and/or accounts. 

Usage: 

```
$ npm install
```


Then edit index.js and fill sourceAWSConfig, destinationAWSConfig and tables.

```
$ node index.js
```