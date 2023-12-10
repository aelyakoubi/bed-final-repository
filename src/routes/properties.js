import { Router } from "express";
import getProperties from "../services/properties/getProperties.js";
import createProperty from "../services/properties/createProperty.js";
import getPropertyById from "../services/properties/getPropertyById.js";
import deletePropertyById from "../services/properties/deletePropertyById.js";
import updatePropertyById from "../services/properties/updatePropertyById.js";
import auth from "../middleware/auth.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const { location, pricePerNight } = req.query;

    const properties = await getProperties(location, pricePerNight);

    res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
});



router.post("/", auth, async (req, res, next) => {
  try {
    const { title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestCount, hostId, rating } = req.body;

    const newProperty = await createProperty(
      title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestCount, hostId, rating 
    );
    res.status(201).json(newProperty);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const property = await getPropertyById(id);

    if (!property) {
      res.status(404).json({ message: `Property with id ${id} not found` });
    } else {
      res.status(200).json(property);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProperty = await deletePropertyById(id);

    if (deletedProperty) {
      res.status(200).send({
        message: `Property with id ${id} successfully deleted`,
        property: deletedProperty,
      });
    } else {
      res.status(404).json({
        message: `Property with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const {title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestCount, hostId, rating } = req.body;

    const updatedProperty = await updatePropertyById(id, {
      title, description, location, pricePerNight, bedroomCount, bathRoomCount, maxGuestCount, hostId, rating 
    });
    if (updatedProperty) {
      res.status(200).send({
        message: `Property with id ${id} successfully updated`,
      });
    } else {
      res.status(404).json({
        message: `Property with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
