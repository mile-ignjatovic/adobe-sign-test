import React from 'react';
import SectionTitle from '../../shared/components/SectionTitle/SectionTitle';
import classes from './Playground.module.css';
import Button from '../../shared/components/Button/Button';
import Checkbox from '../../shared/components/Checkbox/Checkbox';
import Card from '../../shared/components/Card/Card';
import Toggle from '../../shared/components/Toggle/Toggle';

const Playground = (props) => {
    return (
        <section className={classes.Playground}>
            <SectionTitle>Reusable components playground</SectionTitle>

            <Card>
                <SectionTitle>Section title component:</SectionTitle>
                <div>Simple section title Css Wrapper.</div>
                <ul>Inputs:
                    <li>props.children: string - label for the button</li>
                </ul>
                <pre className={classes['Playground-pre']}>
        {`<SectionTitle>Some section title</SectionTitle>`}
                </pre>
            </Card>

            <Card>
                <SectionTitle>Button component:</SectionTitle>
                <ul>Inputs:
                    <li>link: true/false - indicates if a button should look like a link</li>
                    <li>click: function - callback to call on click</li>
                    <li>props.children: string - label for the button</li>
                </ul>
                <Button click={() => alert('Button was clicked')}>Button Label</Button>
                <Button link click={() => alert('Link Button was clicked')}>Link Label</Button>
                <pre className={classes['Playground-pre']}>
        {`<Button click={yourCallback}>Button Label</Button>
<Button link click={yourCallback}>Link Label</Button>
        `}
                </pre>
            </Card>
           
            <Card>
                <SectionTitle>Checkbox component:</SectionTitle>
                <ul>Inputs:
                    <li>checkboxChange: function - callback called on checkbox change event. Returns true or false</li>
                    <li>props.children: string - label for the checkbox</li>
                </ul>
                <Checkbox checkboxChange={(event) => {alert('Checkbox state: ' + event)}}>Checkbox label</Checkbox>
                <pre className={classes['Playground-pre']}>
        {`<Checkbox checkboxChange={yourCallback}>Checkbox label</Checkbox>`}
                </pre>
            </Card>

            <Card>
                <SectionTitle>Toggle component:</SectionTitle>
                <ul>Inputs:
                    <li>toggleOptions: Array[string, string] - Array containing left and right label of the toggle component. If you want to TODO:</li>
                    <li>toggle: function - callback called on toggle event. Returns true or false</li>
                    <li>props.children - string - label for the button</li>
                </ul>
                <Toggle toggle={(event) => {alert('Toggle state: ' + event)}} toggleOptions={['False toggle option', 'True toggle option']}/>
                <pre className={classes['Playground-pre']}>
        {` <Toggle toggle={(event) => {yourCallback} toggleOptions={['False toggle option', 'True toggle option']}/>`}
                </pre>
            </Card>

        </section>
    );
}

export default Playground;