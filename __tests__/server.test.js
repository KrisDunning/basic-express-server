'use strict';

const supertest = require('supertest');
const {app} = require('../src/server');
const request = supertest(app);

describe ('basic express server', () =>{

  it('handles bad route', async () =>{
    const response = await request.get('/sports');
    expect(response.status).toEqual(404);
  });
});
