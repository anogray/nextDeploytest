import {useRouter} from "next/router"
import Link from "next/link"
import Head from "next/head";

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
        <main>
        <Head>
          <title>App with nextjs Hotels</title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name = "description" content="An nextjs Vercel Hotel"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>

        </Head>
        <Link
          href={{
            pathname: `/vehicles/personal`,
            query: { personName: 'greenacid',obj:"allme", againobj:"allagain" },
          }}
        >  About us
        </Link>
        {comp}
        </main>
        )
}



