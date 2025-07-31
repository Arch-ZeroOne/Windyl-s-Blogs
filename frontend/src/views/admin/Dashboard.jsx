import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
function Dashboard() {
  const cardInfos = [
    {
      icon: "fa-solid fa-thumbs-up text-2xl",
      name: "Likes",
      backgroundColor: "#17A0B7",
    },
    {
      icon: "fa-solid fa-comments text-2xl",
      name: "Comments",
      backgroundColor: "#DC3546",
    },
    {
      icon: "fa-solid fa-share-nodes text-2xl",
      name: "Shares",
      backgroundColor: "#26A941",
    },
  ];

  return (
    <div className="flex  gap-2 mr-auto ml-auto">
      {cardInfos.map((item) => (
        <CardLayout
          icon={item.icon}
          name={item.name}
          backgroundColor={item.backgroundColor}
        />
      ))}
    </div>
  );
}

function CardLayout({ icon, name, backgroundColor }) {
  return (
    <section className="border flex items-center w-80 h-23  gap-20 border-gray-500/60 shadow-2xl rounded-xl">
      <div
        style={{
          backgroundColor,
        }}
        className="h-full p-2 w-30 text-white flex items-center justify-center self-start roundex-xl"
      >
        <i className={icon}></i>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold">{name}</p>
        <p>0</p>
      </div>
    </section>
  );
}

function Chart() {}

export default Dashboard;
