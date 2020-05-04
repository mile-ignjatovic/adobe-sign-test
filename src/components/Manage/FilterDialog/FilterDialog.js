import React, {useState} from 'react';
import classes from './FilterDialog.module.css';
import Checkbox from '../../../shared/components/Checkbox/Checkbox';
import Button from '../../../shared/components/Button/Button';

const TIME_SELECT_OPTIONS = {
    ALL_DATES: 'All Dates',
    LAST_24_HOURS: 'Last 24 hours',
    LAST_7_DAYS: 'Last 7 days',
    LAST_30_DAYS: 'Last 30 days',
    LAST_12_MONTHS: 'Last 12 months',
    CUSTOM_DATE: 'Custom Date Range',
}

const FilterDialog = (props) => {

    let [selected, setSelected] = useState(null);

    const selectChangeHandler = (value) => {
        setSelected(value)
    }

    let options = [];
    for (let key in TIME_SELECT_OPTIONS) {
        if (key) {
            options.push(<option key={TIME_SELECT_OPTIONS[key]} value={TIME_SELECT_OPTIONS[key]}>{TIME_SELECT_OPTIONS[key]}</option>)
        }
    }

    let cls = [classes.FilterDialog, props.show ? classes['FilterDialog-active'] : ''].join(' ')
    return (
        <div className={cls}>
            <span style={{marginTop: '.5rem', display: 'inline-block', fontWeight: '400'}}>Modified date</span>
            <select className={classes['FilterDialog-select']} onChange={(ev) => selectChangeHandler(ev.target.value)}>
                {options}
            </select>
            <Checkbox styles={{marginTop: '1rem'}} checkboxChange={(ev) => console.log('display hidden content', ev)}>Display hidden content</Checkbox>
            <div className={classes['FilterDialog-buttonBox']}>
                <Button click={() => props.selected(null)} type='link'>Clear all</Button>
                <div>
                    <Button click={props.cancel} type='white'>Cancel</Button>
                    <Button click={() => props.selected(selected)} styles={{width: '5rem', marginLeft: '.5rem'}} >Apply</Button>
                </div>
            </div>
        </div>
    );
}

export default FilterDialog;