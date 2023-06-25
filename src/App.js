import {
  Admin,
  Resource,
} from "react-admin";
import { PostList } from "./components/PostList";
import { dataProvider } from "./config/Dataprovier";
import { EditList } from "./components/EditList";
import { CreateList } from "./components/CreateList";
import authProvider from "./config/Auth";
import { Login } from "./components/Login";
import './App.css'
export const App = () => (
  <Admin loginPage={Login} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource
      options={{ label: "problems" }}
      name="all"
      list={PostList}
      create={CreateList}
      edit={EditList}
    />
  </Admin>
);
