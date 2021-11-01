import { useSelector, useDispatch } from "react-redux";
import { contactsActions, contactsSelectors } from "../../redux/contacts";

import { Title, Input } from "./Filter.styled";

const Filter = () => {

  const value = useSelector(contactsSelectors.getFilter);
   const dispatch  = useDispatch();

 const onChange = e => dispatch(contactsActions.changeFilter(e.target.value.trim()));

  return (
    <>
      <Title>Find contact by name</Title>
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </>
  );
};


export default Filter