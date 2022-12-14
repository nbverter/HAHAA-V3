/**
 * Welcome to Hulk Botnet Dashboard
 * @author: Hyperclaw79
 */

import Head from 'next/head'
import Botnet from './components/botnet'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Hulk v3 Bot Dashboard</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/Hulk.png"
                    alt="Hulk"
                    width={100}
                    height={100}
                />
                <h1 style={{
                    textAlign: 'center',
                    fontSize: '3em'
                }}>
                    Hulk v3 Bot Dashboard
                </h1>
            </header>
            <main>
                <Botnet />
            </main>
        </div>
    )
}
