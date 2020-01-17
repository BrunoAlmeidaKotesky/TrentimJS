import { convertArrayToObject } from '../utils/stringHelpers';
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
    expect(result.Gustavo).toStrictEqual({ ID: 3, Date: new Date('01/01/2020'), name: 'Gustavo' });
    expect(result.Bruno.ID).toBe(1);
  });
});
