// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")
var md5 = require("md5")
var cors = require('cors')

app.use(cors()) 
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server port
var HTTP_PORT = 3000 
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

app.get("/items", (req, res, next) => {
    var sql = "select * from user_data"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

app.get("/item/:id", (req, res, next) => {
    var sql = "select * from user_data where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
});

app.post("/item/", (req, res, next) => {
    var errors=[]
    if (!req.body.user_id){
        errors.push("No username specified");
    }
    if (!req.body.image){
        errors.push("No image specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        user_id: req.body.user_id,
        lat:req.body.lat,
        lon:req.body.lon,
        image:req.body.image,
        description:req.body.description,
        keyword:req.body.keyword
    }
    var sql ='INSERT INTO user_data (user_id, lat, lon,image,description,keyword) VALUES (?,?,?,?,?,?)'
    var params =[data.user_id, data.lat, data.lon,data.image,data.description,data.keyword]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
})

app.delete("/item/:id", (req, res, next) => {
    db.run(
        'DELETE FROM user_data WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
})

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
