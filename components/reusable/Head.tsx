import Head from "next/head"

export const HeadTag = () => {
    return (
        <Head>
            <title>Scottways TV</title>
            <meta name="description" content="Scottways TV. Landing Page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}