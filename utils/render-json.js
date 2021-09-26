import {Fragment} from 'react';
export default function RenderClientDataAsJSON(props){
    const {data, type} = props;
    return(
    <Fragment>
        <script
          type={type}
          dangerouslySetInnerHTML={{
            __html: `${JSON.stringify(data)}`,
          }}
        />
      </Fragment>
    )
}