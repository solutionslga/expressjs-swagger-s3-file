/* eslint-disable no-undef */
require('dotenv').config();
module.exports = {
  credentials: {
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY,
  },
  bucket: process.env.BUCKET,
  key: process.env.KEY,
};
