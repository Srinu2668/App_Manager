import { useState } from 'react';
import Styles from './TableList.module.css'
const TableList=(props)=>
{
    const{tabsListkey,sentClickAction,SETV}=props;

    const [updatetabListKey,setupdatedListkey]=useState(tabsListkey);

    const listClickAction=(event)=>
    {

        SETV?SETV.target.value='':'';
        let tabId_value=event.target.attributes.value.value;

        sentClickAction(tabId_value);
        
        // in MainFunction.jsx the object of tablist is given below
        /*
            const tabsList = [
            {tabId: 'SOCIAL', displayText: 'Social'},
            {tabId: 'GAMES', displayText: 'Games'},
            {tabId: 'NEWS', displayText: 'News'},
            {tabId: 'FOOD', displayText: 'Food'},
            ];

        const colorupdatetabsListkey=tabsListkey.map((e)=>
        {
            if(e.tabId===tabId_value)
            {
                return {...e,font_color:true};// ...e means spred operator it take the entire object and ass font_color:true
            }
            return {...e,font_color:false};
        })*/
        const colorupdatetabsListkey=tabsListkey.map((e)=>
        {
            if(e.tabId===tabId_value)
            {
                return {tabId: e.tabId, displayText:e.displayText,font_color:true};
            }
            return {tabId: e.tabId, displayText:e.displayText,font_color:false};
        })

        setupdatedListkey(colorupdatetabsListkey);
        }
    return(
        <ul className={Styles.ul}>
            {
                updatetabListKey.map((ele)=>
                {
                    return <li key={ele.tabId}
                    className={ele.font_color?Styles.fontcolor1:Styles.fontcolor2}
                    value={ele.tabId} onClick={listClickAction}>{ele.displayText}</li>
                })
            }
        </ul>
    )
}
export default TableList;