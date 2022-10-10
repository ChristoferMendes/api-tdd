test('should know the principle jest assertives', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
});

test('should know how to work with objects', () => {
  const obj = { name: 'John Doe', email: 'John@gmail.com' };
  expect(obj).toHaveProperty('name', 'John Doe');
  expect(obj.name).toBe('John Doe');
});
