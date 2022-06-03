import { XiServer } from 'vite-plugin-11th-server';
import { Sequelize, DataTypes, Model } from 'sequelize';

class TodoList extends Model { };
const sequelize = new Sequelize('sqlite::memory:');

TodoList.init({
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    content: DataTypes.STRING
}, { sequelize, modelName: 'todoList' });

export async function todoList(app: XiServer) {
    await sequelize.sync();

    app.router('/todo-list/save', async (req, res) => {
        const result = await TodoList.create({
            id: new Date().getTime(),
            content: req.params.content
        });
        res.send(result);
    });
    app.router('/todo-list/list', async (req, res) => {
        const tpdoList = await TodoList.findAll()
        res.send(tpdoList);
    });
}