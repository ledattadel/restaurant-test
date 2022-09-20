import * as React from 'react';
import { Button, Modal } from 'antd';
import { useLocation } from 'react-router-dom';
import constants from '@/constants';

import FormAddArea from '@/components/Form/FormAddArea';
import FormAddDish from '@/components/Form/FormAddDish';

const DefaultModal = ({ trigger, handleTrigger }) => {
    const location = useLocation();
    const labelForm = constants.breadcrumb.find((v) => v.key === location.pathname);

    const switchWidthForm = (route) => {
        switch (route) {
            case '/dish':
                return window.innerWidth / 1.7;
            case '/area':
                return window.innerWidth;
            default:
                return '300px';
        }
    };

    const switchForm = (route) => {
        switch (route) {
            case '/dish':
                return <FormAddDish />;
            case '/area':
                return <FormAddArea />;
            default:
                return <></>;
        }
    };

    return (
        <Modal
            centered
            closable={false}
            visible={trigger}
            className="modal"
            // width={`${switchWidthForm(labelForm.key)}`}
            width={switchWidthForm(labelForm.key)}
            footer={[
                <Button type="primary" className="modal__btn modal__btn-cancel" onClick={handleTrigger}>
                    Hủy
                </Button>,
                <Button type="primary" className="modal__btn modal__btn-save" onClick={handleTrigger}>
                    Lưu
                </Button>,
            ]}
        >
            {labelForm.label.length > 0 ? switchForm(labelForm.key) : <></>}
        </Modal>
    );
};

export default DefaultModal;
