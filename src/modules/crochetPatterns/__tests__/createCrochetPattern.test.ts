import express from 'express';
import request from 'supertest';
import { CategoryValue } from '../domain/Category';
import { crochetPatternRouter } from '../infra/http/routes';

describe('CreateUserController', () => {
  let app: express.Application;

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.use('/crochet-pattern', crochetPatternRouter);
  });

  it('should return 200 when use case is successful', done => {
    request(app)
      .post('/crochet-pattern')
      .send({ name: 'john', instructions: 'holaaa', category: CategoryValue.AMIGURUMI })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        return done();
      });
  });
});
