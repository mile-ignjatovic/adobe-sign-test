import React, {useState, useContext} from 'react';
import classes from './Manage.module.css';
import SectionTitle from '../../shared/components/SectionTitle/SectionTitle';
import Button from '../../shared/components/Button/Button';
import NormalInput from '../../shared/components/NormalInput/NormalInput';
import SideMenu from './SideMenu/SideMenu';
import StickyHeadTable from './StickyHeadTable/StickyHeadTable';
import StoreProvider, {ManageStoreContext} from './ManageStore';

const Manage = (props) => {
    let [searchValue, setSearchValue] = useState('');
    let [metadata, setMetadata] = useState({title: 'All', message: 'All agreements.'});

    const filterClickHandler = () => {
        console.log('filter');
    }

    // url change listener
    props.history.listen((location, action) => {
        setMetadata({title: location.state && location.state.label, message: location.state && location.state.message})
    });

    return (
        <StoreProvider>
            <div className={classes.Manage}>
                <div className={classes['Manage-header']}>
                    <div className={classes.paddingLeft}>
                        <SectionTitle styles={{margin: '0'}}>Your agreements</SectionTitle>
                    </div>
                    <div className={[classes['Manage-header__filter'], classes.paddingRight].join(' ')}>
                        <Button styles={{marginRight: '.5rem'}} type='action' click={filterClickHandler}><i className="fa fa-filter" aria-hidden="true"></i>Filter</Button>
                        <NormalInput size={'20rem'} placeholder='Search for agreements and users' value={searchValue} onInputChange={(event) => setSearchValue(event.target.value)} search></NormalInput>
                    </div>
                </div>
            
                <div className={classes['Manage-body']}>
                    <SideMenu {...props}></SideMenu>
                    <div className={classes['Manage-body__content']}>
                        <SectionTitle styles={{paddingLeft: '2rem'}}>{metadata.title}</SectionTitle>
                        <BodyContainer {...props} metadata={metadata}></BodyContainer>
                    </div>
                </div> 
            </div>
        </StoreProvider>
    );
}

export default Manage;

const BodyContainer = (props) => {
    const manageStore = useContext(ManageStoreContext);
    return  <React.Fragment>{ manageStore.tableDataSet && manageStore.tableDataSet.length > 0 ?
        <StickyHeadTable></StickyHeadTable> : 
        <div className={classes['Manage-body__content-noData']}>
            <img style={{width: '8rem', height: 'auto'}} src={require('../../shared/Assets/contract.png')} alt='contract'/>
            <div style={{paddingBottom: '.5rem', fontWeight: '300', fontSize: '2rem'}}>There are no Agreements</div>
            <div style={{paddingBottom: '1.5rem'}}>{props.metadata.message}</div>
            <Button click={() => props.history.push('/send')}>Send an Agreement</Button>
        </div>
    }
    </React.Fragment>
}