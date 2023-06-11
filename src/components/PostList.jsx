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
        <TextField label="desc" source="Ques.desc" />
        <TextField label="corrAns" source="Ques.corrAns" />
        <TextField label="difficulty" source="Ques.difficulty" />
        <TextField label="level" source="Ques.level" />
        <TextField label="type" source="Ques.type" />
        <TextField label="isReviewed" source="Ques.isReviewed" />
        <EditButton />
      </Datagrid>
    </List>
  );
};
