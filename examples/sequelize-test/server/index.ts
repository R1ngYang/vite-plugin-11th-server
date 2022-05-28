import { XiServer } from 'vite-plugin-11th-server';

import { Sequelize, DataTypes } from 'sequelize';
export async function server(app: XiServer) {

    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './database.sqlite'
    });

    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        birthday: DataTypes.DATE,
    });

    console.log(User)

    app.router('/hello', async (req, res) => {
        const jane = await User.create({
            username: 'janedoe',
            birthday: new Date(1980, 6, 20),
        });
        const users = await User.findAll();
        res.send(users);
    });
    app.router('/api', (req, res) => {
        res.send(req.body);
    });
}