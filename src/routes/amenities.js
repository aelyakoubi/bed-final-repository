import { Router } from "express";
import getAmenities from "../services/amenities/getAmenities.js";
import createAmenity from "../services/amenities/createAmenity.js";
import getAmenityById from "../services/amenities/getAmenityById.js";
import deleteAmenityById from "../services/amenities/deleteAmenityById.js";
import updateAmenityById from "../services/amenities/updateAmenityById.js";
import auth from "../middleware/auth.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const amenities = await getAmenities(res);

    res.status(200).json(amenities);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
    next(error);
  }
});

router.post("/", auth, async (req, res, next) => {
  try {
    const { name } = req.body;

    const newAmenity = await createAmenity(name);

    res.status(201).json(newAmenity);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const amenity = await getAmenityById(id);

    if (!amenity) {
      res.status(404).json({ message: `Amenity with id ${id} not found` });
    } else {
      res.status(200).json(amenity);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedAmenity = await deleteAmenityById(id);

    if (deletedAmenity) {
      res.status(200).send({
        message: `Amenity with id ${id} successfully deleted`,
        amenity: deletedAmenity,
      });
    } else {
      res.status(404).json({
        message: `Amenity with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updatedAmenity = await updateAmenityById(id, { name });

    if (updatedAmenity) {
      res.status(200).send({
        message: `Amenity with id ${id} successfully updated`,
      });
    } else {
      res.status(404).json({
        message: `Amenity with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
