import { XiServer } from 'vite-plugin-11th-server';

import { Sequelize, DataTypes, Model } from 'sequelize';
class User extends Model { };

const sequelize = new Sequelize('sqlite::memory:');

User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

export async function server(app: XiServer) {
    await sequelize.sync();
    await User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20)
    });

    app.router('/hello', async (req, res) => {
        const jane = await User.findAll()
        res.send(jane);
    });
    app.router('/api', (req, res) => {
        res.send(req.body);
    });
}