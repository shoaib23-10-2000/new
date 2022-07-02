import React, { useState } from "react";
import { Navbar } from "../components";
import { Button, Card } from "@mui/material";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import { AiFillPlayCircle } from "react-icons/ai";
import Typography from "@mui/material/Typography";
import wallet from "../../images/polymarket.webp";
import wallet1 from "../../images/aave.webp";
import wallet2 from "../../images/set.webp";
import wallet3 from "../../images/tornado.webp";
import wallet4 from "../../images/foundation.webp";
import wallet5 from "../../images/opensea.webp";
import wallet6 from "../../images/marble.webp";
import wallet7 from "../../images/audius.webp";
import wallet8 from "../../images/cryptovoxels.webp";
import wallet9 from "../../images/axie.webp";
import wallet10 from "../../images/decentraland.webp";
import wallet11 from "../../images/gods.webp";
import wallet12 from "../../images/ens.webp";
import wallet13 from "../../images/gitcoin.webp";
import wallet14 from "../../images/golem.webp";
import wallet15 from "../../images/brave.webp";
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const card = (
  <React.Fragment>
    <CardContent className="gradient-bg-services text-white">
      <Typography variant="h5" component="h2">
        <h2 className="text-white text-base font-semibold text-2xl">
          Decentralized finance 💸
        </h2>
      </Typography>
      <div style={{ borderBottom: "1px solid white", padding: "10px" }}>
        <Typography variant="h6" component="p">
          <p>
            These are applications that focus on building out financial services
            using cryptocurrencies. They offer the likes of lending, borrowing,
            earning interest, and private payments– no personal data required.
          </p>
        </Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <div style={{ padding: "10px" }}>
          <img src={wallet} alt="logo" width={50} height={1} />
        </div>
        <Typography variant="" component="h3" style={{ padding: "3px" }}>
          <h3
            style={{ display: "flex", flexDirection: "row" }}
            className="text-2xl"
          >
            Polymarket
          </h3>
          <Typography>
            <h4 className="text-1xl">
              Bet on outcomes. Trade on information markets.
            </h4>
          </Typography>
        </Typography>
        <a href="https://polymarket.com/" target="_blank">
          <div style={{ paddingLeft: "63px" }}>
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">Go</p>
            </button>
          </div>
        </a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <div style={{ padding: "10px" }}>
          <img src={wallet1} alt="logo" width={50} height={2} />
        </div>
        <Typography variant="" component="h2" style={{ padding: "3px" }}>
          <h2
            style={{ display: "flex", flexDirection: "row" }}
            className="text-2xl"
          >
            Aave
          </h2>
          <Typography>
            <h3 className="text-1xl">
              Lend your tokens to earn interest <br />
              and withdraw any time.
            </h3>
          </Typography>
        </Typography>
        <a href="https://aave.com/" target="_blank">
          <div style={{ paddingLeft: "171px" }}>
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">Go</p>
            </button>
          </div>
        </a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <div style={{ padding: "10px" }}>
          <img src={wallet2} alt="logo" width={50} height={2} />
        </div>
        <Typography variant="" component="h2" style={{ padding: "3px" }}>
          <h2
            style={{ display: "flex", flexDirection: "row" }}
            className="text-2xl"
          >
            Tornado cash
          </h2>
          <Typography>
            <h3 className="text-1xl">
              Send anonymous transactions on Ethereum.
            </h3>
          </Typography>
        </Typography>
        <a href="https://tornado.cash/" target="_blank">
          <div style={{ paddingLeft: "88px" }}>
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">Go</p>
            </button>
          </div>
        </a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <div style={{ padding: "10px" }}>
          <img src={wallet3} alt="logo" width={50} height={2} />
        </div>
        <Typography variant="" component="h2" style={{ padding: "3px" }}>
          <h2
            style={{ display: "flex", flexDirection: "row" }}
            className="text-2xl"
          >
            Token Sets
          </h2>
          <Typography>
            <h3 className="text-1xl">
              Crytp investment strategies that automatically rebalance.
            </h3>
          </Typography>
        </Typography>
        <a href="https://www.tokensets.com/" target="_blank">
          <button
            type="button"
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <p className="text-white text-base font-semibold">Go</p>
          </button>
        </a>
      </div>
    </CardContent>
  </React.Fragment>
);
const card1 = (
  <React.Fragment>
    <CardContent className="gradient-bg-services text-white">
      <Typography variant="h3" component="h2">
        <h2 className="text-white text-base font-semibold text-2xl">
          Decentralized arts and collectibles 🖼️
        </h2>
      </Typography>
      <div style={{ borderBottom: "1px solid white", padding: "10px" }}>
        <Typography>
          <p>
            These are applications that focus on digital ownership, increasing
            earning potential for creators, and inventing new ways to invest in
            your favourite creators and their work.
          </p>
        </Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <div style={{ padding: "10px" }}>
          <img src={wallet4} alt="logo" width={50} height={1} />
        </div>
        <Typography style={{ padding: "3px" }}>
          <h2
            style={{ display: "flex", flexDirection: "row" }}
            className="text-2xl"
          >
            Foundation
          </h2>
          <Typography>
            <h3 className="text-1xl">
              Invest in unique editions of digital artwork and trade pieces with
              other buyers.
            </h3>
          </Typography>
        </Typography>
        <a href="https://foundation.app/" target="_blank">
          <div style={{ paddingLeft: "10px" }}>
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">Go</p>
            </button>
          </div>
        </a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <div style={{ padding: "10px" }}>
          <img src={wallet5} alt="logo" width={50} height={1} />
        </div>
        <Typography style={{ padding: "3px" }}>
          <h2
            style={{ display: "flex", flexDirection: "row" }}
            className="text-2xl"
          >
            OpenSea
          </h2>
          <Typography>
            <h3 className="text-1xl">
              Buy, sell, discover, and trade limited-edition goods.
            </h3>
          </Typography>
        </Typography>
        <a href="https://opensea.io/" target="_blank">
          <div style={{ paddingLeft: "201px" }}>
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">Go</p>
            </button>
          </div>
        </a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <div style={{ padding: "10px" }}>
          <img src={wallet6} alt="logo" width={50} height={1} />
        </div>
        <Typography style={{ padding: "3px" }}>
          <h2
            style={{ display: "flex", flexDirection: "row" }}
            className="text-2xl"
          >
            Marble.cards
          </h2>
          <Typography>
            <h3 className="text-1xl">
              Create and trade unique digital cards based on URLs.
            </h3>
          </Typography>
        </Typography>
        <a href="https://marble.cards/.com/" target="_blank">
          <div style={{ paddingLeft: "180px" }}>
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold ">Go</p>
            </button>
          </div>
        </a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <div style={{ padding: "10px" }}>
          <img src={wallet7} alt="logo" width={50} height={1} />
        </div>
        <Typography style={{ padding: "3px" }}>
          <h2
            style={{ display: "flex", flexDirection: "row" }}
            className="text-2xl"
          >
            Audius
          </h2>
          <Typography>
            <h3 className="text-1xl">
              Decentralized streaming platform. Listens = money for creators,
              not labels.
            </h3>
          </Typography>
        </Typography>
        <a href="https://audius.co/" target="_blank">
          <div style={{ paddingLeft: "30px" }}>
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold ">Go</p>
            </button>
          </div>
        </a>
      </div>
    </CardContent>
  </React.Fragment>
);
const card2 = (
  <React.Fragment>
    <CardContent className="gradient-bg-services text-white">
      <Typography variant="h5" component="h2">
        <h2 className="text-white text-base font-semibold text-2xl">
          Decentralized gaming 🎮
        </h2>
      </Typography>
      <div style={{ borderBottom: "1px solid white", padding: "10px" }}>
        <Typography>
          <p>
            These are applications that focus on the creation of virtual worlds
            and battling other players using collectibles that hold real-world
            value.
          </p>
        </Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <div style={{ padding: "10px" }}>
          <img src={wallet8} alt="logo" width={50} height={1} />
        </div>
        <Typography style={{ padding: "3px" }}>
          <h2
            style={{ display: "flex", flexDirection: "row" }}
            className="text-2xl"
          >
            Cryptovoxels
          </h2>
          <Typography>
            <h3 className="text-1xl">
              Create art galleries, build stores, and buy land – an Ethereum
              virtual world.
            </h3>
          </Typography>
        </Typography>
        <a href="https://www.cryptovoxels.com/" target="_blank">
          <div style={{ paddingLeft: "80px" }}>
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold ">Go</p>
            </button>
          </div>
        </a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <div style={{ padding: "10px" }}>
          <img src={wallet9} alt="logo" width={50} height={1} />
        </div>
        <Typography style={{ padding: "3px" }}>
          <h2
            style={{ display: "flex", flexDirection: "row" }}
            className="text-2xl"
          >
            Axie Infinity
          </h2>
          <Typography>
            <h3 className="text-1xl">
              Trade and battle creatures called Axies. And earn as you play –
              available on mobile
            </h3>
          </Typography>
        </Typography>
        <a href="https://axieinfinity.com/" target="_blank">
          <div style={{ paddingLeft: "20px" }}>
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold ">Go</p>
            </button>
          </div>
        </a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <div style={{ padding: "10px" }}>
          <img src={wallet10} alt="logo" width={50} height={1} />
        </div>
        <Typography style={{ padding: "3px" }}>
          <h2
            style={{ display: "flex", flexDirection: "row" }}
            className="text-2xl"
          >
            Decentraland
          </h2>
          <Typography>
            <h3 className="text-1xl">
              Collect, trade virtual land in a virtual world you can explore.
            </h3>
          </Typography>
        </Typography>
        <a href="https://decentraland.org/" target="_blank">
          <div style={{ paddingLeft: "195px" }}>
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold ">Go</p>
            </button>
          </div>
        </a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <div style={{ padding: "11px" }}>
          <img src={wallet11} alt="logo" width={50} height={1} />
        </div>
        <Typography style={{ padding: "3px" }}>
          <h2
            style={{ display: "flex", flexDirection: "row" }}
            className="text-2xl"
          >
            Gods Unchained
          </h2>
          <Typography>
            <h3 className="text-1xl">
              Strategic trading card game. Earn cards by playing that you can
              sell in real life.
            </h3>
          </Typography>
        </Typography>
        <a href="https://godsunchained.com/" target="_blank">
          <div style={{ paddingLeft: "52px" }}>
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold ">Go</p>
            </button>
          </div>
        </a>
      </div>
    </CardContent>
  </React.Fragment>
);
const card3 = (
  <React.Fragment>
    <CardContent className="gradient-bg-services text-white">
      <Typography variant="h5" component="h2">
        <h2 className="text-white text-base font-semibold text-2xl">
          Decentralized technology ⌨️
        </h2>
      </Typography>
      <div style={{ borderBottom: "1px solid white", padding: "10px" }}>
        <p>
          These are applications that focus on decentralizing developer tools,
          incorporating cryptoeconomic systems into existing technology, and
          creating marketplaces for open-source development work.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <div style={{ padding: "1px" }}>
          <img src={wallet12} alt="logo" width={50} height={1} />
        </div>
        <Typography style={{ padding: "3px" }}>
          <h2
            style={{ display: "flex", flexDirection: "row" }}
            className="text-2xl"
          >
            Ethereum Name Service (ENS)
          </h2>
          <Typography>
            <h3 className="text-1xl">
              User-friendly names for Ethereum addresses and decentralized
              sites.
            </h3>
          </Typography>
        </Typography>
        <a href="https://ens.domains/" target="_blank">
          <div style={{ paddingLeft: "10px" }}>
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold ">Go</p>
            </button>
          </div>
        </a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <div style={{ padding: "1px" }}>
          <img src={wallet13} alt="logo" width={50} height={1} />
        </div>
        <Typography style={{ padding: "3px" }}>
          <h2
            style={{ display: "flex", flexDirection: "row" }}
            className="text-2xl"
          >
            Gitcoin
          </h2>
          <Typography>
            <h3 className="text-1xl">
              Earn crypto working on open-source software.
            </h3>
          </Typography>
        </Typography>
        <a href="https://gitcoin.co/" target="_blank">
          <div style={{ paddingLeft: "178px" }}>
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold ">Go</p>
            </button>
          </div>
        </a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <div style={{ padding: "1px" }}>
          <img src={wallet14} alt="logo" width={50} height={1} />
        </div>
        <Typography style={{ padding: "3px" }}>
          <h2
            style={{ display: "flex", flexDirection: "row" }}
            className="text-2xl"
          >
            Golem
          </h2>
          <Typography>
            <h3 className="text-1xl">
              Access shared computing power or rent your own resources.
            </h3>
          </Typography>
        </Typography>
        <a href="https://www.golem.network/" target="_blank">
          <div style={{ paddingLeft: "72px" }}>
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">Go</p>
            </button>
          </div>
        </a>
      </div>
      <div style={{ display: "flex", flexDirection: "row", padding: "10px" }}>
        <div style={{ padding: "1px" }}>
          <img src={wallet15} alt="logo" width={50} height={1} />
        </div>
        <Typography style={{ padding: "3px" }}>
          <h2
            style={{ display: "flex", flexDirection: "row" }}
            className="text-2xl"
          >
            Brave
          </h2>
          <Typography>
            <h3 className="text-1xl">
              Earn tokens for browsing and support your favorite creators with
              them.
            </h3>
          </Typography>
        </Typography>
        <a href="https://brave.com/" target="_blank">
          <div style={{ paddingLeft: "2px" }}>
            <button
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold ">Go</p>
            </button>
          </div>
        </a>
      </div>
    </CardContent>
  </React.Fragment>
);
const Explore = () => {
  const [tet, setet] = useState(false);
  const [tet1, setet1] = useState(false);
  const [tet2, setet2] = useState(false);
  const [tet3, setet3] = useState(false);
  function toggle(btntoggle) {
    btntoggle((current) => !current);
  }
  return (
    <div className="flex w-full justify-center items-center gradient-bg-services ">
      <div className="items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
            Explore dapps
          </h1>
        </div>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          What is a dapp (decentralized application)?
        </p>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          Dapps are decentralized apps. They are like normal apps, and offer
          similar functions, but the key difference is that they are run on a
          peer-to-peer network, such as a blockchain, using smart contracts.
        </p>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          As dapps are decentralized, they can’t be controlled by a single
          person or entity. Dapps also often have the following features:
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            ● They are open-source and operate on their own without anyone
            entity controlling them.
            <br />
            ● Their data and records are public.
            <br />● They use a cryptographic token to help keep their network
            secure.
          </p>
        </p>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          A lot of dapps are still experimental, testing the possibilties of
          decentralized networks.
        </p>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          But there have been some successful early movers in the technology,
          financial, gaming and collectibles categories.
        </p>
        <h2
          className="text-4xl text-white text-gradient py-1 "
          style={{ textAlign: "center", paddingRight: 60 }}
        >
          Choose category
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div style={{ paddingRight: "5px" }}>
            <button
              onClick={() => {
                toggle(setet);
                setet2(false);
                setet1(false);
                setet3(false);
              }}
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold text-1xl">
                Finance 💸
              </p>
            </button>
          </div>
          <div style={{ paddingRight: "5px" }}>
            <button
              onClick={() => {
                toggle(setet1);
                setet2(false);
                setet(false);
                setet3(false);
              }}
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold text-1xl">
                Arts and Collectibles 🖼️
              </p>
            </button>
          </div>
          <div style={{ paddingRight: "5px" }}>
            <button
              onClick={() => {
                setet(false);
                setet1(false);
                setet3(false);
                toggle(setet2);
              }}
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold text-1xl">
                Gaming 🎮
              </p>
            </button>
          </div>
          <div style={{ paddingRight: "5px" }}>
            <button
              onClick={() => {
                toggle(setet3);
                setet(false);
                setet1(false);
                setet2(false);
              }}
              type="button"
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold text-1xl">
                Technology ⌨️
              </p>
            </button>
          </div>
        </div>
        {tet ? (
          <Box sx={{ minWidth: 100 }}>
            <Card variant="outlined">{card}</Card>
          </Box>
        ) : null}
        {tet1 ? (
          <Box sx={{ minWidth: 100 }}>
            <Card variant="outlined">{card1}</Card>
          </Box>
        ) : null}
        {tet2 ? (
          <Box sx={{ minWidth: 100 }}>
            <Card variant="outlined">{card2}</Card>
          </Box>
        ) : null}
        {tet3 ? (
          <Box sx={{ minWidth: 100 }}>
            <Card variant="outlined">{card3}</Card>
          </Box>
        ) : null}
      </div>
    </div>
  );
};

export default Explore;
