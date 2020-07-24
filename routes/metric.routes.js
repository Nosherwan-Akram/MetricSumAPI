const express = require("express");
const router = express.Router();
const metricModel = require("../models/metric.model");

/* get metric sum value */
router.get("/:metric/sum", async (request, response) => {
  const { metric } = request.params;
  try {
    const sum = await metricModel.getMetricSum(metric);
    return response.json({ value: sum });
  } catch (error) {
    const { status, message } = error;
    return status
      ? response.status(status).json({ message })
      : response.status(500).json({ message });
  }
});

/* insert metric value*/
router.post("/:metric", async (request, response) => {
  const {
    body: { value },
    params: { metric },
  } = request;
  try {
    if (parseInt(value) != value || !Number.isInteger(parseInt(value))) {
      return response
        .status(400)
        .json({ message: "metric val must be an integer" });
    }
    await metricModel.insertMetric(metric, parseInt(value));
    return response.status(200).json();
  } catch (error) {
    const { message } = error;
    return response.status(500).json({ message });
  }
});

module.exports = router;
