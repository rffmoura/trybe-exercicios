const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

uppercase('xablau', console.log);

test('testa se uppercase transforma letras de uma palavra em letras maiúsculas', (done) => {
  uppercase('xablau', (str) => {
    try {
      expect(str).toBe('XABLAU');
      done();
    } catch (error) {
      done(error);
    }
  });
});