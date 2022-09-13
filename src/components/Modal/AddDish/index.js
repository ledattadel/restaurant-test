import * as React from 'react';
import {  Modal } from 'antd';



function AddDish({ trigger, handleTrigger }) {
    return (
      <Modal
        centered
        visible={trigger}
        onOk={handleTrigger}
        onCancel={handleTrigger}
        className='modal'
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    );
}

export default AddDish;
