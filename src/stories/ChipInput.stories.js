import React from "react";
import { storiesOf } from "@storybook/react";
import ChipInput from "../components/ChipInput/ChipInput";

const stories = storiesOf("ChipInput", module);

stories.add("ChipInput", () => {
  return <ChipInput />;
});
