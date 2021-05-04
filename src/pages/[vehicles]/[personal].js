
import {useRouter, Link} from "next/router"


export default function person() {

    let route = useRouter();
    console.log("caterogy/id",route.query,route.query.vehicles,route.query.personal)
    return (
        <div>
            Hello [vehicles]/personal.js
        </div>
    )
}

