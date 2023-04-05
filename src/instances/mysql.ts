import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const sequelize = new Sequelize(
    process.env.MYSQL_URL as string,
    {
        dialect:'mysql',
        port: parseInt(process.env.MYSQL_PORT as string)
    }
)