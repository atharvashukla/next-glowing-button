"use client ";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Stars from "./Stars";
import Intro from "./Intro";
import BrowserPanel from "./Browser/BrowserPanel";
import Browser from "./Browser/Wrapper";
import Navigation from "./Navigation";
import Tabs from "./Browser/Tabs";
import Content from "./Browser/Content";
import Normal from "./Buttons/Normal";
import Loader from "./Buttons/Loader";
import Special from "./Buttons/Special";

const BACKGROUNDS = ["#020308", "#010609", "#0B020D", "#090401", "#010902"];

enum ActiveTab {
  "Normal" = 1,
  "Loader" = 2,
  "Special" = 3,
}

const variants = {
  hidden: { opacity: 0, y: 15 },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  out: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 0.2,
      staggerChildren: 0.1,
      when: "afterChildren",
    },
  },
};

const BG_CHANGE_MS = 1000;

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(ActiveTab.Normal);
  const [bg, setBg] = useState(0);
  // change background
  setTimeout(
    () => setBg(bg < BACKGROUNDS.length - 1 ? bg + 1 : 0),
    BG_CHANGE_MS
  );
  return (
    <div
      className={`w-screen h-screen flex flex-col items-center justify-center transition-colors duration-1000`}
      style={{
        background: `radial-gradient(
        63.94% 63.94% at 50% 0%,
        rgba(255, 255, 255, 0.12) 0%,
        rgba(255, 255, 255, 0) 100%
      ),
      ${BACKGROUNDS[bg]}`,
      }}
    >
      <Stars></Stars>
      <Intro></Intro>
      <Browser onActiveTabChange={(activeIndex) => setActiveTab(activeIndex)}>
        <AnimatePresence mode="wait">
          {activeTab === 1 && (
            <Content
              // as={motion.div}
              key={ActiveTab.Normal}
              // variants={variants}
              // initial="hidden"
              // animate="open"
              // exit="out"
            >
              <Normal></Normal>
            </Content>
          )}

          {activeTab === 2 && (
            <Content
              // as={motion.div}
              key={ActiveTab.Loader}
              // variants={variants}
              // initial="hidden"
              // animate="open"
              // exit="out"
            >
              <Loader></Loader>
            </Content>
          )}

          {activeTab === 3 && (
            <Content
              // as={motion.div}
              key={ActiveTab.Special}
              // variants={variants}
              // initial="hidden"
              // animate="open"
              // exit="out"
            >
              <Special></Special>
            </Content>
          )}
        </AnimatePresence>
      </Browser>

      <div>credits</div>
      <div>notice</div>
    </div>
  );
}
