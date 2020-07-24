# MetricSumAPI

**To set up the project you must have node and npm installed first**\
*You can look up the installation procedure at node's official website : [Nodejs](https://nodejs.org/en/download/)*

After the installation of node go inside the directory where you have downloaded the project and run **npm install** from cmd/control prompt/terminal.\
After doing the npm install command run **npm install --save nodemon**.\
After doing the previous command do **npm run dev** or **node index.js** command from the same directory and terminal to start the project.

The project contains several folders and files and I have displayed project structure below. The important files that capture the essentail functionality and bolded.

- images
- data
  - **metric.json** (this file contains where the metric data will be stored and retrieved from)
- helpers
  - **helpers.js**
- models
  - **metric.model.js**
- node_modules
- routes
  - **index.routes.js**
  - **metric.routes.js**
- **index.js**

You can use postman to send API requests when the server is running.

### POST Request
![POST Request](https://github.com/Nosherwan-Akram/MetricSumAPI/blob/master/images/POST.png)

### GET Request
![GET Request](https://github.com/Nosherwan-Akram/MetricSumAPI/blob/master/images/GET.png)

### metric.json
![metric.json](https://github.com/Nosherwan-Akram/MetricSumAPI/blob/master/images/metric.json.png)
