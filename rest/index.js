const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended:true}))

app.get('/list-users', function(req, res){
    fs.readFile(__dirname + "/user.json", "utf8", function (err, data) {
        if(err) throw err
        console.log(data)
        res.end(data)
    })
})

/*let user = {
    "user4" : {
        "name" : "Marcos",
        "password" : "654321",
        "profession" : "Director",
        "id" : 4
    }
/*/
app.get('/form', function (req, res){
    res.sendFile(__dirname + "/form.html")
})

app.post('/add-user', function (req, res) {
    //console.log('ca marche')
    //console.log(req.body)
    fs.readFile(__dirname + "/user.json", "utf8", function (err, data){
        data = JSON.parse(data)
       // data["user4"] = user["user4"]
        data['user'+req.body.id] = req.body

        //console.log(data)
        let newData = JSON.stringify(data)
        fs.writeFile(__dirname + "/user.json", newData, err => {
            if(err) throw err
            console.log('Success')
        })
    })
})

app.get('/form-update', function (req, res){
    res.sendFile(__dirname + "/form-update.html")
})

app.get('/id=:id', function (req, res){
    fs.readFile(__dirname + "/user.json" , "utf8", function (err, data) {
        const users = JSON.parse(data)
        const user = users["user" + req.params.id]
        console.log(user)
        res.end(JSON.stringify(user))
    })
})

app.listen(8081, function() {
    console.log("App listening at 8081")
})