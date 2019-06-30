import React, { Component } from 'react';
import { connect } from 'react-redux'
import moment from 'moment';
import { Form, Input, Button, Checkbox, DatePicker, message } from 'antd';
import NModal from './Module/Modal';
import {addPost} from './../reducers/post';


function range(start, end) {
   const result = [];
   for (let i = start; i < end; i++) {
     result.push(i);
   }
   return result;
 }

function disabledDate(current) {
   // Can not select days before today and today
   return current && current < moment().endOf('day');
 }

 function disabledDateTime() {
   return {
     disabledHours: () => range(0, 24).splice(4, 20),
     disabledMinutes: () => range(30, 60),
     disabledSeconds: () => [55, 56],
   };
 }



class Home extends Component {

   handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
         if (!err) {
            console.log('values: ', values);
            this.props.addPost(values.message);
            message.success('Mesajiniz basarili sekilde kayit edildi');
            this.props.form.resetFields()
         }
      });
   };

   render() {
      const { getFieldDecorator } = this.props.form;

      return (
         <div>
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 19 }} onSubmit={this.handleSubmit}>
               <Form.Item label="Post">
                  {getFieldDecorator('message', {
                     rules: [{ required: true, message: 'Please input your post!' }],
                  })(<Input />)}
               </Form.Item>

               <Form.Item label="date">
                  {getFieldDecorator('date', {
                     rules: [{ required: true, message: 'Please select time!' }],
                  })(
                     <DatePicker
                        format="YYYY-MM-DD HH:mm:ss"
                        disabledDate={disabledDate}
                        disabledTime={disabledDateTime}
                        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                     />
                  )}
               </Form.Item>

               <Form.Item >
                  {getFieldDecorator('checkbox', {
                        rules: [{ required: true, message: 'Please select checkbox!' }],
                     })(
                        <Checkbox >
                           Terms and conditions 
                        </Checkbox>
                     )}
               </Form.Item>

               <Form.Item >
                  <Button type="primary" htmlType="submit">
                     Submit
                  </Button>
               </Form.Item>
            </Form>

            <hr/>
            <h3>Modal areas</h3>

            <NModal 
               btnText='first modal'
               modalTitle='Early birds'
               modalContent='The early bird catches the worm. '
               modalStyleDisplay='inline-block'
               modalMargin='0 10px 0 0'
            />
            <NModal 
               btnText='second modal'
               modalTitle='Night owls'
               modalContent='People who sleep and wake up early (early birds) do better than people who sleep and wake up late (night owls).'
               modalStyleDisplay='inline-block'
            />
         </div>
      )
   }
}


const WrappedHome = Form.create({ name: 'coordinated' })(Home);


export default connect(
   (state) => ({post: state.post}),
   {addPost}
)(WrappedHome)

