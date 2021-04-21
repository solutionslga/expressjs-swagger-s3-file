const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const AWS = require("aws-sdk");
const s3Config = require("./config");
AWS.config.update(s3Config.credentials);
const s3 = new AWS.S3();
const main = async () => {
  const params = { Bucket: s3Config.bucket, Key: s3Config.key };
  const data = await s3.getObject(params).promise();
  const body = await Buffer.from(data.Body).toString("utf8");
  const swaggerDocument = YAML.parse(body);
  app.use("/docs", swaggerUi.serve);
  app.get("/docs", swaggerUi.setup(swaggerDocument));
  const port = argv.port || argv.p || 3000;
  app.listen(port);
};
main();
