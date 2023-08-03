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
        defaultValue: Sequelize.UUIDV4,
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
        type: Sequelize.UUID,
      },
      created_at: { 
        type: Sequelize.DATE,
      },
      updated_at: { 
        type: Sequelize.DATE,
      },
      created_by:  {
        type: Sequelize.UUID,
        references: {
          model: 'users', 
          key: 'id'
        }
      },
      updated_by: {
        type: Sequelize.UUID,
        references: {
          model: 'users', 
          key: 'id'
      }
      }
    });
    await queryInterface.createTable('address',{
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        AllowNull: false
      },
      street: { 
        type: Sequelize.STRING,
        AllowNull: false
        },
      number: { 
        type: Sequelize.INTEGER,
        AllowNull: false
        },
      cep: { 
        type: Sequelize.STRING,
        AllowNull: false
        },  
      complement: { 
        type: Sequelize.STRING,
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
        type: Sequelize.UUID,
        references: {
          model: 'users', 
          key: 'id'
        }
      },
      updated_by: {
        type: Sequelize.UUID,
        references: {
          model: 'users', 
          key: 'id'
        }       
      }
    });

    await queryInterface.createTable('clients',{
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
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
        type: Sequelize.UUID,
        AllowNull: false,
        references: {
          model: 'address', // Referencing the 'address' table
          key: 'id'
      }
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
        type: Sequelize.UUID,
        references: {
          model: 'users', 
          key: 'id'
        } 
      },
      updated_by: {
        type: Sequelize.UUID,
        references: {
          model: 'users', 
          key: 'id'
        } 
      }
    });

    await queryInterface.createTable('status_service', 
    {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
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
        defaultValue: Sequelize.UUIDV4,
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
        defaultValue: Sequelize.UUIDV4,
        AllowNull: false
      },
      client_id:  {
        type: Sequelize.UUID,
        references: {
          model: 'clients', 
          key: 'id'
        } 
      },
      status_id:  {
        type: Sequelize.UUID,
        references: {
          model: 'status_service', 
          key: 'id'
        } 
      },
      repair_request:  {
        type: Sequelize.TEXT,
      },
      solution:  {
        type: Sequelize.TEXT,
      },
      user_id:  {
        type: Sequelize.UUID,
        references: {
          model: 'users', 
          key: 'id'
        } 
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
        type: Sequelize.UUID,
        references: {
          model: 'users', 
          key: 'id'
        } 
      },
      updated_by: {
        type: Sequelize.UUID,
        references: {
          model: 'users', 
          key: 'id'
        } 
      }

     });
     await queryInterface.addConstraint('order_service', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'fk_users_user_id_',
      references: {
          table: 'users',
          field: 'id'
      }
     });
     await queryInterface.addConstraint('order_service', {
      fields: ['status_id'],
      type: 'foreign key',
      name: 'fk_status_status_id',
      references: {
          table: 'status_service',
          field: 'id'
      }
     });
     await queryInterface.addConstraint('order_service', {
      fields: ['client_id'],
      type: 'foreign key',
      name: 'fk_client_client_id',
      references: {
          table: 'clients',
          field: 'id'
      }
     });

     await queryInterface.addConstraint('users', {
      fields: ['created_by'],
      type: 'foreign key',
      name: 'fk_users_created_by',
      references: {
          table: 'users',
          field: 'id'
      }
     });

      await queryInterface.addConstraint('users', {
          fields: ['updated_by'],
          type: 'foreign key',
          name: 'fk_users_updated_by',
          references: {
              table: 'users',
              field: 'id'
          }
      });

      await queryInterface.addConstraint('order_service', {
        fields: ['created_by'],
        type: 'foreign key',
        name: 'fk_users_created_by',
        references: {
            table: 'users',
            field: 'id'
        }
    });

    await queryInterface.addConstraint('order_service', {
        fields: ['updated_by'],
        type: 'foreign key',
        name: 'fk_users_updated_by',
        references: {
            table: 'users',
            field: 'id'
        }
    });

    await queryInterface.addConstraint('clients', {
      fields: ['created_by'],
      type: 'foreign key',
      name: 'fk_users_created_by',
      references: {
          table: 'users',
          field: 'id'
      }
    });

    await queryInterface.addConstraint('clients', {
      fields: ['updated_by'],
      type: 'foreign key',
      name: 'fk_users_updated_by',
      references: {
          table: 'users',
          field: 'id'
      }
    });

    await queryInterface.addConstraint('address', {
      fields: ['created_by'],
      type: 'foreign key',
      name: 'fk_users_created_by',
      references: {
          table: 'users',
          field: 'id'
      }
    });

    await queryInterface.addConstraint('address', {
      fields: ['updated_by'],
      type: 'foreign key',
      name: 'fk_users_updated_by',
      references: {
          table: 'users',
          field: 'id'
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
