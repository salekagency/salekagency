import { Card, Table, Tag } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import payment from '../../data/paiment.json'




const Orders = () => {
    const navigate = useNavigate();
    
   
    
    const tableColumns = [
      {
        title: 'Payment ID',
        dataIndex: 'paymentID',
        key: 'paymentID',
      },
      {
        title: 'client',
        dataIndex: 'clientid',
        key: 'clientid'
      },
      {
        title: 'date',
        dataIndex: 'date',
        key: 'date',
        
      },
      {
        title: 'montant',
        dataIndex: 'montant',
        key: 'montant',
        
      }
    ];
  
    return (
      <Card title={'Payment'} style={{ margin: 20 }}>
        <Table
          dataSource={payment}
          columns={tableColumns}
          pagination={{
            position: ['bottomCenter'],
          }}
          rowKey="paymentID"
        //   onRow={(orderItem) => ({
        //     onClick: () => navigate(`order/${orderItem.orderID}`)
        //   })}
        />
      </Card>
    )
  };
  
  export default Orders;