const fs = require("fs");

const  mustBeInMetricFile = (array, metric) => {
  return new Promise((resolve, reject) => {
    const rows = array.filter((item) => item.metric === metric);
    if (!rows || rows.length === 0) {
      reject({
        message: 'metric does not exist',
        status: 404,
      });
    }
    const sum = rows.reduce((total,data)=>total+ data.value ,0)
    resolve(sum);
  });
}

const  retriveMetrics = (filename) => {
  const rawData = fs.readFileSync(filename, 'utf8');
  return JSON.parse(rawData);
}

const  writeJSONFile = (filename, content) => {
  const currentDate = new Date();
  const updatedContent = content.filter(data => {
    const { createdAt } = data;
    const hours = Math.abs((new Date(createdAt)) - currentDate)/ 36e5;
    return hours < 1;
  });
  fs.writeFileSync(filename, JSON.stringify(updatedContent), "utf8", (err) => {
    if (err) {
      console.log(err);
    }
  });
  return updatedContent;
}

module.exports = {
  writeJSONFile,
  retriveMetrics,
  mustBeInMetricFile
};
