import { LogModel } from "../../data/mongo";
import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, logSeverityLevel } from "../../domain/entities/log.entity";



export class MongoLogDatasource implements LogDataSource {
    async saveLog(log: LogEntity): Promise<void> {

        const newLog = await LogModel.create(log)
        
        console.log('mongo log created',newLog.id)
    }

   async getLogs(severity: logSeverityLevel): Promise<LogEntity[]> {
        
        const logs = await LogModel.find({
            level:severity
        })

        return logs.map( log => LogEntity.fromObject(log))        
    }
}