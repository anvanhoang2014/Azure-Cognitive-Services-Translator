require("dotenv").config();

var region = process.env.TRANSLATOR_TEXT_REGION;
var endpoint = process.env.TRANSLATOR_TEXT_ENDPOINT;
var resourceKey = process.env.TRANSLATOR_TEXT_RESOURCE_KEY;


/**
 * Exporting the variables
 * */
module.exports = {
    region,
    endpoint,
    resourceKey,
};
