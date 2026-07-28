import express from 'express';
import router from './routes.js';

const app = express();
const port = 3000;

app.use(express.json())

app.use('/students', router);

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      status: err.status || 500
    }
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});
