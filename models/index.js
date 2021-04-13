const User = require('./User');
const Child = require('./Child');
const SleepChart = require('./SleepChart');

User.hasMany(Child, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(SleepChart, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Child.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


module.exports = { User, Child, SleepChart };
