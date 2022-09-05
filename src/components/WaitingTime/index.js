import { TimePicker } from 'antd';
import moment from 'moment';
import React from 'react';
const format = 'HH:mm';

const App = () => (
    <TimePicker
        style={{ width: '150px' }}
        placeholder="Set Waiting Time"
        defaultValue={moment('0:00', format)}
        format={format}
    />
);

export default App;
