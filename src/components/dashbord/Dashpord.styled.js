import styled from 'styled-components';

const switchColor = ({ type }) => {
  switch (type) {
    case 'INCOME':
      return `#24CCA7`;
    case 'EXPENSE':
      return `#FF6596`;
    default:
      return `#000000`;
  }
};

export const Box = styled.div`
  position: relative;
  @media screen and (max-width: 767px) {
    width: 280px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    padding-top: 20px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 69px;
    padding-top: 46px;
  }
`;

export const Ulheads = styled.ul`
  display: flex;

  width: 704px;
  padding: 15px 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  border-radius: 30px;
  background-color: white;
  @media screen and (min-width: 1280px) {
    width: 715px;
  } ;
`;

export const Liheads = styled.li`
  text-align: left;
  @media screen and (min-width: 767px) {
    :first-child {
      width: 103px;
    }
    :nth-child(2) {
      width: 83px;
    }
    :nth-child(3) {
      width: 139px;
    }
    :nth-child(4) {
      width: 118px;
    }
    :nth-child(5) {
      width: 100px;
      text-align: right;
    }
    :last-child {
    }
  }
  @media screen and (min-width: 1280px) {
    :first-child {
      width: 110px;
    }
    :nth-child(2) {
      width: 84px;
    }
    :nth-child(3) {
      width: 146px;
    }
    :nth-child(4) {
      width: 118px;
    }
    :nth-child(5) {
      width: 107px;
    }
    :last-child {
    }
  }
`;

export const Ultable = styled.ul`
  display: flex;
  @media screen and (max-width: 767px) {
    border-radius: 10px;
    overflow: hidden;
    width: 280px;

    margin-bottom: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* &:not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
    } */
  }
  @media screen and (min-width: 768px) {
    padding: 15px 8px 15px 20px;
    :not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
    }
  } ;
`;

export const Litable = styled.li`
  display: flex;
  :nth-child(5) {
    color: ${switchColor};
  }

  @media screen and (max-width: 767px) {
    display: flex;
    width: 100%;
    padding: 10px 20px;
    font-size: 16px;
    line-height: 24px;
    justify-content: space-between;
    background-color: white;
    border-left: 5px solid ${switchColor};
    :not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
      align-items: baseline;
    }
  }
  @media screen and (min-width: 768px) {
    align-items: center;
    :first-child {
      width: 103px;
    }
    :nth-child(2) {
      padding-left: 10px;
      width: 83px;
    }
    :nth-child(3) {
      width: 139px;
    }
    :nth-child(4) {
      width: 118px;
    }
    :nth-child(5) {
      width: 100px;
      text-align: right;
      flex-direction: row-reverse;
    }
    :last-child {
    }
  }
  @media screen and (min-width: 1280px) {
    :first-child {
      width: 110px;
    }
    :nth-child(2) {
      width: 84px;
    }
    :nth-child(3) {
      width: 146px;
    }
    :nth-child(4) {
      width: 118px;
    }
    :nth-child(5) {
      width: 107px;
    }
    :last-child {
    }
  }
`;

// export const Tr = styled.tr`
//   @media screen and (max-width: 767px) {
//     display: flex;
//     flex-direction: column;
//     &:not(:last-child) {
//       margin-bottom: 8px;
//     }
//     background-color: white;
//     border-radius: 10px;
//     border-left: 5px solid grey;
//     border-left: 5px solid ${switchColor};
//   }
//   position: relative;
//   @media screen and (min-width: 768px) {
//     height: 52px;
//     &:not(:last-child) {
//       &::after {
//         content: '';
//         display: block;
//         position: absolute;
//         left: 0;
//         bottom: 0;
//         width: 100%;
//         border: 1px solid #dcdcdf;
//         box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
//       }
//     }
//   }
// `;

// export const Td = styled.td`
//   @media screen and (max-width: 767px) {
//     padding: 8px 10px;
//     display: flex;
//     flex-grow: 0;
//     width: 100%;
//     align-items: center;
//     justify-content: space-between;
//     &:not(:last-child) {
//       border-bottom: 1px solid #dcdcdf;
//     }
//   }

// :nth-child(5) {
//   color: ${switchColor};
// }
//   @media screen and (min-width: 767px) {
//     :first-child {
//       width: 130px;
//       font-weit: 400;
//       padding-left: 20px;
//     }
//     :nth-child(2) {
//       padding-left: 15px;
//       text-align: left;
//       width: 84px;
//     }
//     :nth-child(3) {
//       width: 146px;
//     }
//     :nth-child(4) {
//       width: 118px;
//     }
//     :nth-child(5) {
//       text-align: right;
//       width: 108px;
//     }
//     :last-child {
//       width: 130px;
//       display: flex;
//       align-items: center;
//       padding-right: 8px;
//       padding-left: 33px;
//     }
//   }
// `;

export const BtnEdit = styled.button`
  border: none;
  background: transparent;

  display: flex;
  align-items: baseline;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.02em;

  color: rgba(0, 0, 0, 0.8);
  @media screen and (min-width: 767px) {
    margin: auto;
    margin-right: 8px;
    margin-left: 40px;
  }
  @media screen and (min-width: 767px) {
    margin-left: 33px;
  }
`;

export const BtnDel = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 12px;
  gap: 2px;

  width: 67px;
  height: 26px;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;

  color: #ffffff;
  background: #24cca7;
  border: none;
  border-radius: 18px;
`;

export const Span = styled.span`
  color: #000000;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;
