# Translator API Using Azure Cognitive Services


## Description
This Project is created to serve as a connector between Azure Translate and a Client Application. It is a REST API that can be used to translate text from one language to another. It is built using Node.js and Express.js. It uses Azure Cognitive Services to translate the text. It is deployed on Azure App Service.

---

## Demo

---

#### Client App Demo
<img src="Client%20App%20Demo.gif"> 


## Table of Contents
- [ ] [Description](#description)
  - [ ] [Table of Contents](#table-of-contents)
- [ ] [Features](#features)
- [ ] [Getting Started](#getting-started)
  - [ ] [Dependencies](#dependencies)
  - [ ] [Running the Program](#running-the-program)
  - [ ] [Environment Variables](#environment-variables)
- [ ] [Endpoints](#endpoints)
  - [ ] [Using the API (Example)](#using-the-api-example)
  - [ ] [Example Request Query](#example-request-query)
  - [ ] [Example Response](#example-response) 


## Text translation features

The following methods are supported by the Text Translation feature:

![](https://img.shields.io/badge/Features-API-blue)

  - Translate: Renders single source-language text to multiple target-language texts with a single request
  
- Transliterate: Converts characters or letters of a source language to the corresponding characters or letters of a target language
-  Detect: Returns the source code language code and a boolean variable denoting whether the detected language is supported for text translation and transliteration
-   Dictionary lookup: Returns equivalent words for the source term in the target language
 

---

## Getting Started

---


### Dependencies

- [ ] Node.js
- [ ] Azure Cognitive Services (API Key and Endpoint)
- [ ] Azure App Service (Optional)
- [ ] Postman (Optional)

### Running the program
```bash
git clone repo && cd repo
npm install
npm start
```
### Environment Variables
###### Create a .env file in the root directory and add the following variables ####
![](https://img.shields.io/badge/DOTENV-Configuration-green)
```bash
TRANSLATOR_TEXT_REGION="<REGION>" #This is the region that is used to translate the text. It should be in the format "region" e.g. "eastus
TRANSLATOR_TEXT_RESOURCE_KEY="<API KEY>" # This is the API key that is used to authenticate the user
TRANSLATOR_TEXT_ENDPOINT="https://api.cognitive.microsofttranslator.com" # This is the endpoint that is used to translate the text
SECRET="<SECRET>" # This is the secret key that is used to authenticate the user
```

![](https://img.shields.io/badge/EnvironmentVariables-CONFIG-green)
![](https://img.shields.io/badge/Powershell-Command-blue)
###### Optional Environment Variables (Powershell) ######
```powershell
Set-Variable -Name "TRANSLATOR_TEXT_REGION" -Value "<REGION>" -Scope "User"
Set-Variable -Name "TRANSLATOR_TEXT_RESOURCE_KEY" -Value "<API_KEY>" -Scope "User"
Set-Variable -Name "TRANSLATOR_TEXT_ENDPOINT" -Value "https://api.cognitive.microsofttranslator.com" -Scope "User"
Set-Variable -Name "SECRET" -Value "<SECRET>" -Scope "User"
```


---

### Endpoints
---
<a href="http://findasnake.com">![](https://img.shields.io/badge/Endpoints-REST-yellow)
</a>




| Endpoint           | Description                                                             |
| ------------------ | ----------------------------------------------------------------------- |
| `GET /languages`   | Returns the list of languages supported by the API                      |
| `POST /translate`  | Translate specified source language text into the target language text. |
| `POST /dictionary` | alternatives for single word translations.                              |
| `POST /detect`     | Identify the source language.                                           |
| `POST /transliterate`      | Transliterate text from one script to another.. |



---

### Using the API (Example)
---
<a href="http://findasnake.com">![](https://img.shields.io/badge/UsingTheAPI-EXAMPLE-geem)</a>

The API can be used by sending a POST request to the endpoint. The request body should be in JSON format and should contain the following fields:
- [ ] `text`: The text to be translated

- [ ] `to`: The language to translate to

- [ ] `from`: The language to translate from (Optional) 


### Example Request Query

```json
{
    "text": "Hello World",
    "to": "ar",
    "from": "en"
}
```

### Example Response
```javascript
{

[{"translations":[{"text":"أهلًا وسهلًا","to":"ar"}]}]

}
```

---

## Q&A
---
<a href="http://findasnake.com">![](https://img.shields.io/badge/Q&A-FAQs-yellowgreen)</a>

### How do I get an API Key?
- [ ] [Create a Cognitive Services resource in the Azure portal](https://docs.microsoft.com/en-us/azure/cognitive-services/cognitive-services-apis-create-account?tabs=multiservice%2Cwindows)

- [ ] [Get the key and endpoint for your resource](https://docs.microsoft.com/en-us/azure/cognitive-services/cognitive-services-apis-create-account?tabs=multiservice%2Cwindows#get-the-key-and-endpoint-for-your-resource)


