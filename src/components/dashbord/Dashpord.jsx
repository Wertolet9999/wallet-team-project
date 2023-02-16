import React from 'react';
import { Table, Td, Th, Thead, Thhead, Tr } from './Dashpord.styled';

const Dashpord = () => {
  return (
    <Table>
      <thead>
        <tr>
          <Thhead style={{ textAlign: 'left' }}>date</Thhead>
          <Thhead>type</Thhead>
          <Thhead>category</Thhead>
          <Thhead>comment</Thhead>
          <Thhead>sum</Thhead>
          <Thhead></Thhead>
        </tr>
      </thead>
      <tbody>
        <Tr>
          <Td>05.01.19</Td>
          <Td>type</Td>
          <Td>Products</Td>
          <Td>Vegetables for the week</Td>
          <Td>8 000.00</Td>
          <Td>
            <button>edit</button>
            <button>delete</button>
          </Td>
        </Tr>
        <Tr>
          <Td>date</Td>
          <Td>type</Td>
          <Td>category</Td>
          <Td>comment</Td>
          <Td>amount</Td>
          <Td>
            <button>edit</button>
            <button>delete</button>
          </Td>
        </Tr>
        <Tr>
          <Td>date</Td>
          <Td>type</Td>
          <Td>category</Td>
          <Td>comment</Td>
          <Td>amount</Td>
          <Td>
            <button>edit</button>
            <button>delete</button>
          </Td>
        </Tr>
        {/* {fetch.map(({
                  id,
                  transactionDate,
                  type,
                  categoryId,
                  comment,
                  amount,
                  balanceAfter,
                }) => (<tr key={id} type={type}>
        <Td>{transactionDate}</Td>
        <Td>{type}</Td>
        <Td>{categoryId}</Td>
        <Td>{comment}</Td>
        <Td>{amount}</Td>
        <Td><button>edit</button><button>delete</button></Td>
      </tr>))} */}
      </tbody>
    </Table>
  );
};

export default Dashpord;
