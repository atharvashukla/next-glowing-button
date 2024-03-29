import { ReactNode, useEffect, useRef, useState } from "react";
import BrowserPanel from "./BrowserPanel";
import Navigation from "../Navigation";
import Tabs from "./Tabs";
import Item from "./Item";
import Content from "./Content";

export default function Browser({
  children,
  onActiveTabChange,
}: {
  children: ReactNode;
  onActiveTabChange: (val: number) => void;
}) {
  const TabsRef = useRef<HTMLDivElement | null>(null);

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const refs = useRef<HTMLDivElement[]>([]);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    if (refs.current.length > 0) {
      const activeRef = refs.current[activeTab - 1];
      setLeft(activeRef.offsetLeft);
      setRight(
        // @ts-ignore
        activeRef.parentNode.parentNode.offsetWidth -
          (activeRef.offsetLeft + activeRef.offsetWidth)
      );

      onActiveTabChange(activeTab);
    }
  }, [activeTab]);
  return (
    <div className="relative mt-[116px] before:content-[''] before:w-[665px] before:h-[470px] before:bg-[url(/grid.svg)] before:bg-cover before:absolute before:top-[calc(50%-235px)] before:right-[calc(50%-332px)]">
      <BrowserPanel>
        <Navigation>
          <Tabs>
            <Item
              ref={(el) => {
                if (el) {
                  refs.current.push(el);
                }
              }}
              active={activeTab === 1}
              onClick={() => setActiveTab(1)}
            >
              Normal
            </Item>
            <Item
              ref={(el) => {
                if (el) {
                  refs.current.push(el);
                }
              }}
              active={activeTab === 2}
              onClick={() => setActiveTab(2)}
            >
              Loader
            </Item>
            <Item
              ref={(el) => {
                if (el) {
                  refs.current.push(el);
                }
              }}
              active={activeTab === 3}
              onClick={() => setActiveTab(3)}
            >
              Special
            </Item>
          </Tabs>
        </Navigation>
        <Content>{children}</Content>
      </BrowserPanel>
    </div>
  );
}
