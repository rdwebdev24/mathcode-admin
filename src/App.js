import {
  Admin,
  Resource,
} from "react-admin";
import { PostList } from "./components/PostList";
import { dataProvider } from "./config/Dataprovier";
import { EditList } from "./components/EditList";
import { CreateList } from "./components/CreateList";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      options={{ label: "problems" }}
      name="all"
      list={PostList}
      create={CreateList}
      edit={EditList}
    />
  </Admin>
);
