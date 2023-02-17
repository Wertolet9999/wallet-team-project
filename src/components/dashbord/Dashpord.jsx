import React from 'react';
import { MdEdit } from 'react-icons/md';
import { useMedia } from 'react-use';
import {
  BtnDel,
  BtnEdit,
  Table,
  Td,
  Span,
  Thead,
  Thhead,
  Tr,
} from './Dashpord.styled';

const Dashpord = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const isNoMobile = useMedia('(min-width: 768px)');
  const type = 'INCOME';
  return (
    <Table>
      {!isMobile && (
        <thead>
          <tr>
            <Thhead>Date</Thhead>
            <Thhead>Type</Thhead>
            <Thhead>Category</Thhead>
            <Thhead>Comment</Thhead>
            <Thhead style={{ textAlign: 'right' }}>sum</Thhead>
            <Thhead></Thhead>
          </tr>
        </thead>
      )}
      <tbody>
        <Tr type={type}>
          <Td>{isMobile && <Span>Date</Span>}05.01.19</Td>
          <Td>{isMobile && <Span>Type</Span>}+</Td>
          <Td>{isMobile && <Span>Category</Span>}Products</Td>
          <Td>{isMobile && <Span>Comment</Span>}Vegetables for the week</Td>
          <Td type={type}>{isMobile && <Span>Category</Span>}8 000.00</Td>
          <Td>
            <BtnEdit>
              <MdEdit />
            </BtnEdit>
            <BtnDel>delete</BtnDel>
          </Td>
        </Tr>
        <Tr>
          <Td>05.01.19</Td>
          <Td>+</Td>
          <Td>Products</Td>
          <Td>Vegetables for the week</Td>
          <Td>8 000.00</Td>
          <Td>
            <BtnEdit>
              <MdEdit />
            </BtnEdit>
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
