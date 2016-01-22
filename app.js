var express = require('express');
var crypto = require('crypto');
var cors = require('cors')
var app = express();
app.use(cors())

// type sha1, sha256, sha512, md4, md5
//   openssl list-message-digest-algorithms
app.get('/:type/:data', function (req, res) {
      console.log(req.params.type);
      console.log(req.params.data);
      var hash = {
        "kind": req.params.type,
        "string": req.params.data,
        "hash": crypto.createHash(req.params.type).update(req.params.data).digest("hex")
      };
      setTimeout(function(){
        res.json(hash);
      },2000);
});

app.listen(5000, function () {
  console.log('open http://localhost:5000/md5/luiz');
});
