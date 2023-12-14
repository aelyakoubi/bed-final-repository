import { Router } from "express";
import jwt from "jsonwebtoken";
import getUserByUsernameAndPassword from "../services/users/getUserByUsernameAndPassword.js";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // retrieve (verkrijg) user + username + password //
    const user = await getUserByUsernameAndPassword(username);

    // passwords don't match + error //
    if (!user || password !== user.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Sign JWT token + user ID //
    const token = jwt.sign(
      { id: user.id },
      process.env.AUTH_SECRET_KEY || "my-secret-key"
    );

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
});

export default router;
