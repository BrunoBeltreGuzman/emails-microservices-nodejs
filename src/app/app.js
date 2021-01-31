const express = require("express");
const middleware = require("../middlewares/middlewares");
const routes = require("../routers/router");

class App {
       constructor(port) {
              this.port = port;
              this.app = express();
              this.settings();
              this.middelware();
              this.routers();
       }

       settings() {
              this.app.set("port", process.env.PORT || this.port);
       }

       middelware() {
              this.app.use(middleware);
       }

       routers() {
              this.app.use(routes);
       }

       start() {
              this.app.listen(this.app.get("port"));
              console.log(
                     "Server Starting Successfully, in port " +
                            this.app.get("port")
              );
              console.log("http://localhost:" + this.app.get("port"));
       }
}

module.exports = App;
