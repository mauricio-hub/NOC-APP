import { LogEntity, logSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";


interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>;

}

type SuccessCallback = (() => void) | undefined;
type ErrorCallback = (error: string) => void | undefined;



export class CheckService implements CheckServiceUseCase {


    constructor(
         private readonly logRepository: LogRepository,
         private readonly successCallback: SuccessCallback,
         private readonly errorCallback: ErrorCallback
    ) {}

    async execute(url: string): Promise<boolean> {

        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
             
            const log = new LogEntity({level:logSeverityLevel.low,message: `URL is ok: ${url}`, origin: "check-service.ts"});

            await this.logRepository.saveLog(log);
            console.log(`URL is ok: ${url}`);
            this.successCallback?.();    
            return true;


        }catch (error) {
          
            const log = new LogEntity({level:logSeverityLevel.high,message: `Error checking URL: ${url}`, origin: "check-service.ts"});
            
            await this.logRepository.saveLog(log);
            this.errorCallback?.("Error checking URL");
            return false;
        
        }

    }
}