import React from 'react';

import {Button} from './Button.js';

export default {
  title: 'Components/Button2',
  component: Button,
}

const Template = (args) => <Button {...args} />;

export const ClickButton = Template.bind({});
ClickButton.args = {
    buttonText: 'Click'
};