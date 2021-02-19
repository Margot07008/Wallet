import * as React from "react";
import {CloseOutlined} from "@ant-design/icons";
import './ExitNavBar.scss'
import {urls} from "@config/apiUrls";
import {Link, useHistory} from "react-router-dom";

type Props = {
    id: string
}

const ExitNavBar:React.FC<Props> = ({id}) => {
    const history = useHistory();
    return (
        <div className="close-btn">
            {/*<Link to={urls.TOKENS.create(id)}>*/}
            {/*    <CloseOutlined style={{color:'white', fontSize:'5rem'}}/>*/}
            {/*</Link>*/}

                <CloseOutlined style={{color:'white', fontSize:'5rem'}} onClick={()=>{
                    history.goBack();
                }}/>

        </div>
    )
}

export default ExitNavBar;