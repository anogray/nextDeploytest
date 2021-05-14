import {useRouter} from "next/router"
import Link from "next/link"
import Head from "next/head";
import  {Html} from "next/document"

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
          <meta name = "description" content="An nextjs Vercel Hotel. This hotel is in Sitapuri area. The location
          is near Dabri Metro Station equipped with 24*7 water, electricity."/>
        </Head>
        <Link
          href={{
            pathname: `/vehicles/personal`,
            // query: { personName: 'greenacid',obj:"allme", againobj:"allagain" },
          }}
        >  About us
        </Link>
        {comp}
        </main>
        )
}



