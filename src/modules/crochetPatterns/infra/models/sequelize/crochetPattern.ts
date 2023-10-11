import { DataTypes, Sequelize } from 'sequelize';

/* eslint-disable new-cap */
export const CrochetPatternModel = (sequelize: Sequelize) => {
  const CrochetPattern = sequelize.define(
    'crochetPattern',
    {
      entityId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      instructions: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
      tableName: 'crochetPattern',
    },
  );

  return CrochetPattern;
};