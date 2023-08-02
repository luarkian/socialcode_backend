'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', 
    { 
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
        AllowNull: false
      },
      firstname:{ 
        type: Sequelize.STRING,
      AllowNull: false
    },
      lastname: { 
        type: Sequelize.STRING,
        AllowNull: false
      },
      username: { 
        type: Sequelize.STRING,
        AllowNull: false
      },
      password: { 
        type: Sequelize.STRING,
        AllowNull: false
      },
      is_active:{ 
        type: Sequelize.BOOLEAN,
      },
      email:{ 
        type: Sequelize.STRING,
        AllowNull: false
      },
      profile_id:  
      {
        type: Sequelize.INTEGER,
      },
      created_at: { 
        type: Sequelize.DATE,
        AllowNull: false
      },
      updated_at: { 
        type: Sequelize.DATE,
        AllowNull: false
      },
      created_by:  {
        type: Sequelize.INTEGER,
      },
      updated_by: {
        type: Sequelize.INTEGER,
      }
    });
    await queryInterface.createTable('address',{
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
        AllowNull: false
      },

      created_at: { 
        type: Sequelize.DATE,
        AllowNull: false
      },
      updated_at: { 
        type: Sequelize.DATE,
        AllowNull: false
      },
      created_by:  {
        type: Sequelize.INTEGER,
      },
      updated_by: {
        type: Sequelize.INTEGER,
      }
    });

    await queryInterface.createTable('client',{
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
        AllowNull: false
      },
      business_name: { 
      type: Sequelize.STRING,
      AllowNull: false
      },
      fantasy_name: { 
      type: Sequelize.STRING,
      AllowNull: false
      },
      municipal_registration: { 
        type: Sequelize.STRING,
        AllowNull: false
      },
      state_registration : { 
        type: Sequelize.STRING,
        AllowNull: false
      },
      email : 
      { 
        type: Sequelize.STRING,
        AllowNull: false
      },
      phone: { 
        type: Sequelize.STRING,
      },
      celphone: { 
        type: Sequelize.STRING,
      },
      address_id: { 
        type: Sequelize.INTEGER,
        AllowNull: false
      },
      created_at: { 
        type: Sequelize.DATE,
        AllowNull: false
      },
      updated_at: { 
        type: Sequelize.DATE,
        AllowNull: false
      },
      created_by:  {
        type: Sequelize.INTEGER,
      },
      updated_by: {
        type: Sequelize.INTEGER,
      }
    });

    await queryInterface.createTable('status_service', 
    {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
        AllowNull: false
      },
      name: { 
        type: Sequelize.STRING,
        AllowNull: false
        },
      description: { 
        type: Sequelize.TEXT,
        },
     });
    await queryInterface.createTable('profile', 
    { 
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
        AllowNull: false
      },
      name: { 
        type: Sequelize.STRING,
        AllowNull: false
        },
      description: { 
        type: Sequelize.TEXT,
        }

    });
    await queryInterface.createTable('order_service', 
    {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
        AllowNull: false
      },
      client_id:  {
        type: Sequelize.INTEGER,
      },
      status_id:  {
        type: Sequelize.INTEGER,
      },
      repair_request:  {
        type: Sequelize.TEXT,
      },
      solution:  {
        type: Sequelize.TEXT,
      },
      user_id:  {
        type: Sequelize.INTEGER,
      },
      description:  {
        type: Sequelize.TEXT,
      },
      created_at: { 
        type: Sequelize.DATE,
        AllowNull: false
      },
      updated_at: { 
        type: Sequelize.DATE,
        AllowNull: false
      },
      created_by:  {
        type: Sequelize.INTEGER,
      },
      updated_by: {
        type: Sequelize.INTEGER,
      }

     });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('client');
    await queryInterface.dropTable('address');
    await queryInterface.dropTable('status_service');
    await queryInterface.dropTable('profile');
    await queryInterface.dropTable('order_service');
  }
};
