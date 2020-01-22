import { convertArrayToObject } from '../utils/objectHelpers';
let mockArray = [
  {
    ID: 1,
    Date: new Date('01/01/2020'),
    name: 'Bruno',
  },
  {
    ID: 2,
    Date: new Date('01/01/2020'),
    name: 'Jony',
  },
  {
    ID: 3,
    Date: new Date('01/01/2020'),
    name: 'Gustavo',
  },
];

describe('convertArrayToObject', () => {
  it('should test the function in JS enviroment', () => {
    let result = convertArrayToObject(mockArray, 'name');
    expect(result.Gustavo).toStrictEqual({
      ID: 3,
      Date: new Date('01/01/2020'),
      name: 'Gustavo',
    });
    expect(result.Bruno.ID).toBe(1);
  });

  /*  it('Should convert an array to object, but not all array values exist', () => {
    const mockArr1 = [
      {
        ProgrammingL: [
          {
            typed: true,
            name: 'Typescript',
          },
          {
            typed: false,
            name: 'Javascript',
          },
        ],
        RandomObj: 1,
        nestedObj: {
          tree: {
            a1: 1,
            a2: 'one',
          },
        },
      },
      {
        IShouldntBeHere: 1,
      },
    ];
    let objMockArr = convertArrayToObject(mockArr1, 'nestedObj');
    console.log(objMockArr[tree]);
  }); */
});
