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
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    am_wake_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nap1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nap_time_in_bed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nap_time_asleep: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nap_time_awake: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nap_total_duration: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bedtime: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bed_time_time_in_bed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bedtime_time_asleep: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bedtime_time_awake: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bedtime_total_duration: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    feed: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
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
    modelName: 'sleepchart',
  }
);

module.exports = SleepChart;
