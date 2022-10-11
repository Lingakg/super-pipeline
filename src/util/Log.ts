import {getLogger} from "log4js"

var logger = getLogger();

if(process.env.debug){
    logger.level = "debug";
}

export default logger

