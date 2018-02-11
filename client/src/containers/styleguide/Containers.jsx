import styled from 'styled-components';

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.alignItems || 'center'};
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.alignItems || 'center'};
`;

export { ColumnContainer, RowContainer };
