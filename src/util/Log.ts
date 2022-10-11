import {getLogger} from "log4js"

const logger = getLogger();

logger.level = "info";

if(process.env.debug){
    logger.level = "debug";
}

export default logger

