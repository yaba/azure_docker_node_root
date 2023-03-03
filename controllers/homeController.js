import { Router } from "express";
const router = Router();

const homeController = router.get("/", (_, res, next) => {
  try {
    res.send("Hello World - I am running as root!");
  } catch (error) {
    console.log("An error has occurred: ", error);
    next(error);
  }
});

export default homeController;
