const Event = require('./Event');
const Item = require('./Item');
const Map = require('./Map');
const Room = require('./Room');
const SaveData = require('./SaveData');
const StartLocation = require('./StartLocation');
const User = require('./User');

SaveData.belongsTo(User, {
    foreignKey: 'save_data_id',
});

Map.hasMany(Room, {
    foreignKey: 'room_id',
    onDelete: 'CASCADE',
});

// User.hasMany(Item, )