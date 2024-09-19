import Styles from './AppDisplay.module.css';
const AppDisplay=(props)=>
{
    const {appsListkey}=props;
    return(
        <div className={Styles.AppDisplay_Container}>
            {
                appsListkey.map((ele)=>
                {
                    return(
                        <div key={ele.appId}  className={Styles.card}>
                            <img src={ele.imageUrl} className={Styles.card_img} alt="img"/>
                            <div className={Styles.card_p}>
                                <p>{ele.appName}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}
export default AppDisplay;