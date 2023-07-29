import { app } from './infra/app';

const port = process.env.PORT || 3000;
const logger = console;

app.listen(port, () => {
  logger.log(`[App]: Server listening on ${port}`);
});
