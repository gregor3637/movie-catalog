import { validationResult } from "express-validator";

const validate = (req, res, next) => {
  console.log("🚀 ~ file: request.handler.js:4 ~ validate ~ req:")
  const errors = validationResult(req);
  console.log("🚀 ~ file: request.handler.js:6 ~ validate ~ errors:", errors)

  if (!errors.isEmpty()) return res.status(400).json(errors.array()[0].msg);

  
  next();
};

export default { validate };
