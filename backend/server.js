const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// get aggr data
// get data based on id
// post on id

// id is known to users and frontend.
// backend must verify data from embed

app.get("/:id/data", (req, res) => {
  const id = req.params.id;
  prisma.dataSample
    .findMany({
      where: {
        scannerId: id,
      },
    })
    .then((found) => {
      res.json(found);
    });

  //res.status(404);
});

// get day minute and second to day minute second
app.get("/search/date/:date1/:date2", (req, res) => {
  const params = req.params;
  let conv1 = new Date(date1);
  let conv2 = new Date(date2);
  if (conv1 == undefined || conv2 == undefined) {
    res.status(400);
  } else {
    prisma.dataSample
      .findMany({
        where: {
          taken: {
            lte: conv1,
            gte: conv2,
          },
        },
      })
      .then((result) => res.json(result));
  }
});

app.post("/:id/json", (req, res) => {
  const id = req.params.id;

  const data = req.body;

  let convertTaken = new Date(data.taken).toISOString();

  if (
    typeof convertTaken == undefined ||
    typeof data.avgMoisture == undefined ||
    typeof data.avgLight == undefined ||
    id == undefined
  ) {
    res.status(400);
  } else {
    prisma.dataSample
      .create({
        data: {
          taken: convertTaken,
          avgMoisture: data.avgMoisture,
          avgLight: data.avgLight,
          scannerId: id,
        },
      })
      .then((ret) => res.json(ret));
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
