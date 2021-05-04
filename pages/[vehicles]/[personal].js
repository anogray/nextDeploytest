
import {useRouter, Link} from "next/router"


export default function person() {

    let route = useRouter();
    console.log("caterogy/id",route.query,route.query.vehicles,route.query.personal)
    return (
        <div>
            Hello from {route.query.vehicles} and itemsized is {route.query.personal} and attached routed query is &nbsp;
            <b>{route.query.personName}</b>
        </div>
    )
}

