import { LogEntity, logSeverityLevel } from "../entities/log.entity";



export abstract class LogRepository {
    
    abstract saveLog(log:LogEntity): Promise<void>;
    abstract getLogs(severity: logSeverityLevel): Promise<LogEntity[]>;

}