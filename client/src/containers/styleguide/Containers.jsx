import styled from 'styled-components';

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
`;

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  min-height: 100%;
  padding: 0 10px;
`;

export { ColumnContainer, RowContainer, PageContainer };
