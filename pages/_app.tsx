import React from "react";
import type { AppProps } from "next/app";
import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";
import "./styles/globals.css";
import Head from "next/head";
import Web3sdkioGuideFooter from "../components/Web3sdkioGuideFooter";
import { MagicConnector } from "@web3sdkio/react/evm/connectors/magic";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

const magicLinkConnector = new MagicConnector({
  options: {
    apiKey: process.env.NEXT_PUBLIC_MAGIC_LINK_API_KEY as string,
    rpcUrls: {
      [ChainId.Mumbai]: "https://mumbai.magic.io/rpc",
    },
  },
});

// Array of wallet connectors you want to use for your dApp.
const connectors = [magicLinkConnector];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdkioProvider
      desiredChainId={activeChainId}
      walletConnectors={connectors}
      chainRpc={{
        [ChainId.Mumbai]: "https://rpc-mumbai.maticvigil.com",
      }}
    >
      <Head>
        <title>web3sdkio Magic.Link Wallet Connector</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn How To Use Web3sdkio's useMagic Hook To Connect User's To Your dApp Via Their Email, Phone Number, Or Social Media Account."
        />
        <meta
          name="keywords"
          content="Web3sdkio, Magic, Magic.Link, Wallet Connector, Social Media Wallet Connector, Email Address Wallet Connector, Phone Number Wallet Connector"
        />
      </Head>
      <Component {...pageProps} />
      <Web3sdkioGuideFooter />
    </Web3sdkioProvider>
  );
}

export default MyApp;
