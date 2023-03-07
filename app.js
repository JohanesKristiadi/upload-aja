const { request, response } = require('express')
const express = require('express')

const app = express()

app.use(express.json())

app.get("/greetings", (request, response) => {
    response.json({
        "greet": "Hello",
    });
}); 

app.get("/users", (request, response) =>{
    const users = [
        {
            "id" : 1,
            "name" : "Johanes"
        },
        {
            "id" : 2,
            "name" : "Alvin",
        }
    ];
    response.json(users)
})

    app.listen(3000, () => {
        console.log("server is starting ");
    });

module.exports = app