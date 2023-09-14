import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Api public authentication check (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/register (GET)', () => {
    return request(app.getHttpServer())
      .post('/auth/signup')
      .expect(400)
      .then((val) => expect(val.body.status === false));
  });

  it('/user (GET)', () => {
    return request(app.getHttpServer())
      .get('/user')
      .expect(403)
      .then((val) => expect(val.body.status === false));
  });

  it('/user/:user_id (GET)', () => {
    return request(app.getHttpServer())
      .get('/user/123')
      .expect(403)
      .then((val) => expect(val.body.status === false));
  });

  it('/user/:user_id/access (POST)', () => {
    return request(app.getHttpServer())
      .post('/user/123/access')
      .expect(403)
      .then((val) => expect(val.body.status === false));
  });

  it('/user/:user_id/access (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/user/123/access')
      .expect(403)
      .then((val) => expect(val.body.status === false));
  });

  it('/courses (GET)', () => {
    return request(app.getHttpServer())
      .get('/courses')
      .expect(403)
      .then((val) => expect(val.body.status === false));
  });

  it('/courses (POST)', () => {
    return request(app.getHttpServer())
      .post('/courses')
      .expect(403)
      .then((val) => expect(val.body.status === false));
  });

  it('/courses/:course_id (GET)', () => {
    return request(app.getHttpServer())
      .get('/courses/123')
      .expect(403)
      .then((val) => expect(val.body.status === false));
  });

  it('/courses/:courses_id (PUT)', () => {
    return request(app.getHttpServer())
      .put('/courses/123')
      .expect(403)
      .then((val) => expect(val.body.status === false));
  });

  it('/courses/:course_id/videos (POST)', () => {
    return request(app.getHttpServer())
      .post('/courses/123/videos')
      .expect(403)
      .then((val) => expect(val.body.status === false));
  });
});

describe('Api acceess check for authenticated user (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/user (GET)', () => {
    return request(app.getHttpServer())
      .get('/user')
      .expect(403)
      .then((val) => expect(val.body.status === false));
  });

  it('/user/:user_id (GET)', () => {
    return request(app.getHttpServer())
      .get('/user/123')
      .expect(403)
      .then((val) => expect(val.body.status === false));
  });

  it('/user/:user_id/access (POST)', () => {
    return request(app.getHttpServer())
      .post('/user/123/access')
      .expect(403)
      .then((val) => expect(val.body.status === false));
  });

  it('/user/:user_id/access (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/user/123/access')
      .expect(403)
      .then((val) => expect(val.body.status === false));
  });

  it('/courses (GET)', () => {
    return request(app.getHttpServer())
      .get('/courses')
      .expect(403)
      .then((val) => expect(val.body.status === false));
  });

  it('/courses (POST)', () => {
    return request(app.getHttpServer())
      .post('/courses')
      .expect(403)
      .then((val) => expect(val.body.status === false));
  });

  it('/courses/:course_id (GET)', () => {
    return request(app.getHttpServer())
      .get('/courses/123')
      .expect(403)
      .then((val) => expect(val.body.status === false));
  });

  it('/courses/:courses_id (PUT)', () => {
    return request(app.getHttpServer())
      .put('/courses/123')
      .expect(403)
      .then((val) => expect(val.body.status === false));
  });

  it('/courses/:course_id/videos (POST)', () => {
    return request(app.getHttpServer())
      .post('/courses/123/videos')
      .expect(403)
      .then((val) => expect(val.body.status === false));
  });
});
