import React, {useState, useEffect} from 'react';
// import classes from './EmailDropdownList.module.css';
import axios from 'axios-observable';
import EmailDropdown from './EmailDropdown/EmailDropdown';
import {generateId} from '../../../../shared/utils/utils';
// import DnDItem from '../../../../shared/hoc/DragAndDrop/DragItem/DnDItem';
// import DnDTarget from '../../../../shared/hoc/DragAndDrop/DragTarget/DnDTarget';
// import update from 'immutability-helper';

const EmailDropdownList = (props) => {

    // TODO: use mobx for state
    const [dropdownData, setDropdownData] = useState([]);
    let [list, setList] = useState([{id: generateId('list-item')}])
    
    useEffect(() => {
        callBeForUsersList();
    }, [])
    
    const callBeForUsersList = (query) => {
        axios.get('http://localhost:3001/users' + (query ? '?name=' + query : '')).subscribe(res => {
            if (res && res.data && res.data.length > 0) {
                setDropdownData(res.data);
            }
        });
    }

    const addNewItem = () => {
        let userDataToAdd = {id: generateId('list-item')};
        let updatedList = [...list, userDataToAdd];
        setList(updatedList);
    }

    const removeItem = (id) => {
        let updatedList = [...list];
        if (updatedList.length > 1) {
            updatedList.splice(updatedList.findIndex(el => el.id === id), 1)
            setList(updatedList);
        }
    }

    const inputValueChange = (oldVal, val, isBackspace, id) => {
        if (val && oldVal !== val && oldVal.length < 1) {
            addNewItem()
        }
        if (!val && isBackspace) {
            removeItem(id)
        }
    }

    const onNumberChange = (currIndex, newIndexTarget) => {
        let newIndex = newIndexTarget.target.value - 1; 
        let tempList = [...list];
        console.log('asd', currIndex !== list.length - 2);
        console.log('qwe', newIndex < currIndex);
        if (!(currIndex === list.length - 2 && newIndex > currIndex)) {
            let item = tempList.splice(currIndex, 1);
            tempList.splice(newIndex, 0, ...item);
            setList([...tempList]);
        }
    }

    // DnD
    // const moveItem = (dragIndex, hoverIndex) => {
    //     const dragItem = list[dragIndex]
    //     setList(
    //       update(list, {
    //         $splice: [
    //           [dragIndex, 1],
    //           [hoverIndex, 0, dragItem],
    //         ],
    //       }),
    //     )
    //   }


    return (
        <section>
            {
                list.map((el, index) => {
                    return <EmailDropdown
                                key={el.id} 
                                // moveItem={moveItem}
                                number={index + 1} 
                                isLast={list.length - 1 === index}
                                onNumberChange={(number) => onNumberChange(index, number)}
                                inputValue={(oldVal, val, isBackspace) => inputValueChange(oldVal, val, isBackspace, el.id)} 
                                removeItem={() => removeItem(el.id)} 
                            />
                        })
            }
        </section>
    );
}

export default EmailDropdownList;