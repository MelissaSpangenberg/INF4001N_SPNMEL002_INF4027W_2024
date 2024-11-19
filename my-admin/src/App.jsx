import { Admin, Resource, ListGuesser } from "react-admin";
import { PocketBaseProvider } from "./pocketbase";

const pbProvider = PocketBaseProvider("https://special-space-lamp-wr7gvrvxgjx93gwrq-8090.app.github.dev/_");

const App = () => (
  <Admin dataProvider={pbProvider.dataProvider} >
    <Resource />
    <Resource />
  </Admin>
);

export default App;