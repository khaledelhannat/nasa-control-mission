const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', () => {
    test('It should respond with 200 sucess', async () => {
        const respose = await request(app)
            .get('/launches')
            .expect('Content-Type', /json/)
            .expect(200);
    });
});



describe('Test POST /launch', () => {
    const launchDataWithDate = {
        "mission": "Kepler Exploration K",
        "rocket": "Explorer IS2",
        "launchDate": "october 11, 2030",
        "target": "Kepler-1652 b"
    };

    const launchDataWithouthDate = {
        "mission": "Kepler Exploration K",
        "rocket": "Explorer IS2",
        "target": "Kepler-1652 b"
    };

    const launchDataWithInvalidDate = {
        "mission": "Kepler Exploration K",
        "rocket": "Explorer IS2",
        "launchDate": "hello world",
        "target": "Kepler-1652 b"
    };


    test('It should respond with 201 created', async () => {
        const respose = await request(app)
            .post('/launches')
            .send(launchDataWithDate)
            .expect('Content-Type', /json/)
            .expect(201);

        const requestDate = new Date(launchDataWithDate.launchDate).valueOf();
        const resposeDate = new Date(respose.body.launchDate).valueOf();
        expect(resposeDate).toBe(requestDate);

        expect(respose.body).toMatchObject(launchDataWithouthDate);
    });

    test('It should catch missing required properties', async () => {
        const respose = await request(app)
            .post('/launches')
            .send(launchDataWithouthDate)
            .expect('Content-Type', /json/)
            .expect(400);

        expect(respose.body).toStrictEqual({
            error: 'Missing required launch property',
        })
    });

    test('It should catch invalid dates', async () => {
        const respose = await request(app)
            .post('/launches')
            .send(launchDataWithInvalidDate)
            .expect('Content-Type', /json/)
            .expect(400);

        expect(respose.body).toStrictEqual({
            error: 'Invalid launch date',
        })
    });
});