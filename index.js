var express = require('express');
var cors = require('cors');
const multer  = require('multer')
const upload = multer({ dest: './public/uploads/' })
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post("/api/fileanalyse", upload.single("upfile"), (req,res)=>{
  try {
    
    console.log(req.body, req.file);
    res.status(200).json(req.file);
  } catch (error) {
    res.status(500).json(error);
  }
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
