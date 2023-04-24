import express, { Router } from "express";
import axios from "axios";
import { IAudio } from "../models/IAudi";
import { ITelevision } from "../models/ITelevision";
import { IComputer } from "../models/IComputer";
import { IMobile } from "../models/IMobile";

const client = axios.create({
  baseURL: "http://localhost:1337/api",
});

const app = express();

app.use(express.json());

// GET
app.get("/", (req, res) => {
  res.send("Startsida");
});

app.get("/audios", async (req, res) => {
  const getAudio = await client.get("/audios");
  res.send(getAudio.data);
});

app.get("/mobiles", async (req, res) => {
  const getMobile = await client.get("/mobiles");
  res.send(getMobile.data);
});

app.get("/televisions", async (req, res) => {
  const getTelevision = await client.get("/televisions");
  res.send(getTelevision.data);
});

app.get("/computers", async (req, res) => {
  const getComputer = await client.get("/computers");
  res.send(getComputer.data);
});

//
// app.get("/audios/:id", (req, res) => {
//   const id = parseInt(req.params.id);

//   if (theId) {
//     res.send(theId);
//   } else {
//     res.sendStatus(404);
//   }
//   res.send(theId);
// });
//

// POST
app.post("/audios", async (req, res) => {
  const newAudio: IAudio = {
    product_name: req.body.product_name,
    description: req.body.description,
    manufacturer: req.body.manufacturer,
    price: req.body.price,
    effect: req.body.effect,
  };

  const data = { data: newAudio };
  const getAudio = await client.post("/audios", data);

  res.send(getAudio.data);
});

app.post("/mobiles", async (req, res) => {
  const newMobile: IMobile = {
    product_name: req.body.product_name,
    description: req.body.description,
    manufacturer: req.body.manufacturer,
    price: req.body.price,
    screen_type: req.body.screen_type,
  };

  const data = { data: newMobile };
  console.log(data);
  const getComputer = await client.post("/mobiles", data);

  res.send(getComputer.data);
});

app.post("/televisions", async (req, res) => {
  const newTelevision: ITelevision = {
    product_name: req.body.product_name,
    description: req.body.description,
    manufacturer: req.body.manufacturer,
    price: req.body.price,
    screen_size: req.body.screen_size,
  };

  const data = { data: newTelevision };
  const getTelevision = await client.post("/televisions", data);

  res.send(getTelevision.data);
});

app.post("/computers", async (req, res) => {
  const newComputer: IComputer = {
    product_name: req.body.product_name,
    description: req.body.description,
    manufacturer: req.body.manufacturer,
    price: req.body.price,
    processor: req.body.processor,
  };

  const data = { data: newComputer };
  const getComputer = await client.post("/computers", data);

  res.send(getComputer.data);
});

app.put("/audios/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  const newAudio: IAudio = {
    product_name: req.body.product_name,
    description: req.body.description,
    manufacturer: req.body.manufacturer,
    price: req.body.price,
    effect: req.body.effect,
  };

  const data = { data: newAudio };

  try {
    await client.put(`/audios/${id}`, data);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/mobiles/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  const newMobile: IMobile = {
    product_name: req.body.product_name,
    description: req.body.description,
    manufacturer: req.body.manufacturer,
    price: req.body.price,
    screen_type: req.body.screen_type,
  };

  const data = { data: newMobile };

  try {
    await client.put(`/mobiles/${id}`, data);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/televisions/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  const newTelevision: ITelevision = {
    product_name: req.body.product_name,
    description: req.body.description,
    manufacturer: req.body.manufacturer,
    price: req.body.price,
    screen_size: req.body.screen_size,
  };

  const data = { data: newTelevision };

  try {
    await client.put(`/televisions/${id}`, data);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/computers/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  const newComputer: IComputer = {
    product_name: req.body.product_name,
    description: req.body.description,
    manufacturer: req.body.manufacturer,
    price: req.body.price,
    processor: req.body.processor,
  };

  const data = { data: newComputer };

  try {
    await client.put(`/computers/${id}`, data);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/audios/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    await client.delete(`/audios/${id}`);
    res.send(`User width id: ${id} was deleted from the database.`);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/mobiles/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    await client.delete(`/mobiles/${id}`);
    res.send(`User width id: ${id} was deleted from the database.`);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.delete("/televisions/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    await client.delete(`/televisions/${id}`);
    res.send(`User width id: ${id} was deleted from the database.`);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/computers/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    await client.delete(`/computers/${id}`);
    res.send(`User width id: ${id} was deleted from the database.`);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
