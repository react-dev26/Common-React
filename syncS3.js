const s3 = require('s3');
// const invalidateCloudfront = require('cloudfront-invalidate');

const requiredVariables = [process.env.AWS_ACCESS_KEY_ID, process.env.AWS_SECRET_ACCESS_KEY, process.env.BUCKET, process.env.ENVIRONMENT]

if (requiredVariables.includes(undefined)) {
  throw new Error('Missing required variable');
}

const s3Client = s3.createClient({
  s3Options: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1'
  }
});
const params = {
  localDir: './out',
  deleteRemoved: true,
  s3Params: {
    Bucket: process.env.BUCKET,
    ACL: 'public-read'
  }
}
const uploader = s3Client.uploadDir(params);

uploader.on('error', function(err) {
  console.error(err);
  throw new Error(err);
});

uploader.on('progress', function() {
  console.log(`Progress: ${(uploader.progressAmount/uploader.progressTotal) * 100}% done. ${uploader.progressAmount}/${uploader.progressTotal}`);
});

uploader.on('end', function() {
  console.log("Done uploading.");
  // if (process.env.ENVIRONMENT === 'production') {
  //   invalidateCloudfront();
  // }
});

// function invalidateCloudfront() {
//   console.log('Beginning Cloudfront invalidation.')
//   if (!process.env.CLOUDFRONT_DISTRIBUTION_ID) {
//     throw new Error('Missing Cloudfront distribution ID')
//   }
//   invalidateCache(process.env.CLOUDFRONT_DISTRIBUTION_ID, ['*'], {}, function(err, data) {
//     if (err) {
//       console.log('Error invalidating Cloudfront distribution');
//       throw new Error(err);
//     } else {
//       console.log('Invalidated Cloudfront successfully.')
//     }
//   });
// }