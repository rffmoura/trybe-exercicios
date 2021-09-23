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

describe('getUserName - async/await', () => {
  test('returns the user name', async () => {
    await expect(getUserName(1)).resolves.toEqual('Mark');
  });
});

describe('when the user id does not exist', () => {
  test('returns an error', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (error) {
      expect(error.message).toEqual('User with 3 not found.');
    }
  });
});