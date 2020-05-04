import React, {useContext} from 'react';
import SectionTitle from '../../shared/components/SectionTitle/SectionTitle';
import classes from './Playground.module.css';
import Button from '../../shared/components/Button/Button';
import Checkbox from '../../shared/components/Checkbox/Checkbox';
import Card from '../../shared/components/Card/Card';
import Toggle from '../../shared/components/Toggle/Toggle';
import NormalInput from '../../shared/components/NormalInput/NormalInput';
import TextArea from '../../shared/components/TextArea/TextArea';
import {AppStoreContext} from '../../AppStore';
import TooltipIcon from '../../shared/components/TooltipIcon/TooltipIcon';

const Playground = (props) => {
    const appStore = useContext(AppStoreContext);
    let modalContent = <div>Dummy Modal Content</div>;
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
                    <li>type: 'link | action | white | null' - indicates how a button should look like</li>
                    <li>click: function - callback to call on click</li>
                    <li>props.children: string - label for the button</li>
                </ul>
                <Button click={() => console.log('Button was clicked')}>Button Label</Button>
                <br />
                <Button type='link' click={() => console.log('Link Button was clicked')}>Link Label</Button>
                <pre className={classes['Playground-pre']}>
                    {`<Button click={yourCallback}>Button Label</Button>
<Button type='link' click={yourCallback}>Link Label</Button>
        `}
                </pre>
            </Card>

            <Card>
                <SectionTitle>Checkbox component:</SectionTitle>
                <ul>Inputs:
                    <li>checkboxChange: function - callback called on checkbox change event. Returns true or false</li>
                    <li>checked: boolean - set starting state</li>
                    <li>props.children: string - label for the checkbox</li>
                </ul>
                <Checkbox checkboxChange={(event) => { console.log('Checkbox state: ' + event) }}>Checkbox label</Checkbox>
                <Checkbox checked={true} checkboxChange={(event) => { console.log('Checkbox state: ' + event) }}>Checked Checkbox label</Checkbox>
                <pre className={classes['Playground-pre']}>
                    {`<Checkbox checkboxChange={yourCallback}>Checkbox label</Checkbox>
<Checkbox 
    checked={true} 
    checkboxChange={yourCallback}>Checked Checkbox label
</Checkbox>
`}
                </pre>
            </Card>

            <Card>
                <SectionTitle>Toggle component: </SectionTitle>
                <ul>Inputs:
                    <li>toggleOptions: Array[string, string] - Array containing left and right label of the toggle component. If you want to TODO:</li>
                    <li>checked: boolean - set starting state</li>
                    <li>toggle: function - callback called on toggle event. Returns true or false</li>
                </ul>
                <Toggle
                    checked={true}
                    toggleOptions={['False option label', 'True option label']}
                    toggle={(event) => { console.log('Toggle state: ' + event) }} />
                <br />
                <Toggle
                    toggleOptions={['Only false option label']}
                    toggle={(event) => { console.log('Toggle state: ' + event) }} />
                <br />
                <Toggle
                    toggleOptions={[undefined, 'Only True option label']}
                    toggle={(event) => { console.log('Toggle state: ' + event) }} />
                <br />
                <Toggle
                    toggle={(event) => { console.log('Toggle state: ' + event) }} />
                <pre className={classes['Playground-pre']}>
                    {`<Toggle checked={true} toggle={(event) => {yourCallback} 
    toggleOptions={['False option label', 'True option label']}/>
<Toggle toggle={(event) => {yourCallback}  toggleOptions={['Only false option label']}/>
<Toggle toggle={(event) => {yourCallback} toggleOptions={[undefined, 'Only True option label']}/>
<Toggle toggle={(event) => {yourCallback} />
        `}
                </pre>
            </Card>

            <Card>
                <SectionTitle>Normal Input component:</SectionTitle>
                <ul>Inputs:
                    <li>props.placeholder: string - placeholder</li>
                    <li>props.value: string - value</li>
                    <li>props.label: string - label. optional</li>
                    <li>props.size: string - expect width string eg.: '30px'</li>
                    <li>props.hideBottomBorder: boolean - if true no border-bottom</li>
                    <li>props.backgroundColor: expect color string eg.: '#eeeeee'</li>
                    <li>props.onInputChange: function - callback called on input change</li>
                    <li>props.onInputFocus: function - callback called on input focus change. returns true or false</li>
                    <li>props.hasError: boolean - signifies if the input has an validation error</li>
                </ul>
                <NormalInput size="50%" />
                <NormalInput placeholder="your placeholder" label="Your label" size="30%" backgroundColor="#eee" />
                <pre className={classes['Playground-pre']}>
                    {`<NormalInput size="50%"/>
<NormalInput placeholder="your placeholder" label="Your label" size="30%" backgroundColor="#eee"/>
`}
                </pre>
            </Card>

            <Card>
                <SectionTitle>TextArea component:</SectionTitle>
                <ul>Inputs:
                    <li>props.placeholder: string - placeholder</li>
                    <li>props.value: string - value</li>
                    <li>props.label: string - label. optional</li>
                    <li>props.size: string - expect width string eg.: '30px'</li>
                    <li>props.rows: string - number of rows, default 5</li>
                    <li>props.hideBottomBorder: boolean - if true no border-bottom</li>
                    <li>props.onTextChange: function - callback called on input change</li>
                </ul>
                <TextArea rows="2" size="50%" />
                <TextArea placeholder="your textarea placeholder" label="Your textarea label" size="30%" />
                <pre className={classes['Playground-pre']}>
                    {`<TextArea rows="2" size="50%"/>
<TextArea placeholder="your textarea placeholder" label="Your textarea label" size="30%"/>
`}
                </pre>
            </Card>

            <Card>
                <SectionTitle>Modal component:</SectionTitle>
                <ul>Inputs:
                    <li>NONE: used with mobx AppStore.js</li>
                    <p>To use the modal, you have to import AppStoreContext from where you want to open the modal and provide a jsx modal body content and title as a string.</p>
                    <p>Title is optional</p>
                    <p>Pressing X icon in the top right corner of the modal or by clicking on the backdrop the modal closes.</p>
                </ul>
                <Button click={() => appStore.showHideModal(modalContent, 'Modal Title')}>Open Modal</Button>
                <pre className={classes['Playground-pre']}>
                    {`import React, {useContext} from 'react'
import {AppStoreContext} from './AppStore.js'

const funcCmp = (props) => {
    const appStore = useContext(AppStoreContext);
    
    let modalContent = <div>Dummy modal content</div>;
   
    return <div>Component content<button onClick={() => appStore.showHideModal(modalContent, 'Modal Title')}/></div>
} 
`}
                </pre>
            </Card>

            <Card>
                <SectionTitle>TooltipIcon component:</SectionTitle>
                <ul>Inputs:
                    <li>props.styles: object - pass custom styles</li>
                    <li>props.click: function - callback called on tooltip click</li>
                </ul>
                <TooltipIcon click={() => alert('tooltip clicked')} />
                <pre className={classes['Playground-pre']}>
                    {`<TooltipIcon click={() => alert('tooltip clicked')} />`}
                </pre>
            </Card>
            
            <Card>
            Icons made by <a href="https://www.flaticon.com/authors/pixelmeetup" title="Pixelmeetup">Pixelmeetup</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </Card>
        </section>
    );
}

export default Playground;