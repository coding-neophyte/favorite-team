// import { createTeam, deleteTeam, getTeam, getTeams } from './utils';


// test('should grab all teams', async () => {
//     const expectation = [
//         {
//             id: expect.any(Number),
//             name: expect.any(String),
//             city: expect.any(String),
//             logo: expect.any(String),
//             championships: expect.any(Number),
//             category_id: expect.any(Number),
//             category_name: expect.any(String)
//         },

//     ];
//     const response = await getTeams();
//     expect(response).toEqual(expect.arrayContaining(expectation))

// })

// test.only('should return one team', async () => {
//     const expectation = {
//         id: expect.any(Number),
//         name: expect.any(String),
//         city: expect.any(String),
//         logo: expect.any(String),
//         championships: expect.any(Number),
//         category_id: expect.any(Number),
//         owner_id: expect.any(Number),
//         category_name: expect.any(String)
//     }

//     const response = await getTeam();
//     expect(response).toEqual(expect.arrayContaining(expectation));
// })


// test('should create new team', async () => {
//     const expectation = {
//         id: expect.any(Number),
//         name: expect.any(String),
//         city: expect.any(String),
//         logo: expect.any(String),
//         championships: expect.any(Number),
//         category_id: expect.any(Number),
//         owner_id: expect.any(Number),
//         // category_name: 'eastern conference'
//     }
//     const body = {
//         name: expect.any(String),
//         city: expect.any(String),
//         logo: expect.any(String),
//         championships: expect.any(Number),
//         category_id: expect.any(Number),
//         owner_id: expect.any(Number),
//         category_name: expect.any(String)
//     }
//     const response = await createTeam(body)
//     expect(response).toEqual(expectation);
// })

// // test('should delete team', async () => {
// //     const expectation = {

// //     }
// //     const response = await deleteTeam()
// // })
