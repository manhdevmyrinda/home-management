import App from "./app";
import IndexRoute from "./routes/index.route";

const indexRoute = new IndexRoute(); 
const app = new App([
    indexRoute
]);

app.listen();

