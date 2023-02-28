import Head from "next/head";

interface HeadTag_Props {
    title?: string;
    metaDescription?: string;
    children?: any
}

export const HeadTag = ({title, metaDescription, children }: HeadTag_Props) => {
    return (
        <Head>
            <title>{title ?? "Scottways TV"}</title>
            <meta name="description" content={metaDescription ?? "Scottways TV. Landing Page"} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            {children}
        </Head>
    )
}