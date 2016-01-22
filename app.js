var express = require('express');
var crypto = require('crypto');
var cors = require('cors');
var exec = require('child_process').exec;
var app = express();
app.use(cors());

// TODO try error (invalid param)

/**
 * Generate hash by type
 * @param {String} type
 * @param {String} data
 */
app.get('/hash/:type/:data', function (req, res) {
  var type = req.params.type;
  var data = req.params.data;
  var digest = crypto.createHash(type).update(data).digest("hex")
  var hash = {
    "kind": type,
    "string": data,
    "hash": digest
  };
  setTimeout(function(){
    res.json(hash);
  },2000);
});

/**
 * Get all hash types
 */
app.get('/hash/types', function (req, res) {
  var messageDigest = '';
  var child = exec('openssl list-message-digest-commands',
    function (error, stdout, stderr) {
      messageDigest = stdout;
      messageDigest = messageDigest.split("\n")
      messageDigest.pop();
      var types = {
        "types": messageDigest
      };
      setTimeout(function(){
        res.json(types);
      },2000);
  });
});

app.listen(5000, function () {
  console.log('hash generator web api: http://localhost:5000/');
});
