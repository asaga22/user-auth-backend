'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('User', [
      {
        fullname: 'John Doe',
        email: 'john.doe@email.com',
        username: 'john.doe',
        password: '$2b$13$0DZw4/J4h/uf1NL3.7pnE.V1SB7zi0Kt60WlHNqr0eK.GUOxjIlFi',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fullname: 'Jane Doe',
        email: 'jane.doe@email.com',
        username: 'jane.doe',
        password: '$2b$13$D0.DK3m9tu2dA./xxZ/O4.gfGTpHfw1a6tM2nqhBp/DpGVWmP0Aui',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fullname: 'Jean Doe',
        email: 'jean.doe@email.com',
        username: 'jean.doe',
        password: '$2b$13$V6kBpzQ0tF179Laguo3cUODFoe87JpXEyW1D4TbWjoh/1Zxiu/c7i',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fullname: 'Jack Doe',
        email: 'jack.doe@email.com',
        username: 'jack.doe',
        password: '$2b$13$khyxGRbQPGlltYt57euMJuIbLP0yAqsE80FHyyNxiE8m/qarnQ9fS',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fullname: 'Jacques Doe',
        email: 'jacques.doe@email.com',
        username: 'jacques.doe',
        password: '$2b$13$J4AdKZN8vncH6pERlL4/5Ose9hh7EWEH0.N7jYfabQecQVktoxdSC',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fullname: 'Jacqueline Doe',
        email: 'jacqueline.doe@email.com',
        username: 'jacqueline.doe',
        password: '$2b$13$EaIM6C5lfQejTUfJSpGhFOlnyn9Unyi011INuiN2tTVPMtYXYwHKm',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fullname: 'Jill Doe',
        email: 'jill.doe@email.com',
        username: 'jill.doe',
        password: '$2b$13$KUvpeDZ03kBUMBJ/PxtY5eF5P1N.kxeBYwf8pmwAafg1ke4U5DwYu',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fullname: 'Jim Doe',
        email: 'jim.doe@email.com',
        username: 'jim.doe',
        password: '$2b$13$D58JVSzJ/v6M061NoMfUQu0eU6.sj3QoYCguNkAOSr2UrHHhm/r8q',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fullname: 'James Doe',
        email: 'james.doe@email.com',
        username: 'james.doe',
        password: '$2b$13$wP4UkL9JF.Qh4Y8QU5YU/eoEymXt4v86dPUhTBQDTItBVN3N9Jila',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fullname: 'Josephine Doe',
        email: 'josephine.doe@email.com',
        username: 'josephine.doe',
        password: '$2b$13$HntpWrC9pQp6WRIjKNw/duM19GyFn0gQIIiehGPeLLkflPKK0tHgS',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fullname: 'Jodie Doe',
        email: 'jodie.doe@email.com',
        username: 'jodie.doe',
        password: '$2b$13$WwUjdkjeX99VEq/nPKfINOgg0XdKBqC.h1i1G7IT47u6gymhS/0Ii',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fullname: 'Judie Doe',
        email: 'judie.doe@email.com',
        username: 'judie.doe',
        password: '$2b$13$tkYuUbjdtOgROzufXJKa.eYQynoIGGpthTrg2HV3f8sw4HEGU6Clm',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fullname: 'Judd Doe',
        email: 'judd.doe@email.com',
        username: 'judd.doe',
        password: '$2b$13$f/snT65eDCKGuv81qrJW/.nzwquNJe5ek2MEOgAB4iUv7vaXhNCx6',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fullname: 'Jake Doe',
        email: 'jake.doe@email.com',
        username: 'jake.doe',
        password: '$2b$13$zAPIa.9nKNipMGZ0xoTyweevvHrtu5IFceTLX2YtTezK0kORal1Ge',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        fullname: 'Joline Doe',
        email: 'joline.doe@email.com',
        username: 'joline.doe',
        password: '$2b$13$QaOYwgTPjZB/CMaS/ZTDMen6Nxj2a7dvaKaXIfjgXm1bpwjawHv0u',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], { ignoreDuplicates: true });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
