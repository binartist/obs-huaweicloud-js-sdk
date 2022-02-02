const assert = require('assert')
const ObsClient = require('..')

const obs = new ObsClient({
	access_key_id: '<access_key_ids>',
	secret_access_key: '<secret_access_key>',
	server : '<server>',
	timeout : 60 * 5,
});

const bucketName = '<bucketname>'

obs.listObjects({
  Bucket: bucketName,
}).then(function (result) {
  if (result.CommonMsg.Status < 300) {
    
    console.log('List objects using default parameters:\n')
    var j = 0
    for (; j < result.InterfaceResult.Contents.length; j++) {
      console.log('\tKey-->' + result.InterfaceResult.Contents[j]['Key'])
      console.log('\tETag-->' + result.InterfaceResult.Contents[j]['ETag'])
    }
    console.log('\n')
  }
})
