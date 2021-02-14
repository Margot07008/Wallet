import * as React from 'react';
import {Button, Result} from "antd";
import {urls} from "@config/apiUrls";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Link to={urls.MAIN}>
                    <Button type="primary">Back Home</Button>
                </Link>
            }
        />
    )
}

export default NotFoundPage;