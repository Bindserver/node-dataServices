var needle = require('needle');

class DataServices {
  serverPost(whoToCall, iURL ,cb){
    try {
        var options = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }

        var data = {
          action: "uploadImageURL",
          imgURL: iURL
        }

        needle.post('https://data-services.bindserver.com/', data, options, function(err, resp){
          switch (whoToCall) {

            case 'getRaw':
              if(err) throw err;
              console.log("Data-Services-> Raw response Callback");
              cb(resp.body);
              break;

            default:
              if(err) throw err;
              cb("No Callback set ");
              break;

          }
        });
    } catch (e) {
      console.log(e);
    }
  }

}

module.exports = DataServices;
