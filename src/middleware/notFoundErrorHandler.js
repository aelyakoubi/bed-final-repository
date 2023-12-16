import NotFoundError from '../src/errors/notFoundError';

const notFoundErrorHandler = (err, req, res, next) => {
  if (err instanceof NotFoundError) {
    return res.status(404).json({ message: err.message });
  }
  next(err);
};

export default notFoundErrorHandler;
