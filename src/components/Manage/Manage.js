import React, {useState} from 'react';
import classes from './Manage.module.css';
import SectionTitle from '../../shared/components/SectionTitle/SectionTitle';
import Button from '../../shared/components/Button/Button';
import NormalInput from '../../shared/components/NormalInput/NormalInput';
import SideMenu from './SideMenu/SideMenu';
import Table from './Table/Table';

const Manage = (props) => {

    let [searchValue, setSearchValue] = useState('');
    let [tableData, setTableData] = useState('');

    const filterClickHandler = () => {
        console.log('filter');
    }
    // props.history.listen((location, action) => {
    //     console.log('location', location.hash);
    // });
    return (
        <div className={classes.Manage}>
            <div className={classes['Manage-header']}>
                <div className={classes.paddingLeft}>
                    <SectionTitle styles={{margin: '0'}}>Your agreements</SectionTitle>
                </div>
                <div className={[classes['Manage-header__filter'], classes.paddingRight].join(' ')}>
                    <Button styles={{marginRight: '.5rem'}} action click={filterClickHandler}><i className="fa fa-filter" aria-hidden="true"></i>Filter</Button>
                    <NormalInput size={'20rem'} placeholder='Search for agreements and users' value={searchValue} onInputChange={(event) => setSearchValue(event.target.value)} search></NormalInput>
                </div>
            </div>
         
            <div className={classes['Manage-body']}>
                <SideMenu {...props}></SideMenu>
                { tableData && tableData.length > 0 ?  
                    <Table></Table> : 
                    <div className={classes['Manage-body__noData']}>
                        <div>There are no Agreements</div>
                        <Button click={() => props.history.push('/send')}>Send an Agreement</Button>
                    </div>
                }
            </div> 
        </div>
    );
}

export default Manage;