import { Router } from "express";
import getBookings from "../services/bookings/getBookings.js";
import createBooking from "../services/bookings/createBooking.js";
import getBookingById from "../services/bookings/getBookingById.js";
import deleteBookingById from "../services/bookings/deleteBookingById.js";
import updateBookingById from "../services/bookings/updateBookingById.js";
import auth from "../middleware/auth.js";

const router = Router();

// bookings.js route handler

router.get("/", async (req, res, next) => {
  try {
    const { userId, propertyId, /* other filters */ } = req.query;

    const bookings = await getBookings(
      userId,
      propertyId,
      /* pass other filters as arguments */
    );

    // Send JSON response
    res.status(200).json(bookings);
  } catch (error) {
    // Handle errors and send an appropriate response
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const booking = await getBookingById(id);

    if (!booking) {
      res.status(404).json({ message: `Booking with id ${id} not found` });
    } else {
      res.status(200).json(booking);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", auth, async (req, res, next) => {
  try {
    const { userId, propertyId, startDate, endDate } = req.body;

    const newBooking = await createBooking(
      userId,
      propertyId,
      startDate,
      endDate
    );

    res.status(201).json(newBooking);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBooking = await deleteBookingById(id);

    if (deletedBooking) {
      res.status(200).send({
        message: `Booking with id ${id} successfully deleted`,
        booking: deletedBooking,
      });
    } else {
      res.status(404).json({
        message: `Booking with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userId, propertyId, startDate, endDate } = req.body;

    const updatedBooking = await updateBookingById(
      id,
      userId,
      propertyId,
      startDate,
      endDate
    );

    if (updatedBooking) {
      res.status(200).send({
        message: `Booking with id ${id} successfully updated`,
      });
    } else {
      res.status(404).json({
        message: `Booking with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
