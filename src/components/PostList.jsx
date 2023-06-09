import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
} from "react-admin";

export const PostList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="desc" />
        <TextField source="corrAns" />
        <TextField source="difficulty" />
        <TextField source="level" />
        <TextField source="type" />
        <TextField source="isReviewed" />
        <EditButton />
      </Datagrid>
    </List>
  );
};
