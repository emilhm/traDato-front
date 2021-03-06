import styled from 'styled-components';

const DashboardStyle = styled.div`
text-align: left;
padding: 0 10px;
> div{
  margin-bottom: 25px;
}
.searchInputs{
  display: flex;
  input{
    max-width: 210px;
    width: 210px;
    margin-left: 15px;
    border: 0;
    border-bottom: 1px solid;
    border-radius: 0;
  }
  .ant-select-selection{
    border: 0;
    border-bottom: 1px solid;
    border-radius: 0;
    width: 210px;
    outline: 0;
  }
  .ant-input:focus, .ant-select-selection:focus, .ant-select-selection:active{
    box-shadow: none;
  }
  button{
    margin-left: 15px;
  }
}
`;

export default DashboardStyle;
