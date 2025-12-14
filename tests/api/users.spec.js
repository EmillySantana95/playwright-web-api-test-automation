const { test, expect } = require('@playwright/test');

test.describe('API – Usuários', () => {

  test('GET - Listar usuários', async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/users`);
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data).toEqual(expect.arrayContaining([expect.any(Object)]));
  });

  test('POST - Criar usuário', async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}/users`, {
      data: { name: 'Emilly', email: 'emilly@example.com' }
    });
    expect(response.status()).toEqual(201);
    const data = await response.json();
    expect(data.name).toEqual('Emilly');
  });

  test('PUT - Atualizar usuário', async ({ request, baseURL }) => {
    const response = await request.put(`${baseURL}/users/1`,
      {
        data: { name: 'Emilly Santana' }
      });
    expect(response.status()).toBe(200);
  });

  test('DELETE - Deletar usuário', async ({ request, baseURL }) => {
    const response = await request.delete(`${baseURL}/users/1`);
    expect(response.status()).toBe(200);
  });

});
