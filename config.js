/* Copyright (C) 2022 Ber4tbey.
Licensed under the  MIT License;
you may not use this file except in compliance with the License.
Lavanstax - Ber4tbey
*/



const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './Lavanstax.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v0.1.0 Public Beta',
    USERNAM: process.env.USERNAM === undefined ? 'berathanyedibela' : process.env.USERNAM,
    PASSWORD: process.env.PASSWORD === undefined ? 'w1a2s3d4w1a2s3d4' : process.env.PASSWORD,
    STRING_SESSION: process.env.STRING_SESSION === undefined ? 'RadE5waDc1TkF3Z0RaeGVMRTBLcjlOWXZvZWhcIixcImV4cGlyZXNcIjpcIjIwMjMtMDctMThUMTg6NTU6MjkuMDAwWlwiLFwibWF4QWdlXCI6MzE0NDk2MDAsXCJkb21haW5cIjpcImluc3RhZ3JhbS5jb21cIixcInBhdGhcIjpcIi9cIixcInNlY3VyZVwiOnRydWUsXCJob3N0T25seVwiOmZhbHNlLFwiY3JlYXRpb25cIjpcIjIwMjItMDctMTlUMTg6NTU6MjcuOTE3WlwiLFwibGFzdEFjY2Vzc2VkXCI6XCIyMDIyLTA3LTE5VDE4OjU1OjM5LjY2NlpcIn0se1wia2V5XCI6XCJtaWRcIixcInZhbHVlXCI6XCJZdGItSHdBQkFBRTZrTFRoM3ZOazNCbTNNbzRBXCIsXCJleHBpcmVzXCI6XCIyMDI0LTA3LTE4VDE4OjU1OjI3LjAwMFpcIixcIm1heEFnZVwiOjYzMDcyMDAwLFwiZG9tYWluXCI6XCJpbnN0YWdyYW0uY29tXCIsXCJwYXRoXCI6XCIvXCIsXCJzZWN1cmVcIjp0cnVlLFwiaG9zdE9ubHlcIjpmYWxzZSxcImNyZWF0aW9uXCI6XCIyMDIyLTA3LTE5VDE4OjU1OjI3LjkyNVpcIixcImxhc3RBY2Nlc3NlZFwiOlwiMjAyMi0wNy0xOVQxODo1NTozOS42NjZaXCJ9XX0iLCJzdXBwb3J0ZWRDYXBhYmlsaXRpZXMiOlt7Im5hbWUiOiJTVVBQT1JURURfU0RLX1ZFUlNJT05TIiwidmFsdWUiOiIxMy4wLDE0LjAsMTUuMCwxNi4wLDE3LjAsMTguMCwxOS4wLDIwLjAsMjEuMCwyMi4wLDIzLjAsMjQuMCwyNS4wLDI2LjAsMjcuMCwyOC4wLDI5LjAsMzAuMCwzMS4wLDMyLjAsMzMuMCwzNC4wLDM1LjAsMzYuMCwzNy4wLDM4LjAsMzkuMCw0MC4wLDQxLjAsNDIuMCw0My4wLDQ0LjAsNDUuMCw0Ni4wLDQ3LjAsNDguMCw0OS4wLDUwLjAsNTEuMCw1Mi4wLDUzLjAsNTQuMCw1NS4wLDU2LjAsNTcuMCw1OC4wLDU5LjAsNjAuMCw2MS4wLDYyLjAsNjMuMCw2NC4wLDY1LjAsNjYuMCJ9LHsibmFtZSI6IkZBQ0VfVFJBQ0tFUl9WRVJTSU9OIiwidmFsdWUiOjEyfSx7Im5hbWUiOiJzZWdtZW50YXRpb24iLCJ2YWx1ZSI6InNlZ21lbnRhdGlvbl9lbmFibGVkIn0seyJuYW1lIjoiQ09NUFJFU1NJT04iLCJ2YWx1ZSI6IkVUQzJfQ09NUFJFU1NJT04ifSx7Im5hbWUiOiJ3b3JsZF90cmFja2VyIiwidmFsdWUiOiJ3b3JsZF90cmFja2VyX2VuYWJsZWQifSx7Im5hbWUiOiJneXJvc2NvcGUiLCJ2YWx1ZSI6Imd5cm9zY29wZV9lbmFibGVkIn1dLCJsYW5ndWFnZSI6ImVuX1VTIiwidGltZXpvbmVPZmZzZXQiOiIxMDgwMCIsInJhZGlvVHlwZSI6IndpZmktbm9uZSIsImNhcGFiaWxpdGllc0hlYWRlciI6IjNiclR2d0U9IiwiY29ubmVjdGlvblR5cGVIZWFkZXIiOiJXSUZJIiwiaXNMYXlvdXRSVEwiOmZhbHNlLCJhZHNPcHRPdXQiOmZhbHNlLCJ0aHVtYm5haWxDYWNoZUJ1c3RpbmdWYWx1ZSI6MTAwMCwiY2xpZW50U2Vzc2lvbklkTGlmZXRpbWUiOjEyMDAwMDAsInBpZ2VvblNlc3Npb25JZExpZmV0aW1lIjoxMjAwMDAwLCJkZXZpY2VTdHJpbmciOiIyNi84LjAuMDsgNDgwZHBpOyAxMDgweDE5MjA7IEhVQVdFSS9IT05PUjsgU1RGLUwwOTsgSFdTVEY7IGhpMzY2MCIsImRldmljZUlkIjoiYW5kcm9pZC1mM2ZmODVmYjNkYjFlODk1IiwidXVpZCI6IjhkNzdmMzcyLTZmMGYtNTlmZS05ZDFiLTA3MzI4NjAyZDc0YyIsInBob25lSWQiOiJjMjE5NzdmYy1mZGZiLTViOTgtYjkwMy0wYjAzMTkxZGRiZGEiLCJhZGlkIjoiZDE1NTc3ZjctMmYyMS01MDhkLWIxNDYtNDdjOGMwMTgwZGQzIiwiYnVpbGQiOiJOUkQ5ME0iLCJpZ1dXV0NsYWltIjoiMCIsInBhc3N3b3JkRW5jcnlwdGlvbktleUlkIjoiOTIiLCJwYXNzd29yZEVuY3J5cHRpb25QdWJLZXkiOiJMUzB0TFMxQ1JVZEpUaUJRVlVKTVNVTWdTMFZaTFMwdExTMEtUVWxKUWtscVFVNUNaMnR4YUd0cFJ6bDNNRUpCVVVWR1FVRlBRMEZST0VGTlNVbENRMmRMUTBGUlJVRjNjR3BZUzBad2FucFZXbmhQZG0xdGNqWmFNUXBYVVU5U1NXc3JNRmxoYVhCclVVeFhNR2R6VlhKNVMwdGhNV2gzYzJGQ1ZYTXhNemh0WlN0RlRFWmtXRE5JYUZkYUwyc3dTREpZVUZwbVJtTlBVWE5xQ21STFZYQnpaa1ZKU0VOaVJITnNRM1l4TWtKWlZISnpUVzVuYm14cWJUUXlla3hZTlhSRldGSnNTMmt5WVdSek9HNVZRUzlSVUhCQ1RVeFhXbmRtZDFNS2RVcHNSSEZuTlVOYVNHdDJObEkzTW5KUlRVcFNiek5VTldoTVdqTm9NbVZCYjB4Tk9ISnRjMnRzTkZsUlkxRnFUSFo1TkRocFJXZzNlVXBEUTJ0MVJncGxkR1ZwVkRaM1kyaG5WMDVIYkRWaU5FbElaVkIxZFVaRVNWUlJOVnBNZDJsbGRHZFZlQzlOYmxrM2QzVmlWRVpoVTB0QlpuZExRVzlvU0dZMFFXVXlDazVUVGk5TlVUa3pRbkpuWTFaeWJrTnZhM1o2VkV3NFkxQTVaMDFSVW1KdlFrcEtRbTlzWkhoVFdsUlpVM040Um1aQ2JWRk5NREZIWnpGa2MyMUhTRzBLSzNkSlJFRlJRVUlLTFMwdExTMUZUa1FnVUZWQ1RFbERJRXRGV1MwdExTMHRDZz09In0=' : process.env.STRING_SESSION,
    PREFIX: process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
    LANG: process.env.LANGUAGE === undefined ? 'TR' : process.env.LANGUAGE,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,
    BRANCH: 'master',
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './Lavanstax.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    AFK_MESSAGE: process.env.AFK_MESSAGE === undefined ? 'Hayat çok kısa, yapacak çok şey var...\nOnlardan birini yapıyorum.. Sahibim şuanda #AFK' : process.env.AFK_MESSAGE,
    SEND_READ: process.env.SEND_READ === undefined ? 'false' : process.env.SEND_READ,
    PENDING_REQUEST: process.env.PENDING_REQUEST === undefined ? 'true' : process.env.PENDING_REQUEST,
    FOLLOW_SEND: process.env.FOLLOW_SEND === undefined ? 'true' : process.env.FOLLOW_SEND   
    }
    

    
