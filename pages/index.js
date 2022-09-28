//Criando a Home
import Head from 'next/head' //para usar o header

function Home() {
    return ( <
        div >
        <
        Head >
        <
        title > Aplicação Next.js < /title>  <
        meta charSet = 'utf-8' / >
        <
        meta name = "viewport"
        content = "initial-scale=1.0, width=device-width" / >
        <
        meta name = "author"
        content = "Ana Santos - anikape" / >
        <
        link rel = "shortcut icon"
        href = "/favicon.ico" / >
        <
        /Head>

        Menu < br / >
        Olá, Ana!

        <
        /div>) 
    };

    // o return sem parentes pq tem apenas uma linha na div
    // return com parenteses quando tem várias linhas

    export default Home;