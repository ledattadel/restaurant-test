import { Button, Upload } from 'antd';
import React from 'react';

const Dragger = () => {
    return (
        <div>
            <Upload.Dragger>
                <Button>Tải ảnh món ăn</Button>
            </Upload.Dragger>
        </div>
    );
};

export default Dragger;
