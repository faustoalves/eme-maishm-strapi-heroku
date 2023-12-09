import { SingleSelect, SingleSelectOption } from "@strapi/design-system/";
import { Stack } from "@strapi/design-system/Stack";
import React from "react";
import { useIntl } from "react-intl";
import { CustomEnumMap } from "../../utils/customEnum";

export default function Index(props) {
  const { name, error, description, onChange, value, intlLabel, attribute } =
    props;
  console.log("props", props);
  const list = CustomEnumMap.get(attribute.options.enumType);
  console.log("list",attribute.options.enumType, list);

  const { formatMessage } = useIntl();
  const [prompt, setPrompt] = React.useState("");
  const [err, setErr] = React.useState("");
  const [testValue, setTestValue] = React.useState(value ? value : list.defaultValue);



  React.useEffect(() => {
    console.log("testValue", testValue);
    onChange({ target: { name, value: testValue, type: attribute.type } });
  }, [testValue]);

  return (
    <Stack spacing={2}>
      <SingleSelect
        label={list.label}
        placeholder={list.placeholder}
        onClear={() => {
          setTestValue(undefined);
        }}
        value={testValue}
        onChange={setTestValue}
      >
        {list.items.map((item) => (
          <SingleSelectOption value={item.value}>
            {item.label}
          </SingleSelectOption>
        ))}
      </SingleSelect>
      ;
      {/* <TextInput
        placeholder="Please write a prompt for content to generate"
        label="Prompt"
        name="Prompt"
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      />
      <Stack spacing={2}>
        <Textarea
          placeholder="Generated text"
          label="Content"
          name="content"
          onChange={(e) =>
            onChange({
              target: { name, value: e.target.value, type: attribute.type },
            })
          }
        >
          {value}
        </Textarea>
        <Stack horizontal spacing={2}>
          <Button onClick={() => generateText()}>Generate</Button>
          <Button onClick={() => clearGeneratedText()}>Clear</Button>
        </Stack>
      </Stack> */}
    </Stack>
  );
}
