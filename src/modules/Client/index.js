import React from 'react';
import Clients from '../../data/Client.json';
import { Space, Card, Table, Modal, Alert, Button, Input } from 'antd';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';
import { useState, useRef } from 'react';

//import { useNavigate } from 'react-router-dom';

const { confirm } = Modal;
const showDeleteConfirm = (record) => {
  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleOutlined />,
    content: `voules suprimer `,
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log(record.phone);
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};

const showUpsateModal = (record) => {
  confirm({
    title: 'Update the form',

    content: <Card>
      <>
        <Input size="large" placeholder="large size" value={record.name} />
        <br />
        <br />
        <Input placeholder="default size" value={record.phone} />
        <br />

      </>

    </Card>,
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log(record);
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};

function Client() {
  
  const [bottom, setBottom] = useState('bottomCenter');

  


// const navigate = useNavigate();
const tableColumnstitle = [
  {
      title: 'Client ID',
      dataIndex: 'id',
      key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    
  },
  {
    title: 'phone',
    dataIndex: 'phone',
    key: 'phone',

  },
  {
    title: 'delete',
    dataIndex: 'delete',
    key: 'delete',
    render: (_, record) => (
      <Space size="middle" >
        <p><EditOutlined onClick={() => {
          showUpsateModal(record);
          //setIsModalOpen(true)
        }} /></p>
        <p><DeleteOutlined className='fill-red-500' onClick={() => {
          console.log(record.name);
          showDeleteConfirm(record);
        }


        } /></p>

      </Space>

    ),
  }

];

  return (
    <>
      <Card title={'Client'} style={{ margin: 20 }}>
        <Table
          dataSource={Clients}
          columns={tableColumnstitle}
          pagination={{
            position: [bottom],
          }}
          rowKey="id"
          onRow={(clientItem) => ({
            // onClick: () =>  
            //setIsModalOpen(true)
            //navigate(`clientPage/${clientItem.id}`)                      
          })}
        />
      </Card>
    </>
  )
}
export default Client