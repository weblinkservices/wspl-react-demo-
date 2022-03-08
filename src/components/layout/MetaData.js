import React from 'react'
import {Helmet} from "react-helmet"

const MetaData = ({title}) => {
    return (
        <Helmet>
            <title>{`${title} | Web Link Services Pvt. Ltd. | Pune`}</title>
        </Helmet>
    )
}

export default MetaData
