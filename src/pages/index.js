import {useRouter} from "next/router"
import Link from "next/link"

const comp = (
    <>
    <h1> Hello Default Page static route
    </h1>
    </>
)

export default function index() {

    let router = useRouter();
    console.log("router",router.query)
    return (
        <div>
        <Link
          href={{
            pathname: `/vehicles/name`,
            query: { personName: 'greenacid',obj:"allme", againobj:"allagain" },
          }}
        >  About us
        </Link>
        {comp}
        </div>
        )
}



