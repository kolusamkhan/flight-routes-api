import { Fragment } from 'react';
import FlightCards from '../../molecules/flight-cards';

export default function FlightRoutes(props) {
    const {routes, pageName} = props;
    if(!routes)
       return null;
    return(
        <Fragment>
            {!!routes && routes.length>0 && (
                <FlightCards flightCards={routes} pageName={pageName}/>
            )} 
        </Fragment>
    );
}