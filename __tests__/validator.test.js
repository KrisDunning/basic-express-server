'use strict';

const supertest = require('supertest');
const {app} = require('../src/server');
const request = supertest(app);

describe ('basic express server', () =>{

  it('handles no name in query string', async () =>{
    const response = await request.get('/person?name=');
    expect(response.status).toEqual(500);
  });
});
