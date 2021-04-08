const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SleepChart extends Model {}

SleepChart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dateCreated: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    amWakeTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nap1: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    napTimeInBed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    napTimeAsleep: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    napTimeAwake: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    napTotalDuration: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    bedtime: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    BedtimeTimeInBed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bedtimeTimeAsleep: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bedtimeTimeAwake: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    bedtimeTotalDuration: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    feed: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'sleep_chart',
  }
);

module.exports = SleepChart;
