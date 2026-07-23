

export enum logSeverityLevel {
    low = "low",
    medium = "medium",
    high = "high"
}

export interface LogEntityOptions {
    level: logSeverityLevel;
    message: string;
    origin: string;
    createdAt?: Date;

}



export class LogEntity {

    public level: logSeverityLevel;
    public message: string;
    public createdAt: Date;
    public origin: string;

    constructor(options: LogEntityOptions) {
        const { level, message, origin, createdAt } = options;
        this.level = level;
        this.message = message;
        this.origin = origin;
        this.createdAt = createdAt || new Date();

    }


    static fromJson(json: string): LogEntity {
        const { message, level, createdAt, origin } = JSON.parse(json);

        const log = new LogEntity({ level, message, origin, createdAt });

        return log;

    }

    static fromObject = (object: { [key: string]: any }): LogEntity => {
        const { message, level, createdAt, origin } = object

        const log = new LogEntity({ message,level, origin, createdAt });
        return log;
    }


}