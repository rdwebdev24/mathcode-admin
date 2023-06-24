import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  ArrayInput,
  SimpleFormIterator,
  RadioButtonGroupInput,
} from "react-admin";

export const CreateList = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput multiline label="Question description" source="desc" />

        <ArrayInput label="Options" source="options">
          <SimpleFormIterator>
            <TextInput />
          </SimpleFormIterator>
        </ArrayInput>

        <TextInput label="correct option" source="corrAns" />

        <SelectInput
          source="difficulty"
          choices={[
            { id: "easy", name: "easy" },
            { id: "medium", name: "medium" },
            { id: "hard", name: "hard" },
          ]}
        />

        <TextInput source="level" />

        <TextInput source="type" />

        <RadioButtonGroupInput
          source="isReviewed"
          choices={[
              { id: "yes", name: "yes" },
              { id: "no", name: "no" },
            ]}
            />

      </SimpleForm>
    </Create>
  );
};
