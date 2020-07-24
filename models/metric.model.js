const metricFile = "./data/metric.json";
const helper = require("../helpers/helper.js");

const getMetricSum = (metric) => {
  return new Promise(async (resolve, reject) => {
    try {
      const oldMetrics = helper.retriveMetrics(metricFile);
      const newData = helper.writeJSONFile(metricFile, oldMetrics);
      const sum = await helper.mustBeInMetricFile(newData, metric);
      resolve(sum);
    } catch (error) {
      reject(error);
    }
  });
};

const insertMetric = (metric, value) => {
  return new Promise(async (resolve) => {
    const metrics = helper.retriveMetrics(metricFile);
    metrics.push({ metric, value, createdAt: new Date() });
    helper.writeJSONFile(metricFile, metrics);
    resolve(value);
  });
};
module.exports = {
  insertMetric,
  getMetricSum,
};
