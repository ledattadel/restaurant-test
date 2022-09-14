import * as React from 'react';
import { Button, Modal } from 'antd';
import { useLocation } from 'react-router-dom';
import constants from '@/constants';

import FormAddDish from '@/components/Form/FormAddDish';

const DefaultModal = ({ trigger, handleTrigger }) => {
    const location = useLocation();
    const labelForm = constants.modal.find((v) => v.key === location.pathname).label;
    return (
        <Modal
            centered
            closable={false}
            visible={trigger}
            className="modal"
            width={window.innerWidth / 1.7}
            footer={[
                <Button type="primary" className="modal__btn modal__btn-cancel" onClick={handleTrigger}>
                    Hủy
                </Button>,
                <Button type="primary" className="modal__btn modal__btn-save" onClick={handleTrigger}>
                    Lưu
                </Button>,
            ]}
        >
            {labelForm && labelForm === 'FormAddDish' ? <FormAddDish /> : <></>}
        </Modal>
    );
};

export default DefaultModal;
