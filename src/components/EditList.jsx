import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  ArrayInput,
  SimpleFormIterator,
  RadioButtonGroupInput,
  useResourceContext,
  useRecordContext,
} from "react-admin";

export const EditList = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput multiline label="Question description" source="Ques.desc" />

        <ArrayInput label="Options" source="Ques.options">
          <SimpleFormIterator>
            <TextInput />
          </SimpleFormIterator>
        </ArrayInput>

        <TextInput label="correct option" source="Ques.corrAns" />

        <SelectInput
          source="Ques.difficulty"
          choices={[
            { id: "easy", name: "easy" },
            { id: "medium", name: "medium" },
            { id: "hard", name: "hard" },
          ]}
        />

        <TextInput source="Ques.level" />

        <TextInput source="Ques.type" />

        <RadioButtonGroupInput
          source="Ques.isReviewed"
          choices={[
              { id: "yes", name: "yes" },
              { id: "no", name: "no" },
            ]}
            />

      </SimpleForm>
    </Edit>
  );
};
