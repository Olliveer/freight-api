import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { FreightController } from "../controllers/FreightController";

const freightRoutes = Router();

freightRoutes.get(
  "/:zip_code/:weight",
  celebrate({
    [Segments.PARAMS]: {
      zip_code: Joi.string().required().min(8),
      weight: Joi.string().required(),
    },
  }),
  new FreightController().handle
);

export { freightRoutes };
