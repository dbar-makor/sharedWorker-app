import React, { useEffect, useState } from "react";
import AppWorker from "./AppWorker";

const WorkAround = (props) => {
  const [BTCState, setBTCState] = useState("");
  const [ETHState, setETHState] = useState("");
  const [BCHState, setBCHState] = useState("");
  const [LTCState, setLTCState] = useState("");
  const [XTZState, setXTZState] = useState("");
  const [LINKState, setLINKState] = useState("");
  const [XMRState, setXMRState] = useState("");
  const [ADAState, setADAState] = useState("");
  const [FTMState, setFTMState] = useState("");
  const [ALICEState, setALICEState] = useState("");

  useEffect(() => {
    AppWorker.port.onmessage = (msg) => {
      setBTCState(msg.data.BTC.bestBid);
      setETHState(msg.data.ETH.bestBid);
      setBCHState(msg.data.BCH.bestBid);
      setLTCState(msg.data.LTC.bestBid);
      setXTZState(msg.data.XTZ.bestBid);
      setLINKState(msg.data.LINK.bestBid);
      setXMRState(msg.data.XMR.bestBid);
      setADAState(msg.data.ADA.bestBid);
      setFTMState(msg.data.FTM.bestBid);
      setALICEState(msg.data.ALICE.bestBid);
    };
  }, []);

  setInterval(() => {
    AppWorker.port.postMessage(ADAState);
  }, 10000);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <div
            style={{
              backgroundColor: "green",
              border: "1px solid white",
              margin: 100,
              padding: 20
            }}
          >
            ETH: {ETHState}
          </div>
          <div
            style={{
              backgroundColor: "green",
              border: "1px solid white",
              margin: 100,
              padding: 20
            }}
          >
            BTC: {BTCState}
          </div>
          <div
            style={{
              backgroundColor: "green",
              border: "1px solid white",
              margin: 100,
              padding: 20
            }}
          >
            BCH: {BCHState}
          </div>
          <div
            style={{
              backgroundColor: "green",
              border: "1px solid white",
              margin: 100,
              padding: 20
            }}
          >
            LTC: {LTCState}
          </div>
          <div
            style={{
              backgroundColor: "green",
              border: "1px solid white",
              margin: 100,
              padding: 20
            }}
          >
            XTZ: {XTZState}
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "green",
              border: "1px solid white",
              margin: 100,
              padding: 20
            }}
          >
            LINK: {LINKState}
          </div>
          <div
            style={{
              backgroundColor: "green",
              border: "1px solid white",
              margin: 100,
              padding: 20
            }}
          >
            XMR: {XMRState}
          </div>
          <div
            style={{
              backgroundColor: "green",
              border: "1px solid white",
              margin: 100,
              padding: 20
            }}
          >
            ADA: {ADAState}
          </div>
          <div
            style={{
              backgroundColor: "green",
              border: "1px solid white",
              margin: 100,
              padding: 20
            }}
          >
            FTM: {FTMState}
          </div>
          <div
            style={{
              backgroundColor: "green",
              border: "1px solid white",
              margin: 100,
              padding: 20
            }}
          >
            ALICE: {ALICEState}
          </div>
        </div>
      </div>
    </>
  );
};

WorkAround.propTypes = {};

export default WorkAround;
