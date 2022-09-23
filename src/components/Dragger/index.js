import React from 'react';
import ImgCrop from 'antd-img-crop';
import PhotoIcon from '@/assets/photo-icon';
import UploadIcon from '@/assets/upload-icon';
import { Upload, Button } from 'antd';

const Dragger = ({ fileList, setFileList }) => {
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    return (
        <div className="dragger">
            <ImgCrop rotate>
                <Upload listType="picture-card" fileList={fileList} onChange={onChange} onPreview={onPreview}>
                    {fileList.length < 1 && (
                        <div>
                            <PhotoIcon />
                            <div className="dragger__button">
                                <UploadIcon />
                                <p> Tải ảnh món ăn</p>
                            </div>
                        </div>
                    )}
                </Upload>
            </ImgCrop>
        </div>
    );
};

export default Dragger;
