'use strict';

const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
      'usuarios', 
    [
      {
        nome: 'riume',
        email: 'riumecarlos@gmail.com',
        senha_hash: await bcryptjs.hash('123@mudar', 8),
        deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Amanda',
        email: 'amanda@gmail.com',
        senha_hash: await bcryptjs.hash('123', 8),
        deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Ana',
        email: 'ana@gmail.com',
        senha_hash: await bcryptjs.hash('123', 8),
        deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Reginaldo',
        email: 'reginaldo@gmail.com',
        senha_hash: await bcryptjs.hash('123', 8),
        deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Gustavo',
        email: 'gustavo@gmail.com',
        senha_hash: await bcryptjs.hash('123', 8),
        deleted: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], 
    {}
  ),
  

  down: async () => {
  }
};
