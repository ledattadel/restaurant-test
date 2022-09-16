import React from 'react';
import UploadIcon from '@/assets/upload-icon';
import { Button, message, Upload } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import PhotoIcon from '@/assets/photo-icon';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const Dragger = () => {
    const [loading, setLoading] = React.useState(false);
    const [imageUrl, setImageUrl] = React.useState();

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }

        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? (
                <LoadingOutlined />
            ) : (
                <div>
                    <PhotoIcon />
                    <Button className="dragger__area__button">
                        <UploadIcon />
                        <p>Tải ảnh món ăn</p>
                    </Button>
                </div>
            )}
        </div>
    );

    return (
        <div className="dragger">
            <Upload.Dragger
                name="avatar"
                listType="picture-card"
                className="dragger__area"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
            >
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="avatar"
                        style={{
                            width: '100%',
                        }}
                    />
                ) : (
                    uploadButton
                )}
            </Upload.Dragger>
        </div>
    );
};

export default Dragger;
