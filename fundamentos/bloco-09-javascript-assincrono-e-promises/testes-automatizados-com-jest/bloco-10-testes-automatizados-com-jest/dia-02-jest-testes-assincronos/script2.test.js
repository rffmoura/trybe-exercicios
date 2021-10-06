const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);


describe('getUserName - promise', () => {
  test('returns the user name', () => {
    getUserName(1).then((result) => expect(result).toEqual('Mark'));
  });
});

describe('returns error when id does not exist', () => {
  test('returns an error', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => {
      expect(error.message).toMatch('User with 3 not found.');
    });
  });
});