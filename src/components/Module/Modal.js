import React, { Component } from 'react'
import { Modal, Button } from 'antd';

class NModal extends Component {
   state = { visible: false };

   showModal = () => this.setState({ visible: true });

   handleOk = () => this.setState({ visible: false });

   handleCancel = e => this.setState({ visible: false });

   render() {
      const { btnText, modalTitle, modalContent, modalStyleDisplay, modalMargin } = this.props;

      return (
         <div style={{display: modalStyleDisplay, margin: modalMargin  }}>
            <Button type="primary" onClick={this.showModal}>
               {btnText}
            </Button>
            <Modal
               title={modalTitle}
               visible={this.state.visible}
               onOk={this.handleOk}
               onCancel={this.handleCancel}
            >
               <p>{modalContent}</p>
            </Modal>
         </div>
      );
   }
}

export default NModal