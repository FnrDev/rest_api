import express from 'express';
import 'dotenv/config';
const app = express();
const routes = express.Router();

// import routers
import mainRoute from './routers/main.router';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes)

// routers
routes.use('/users', mainRoute);

app.listen(process.env.PORT, () => console.log(`App is ready on port ${process.env.PORT}`));