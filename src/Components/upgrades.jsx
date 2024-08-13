import { useState, useEffect, useMemo } from "react";

export default function UpBtn(props) {
  const initialData = [
    { id: 1, btnname: "Transmutation", btnimage: "img/id1.png" },
    { id: 2, btnname: "Isotopes", btnimage: "img/id2.png" },
    { id: 3, btnname: "Enrichment Plant", btnimage: "img/id3.png" },
    { id: 4, btnname: "Nuclear Binding", btnimage: "img/id4.jpg" },
    { id: 5, btnname: "Binding Energy", btnimage: "img/id5.png" },
    { id: 6, btnname: "Reactor Core", btnimage: "img/id6.png" },
    { id: 7, btnname: "Fission", btnimage: "img/id7.png" },
    { id: 8, btnname: "Antiparticle Fission", btnimage: "img/id8.png" },
    { id: 9, btnname: "Cold Fission", btnimage: "img/id9.png" },
    { id: 10, btnname: "Zero Point Fission", btnimage: "img/id10.png" },
  ];

  const [upgrades, setUpgrades] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function fetchUpgrades() {
      try {
        const response = await fetch(
          "https://cookie-upgrade-api.vercel.app/api/upgrades"
        );
        const data = await response.json();
        if (isMounted) {
          setUpgrades(data);
        }
      } catch (error) {
        console.error("Error fetching upgrades:", error);
      }
    }
    fetchUpgrades();
    return () => {
      isMounted = false;
    };
  }, []);

  function showHide() {
    setShow((prevShow) => !prevShow);
  }

  const renderedUpgrades = useMemo(() => {
    return upgrades.map((upgrade) => {
      const data = initialData.find((item) => item.id === upgrade.id); // Find the corresponding data
      if (!data) return null; // Handle case where data might not be found
      return (
        <button
          className="upgradeBtn"
          onClick={() => props.buyUpgrade(upgrade.cost, upgrade.increase)}
          key={upgrade.id}
        >
          <div className="btnname">
            <img className="btnimage" src={data.btnimage} alt={data.btnname} />
            <h4>{data.btnname}</h4>
          </div>
          <p> Increase your atoms per second by: {upgrade.increase}</p>
          <p>Cost: {upgrade.cost} atoms</p>
        </button>
      );
    });
  }, [upgrades, initialData, props]);

  return (
    <>
      <button className="upgradeBtn" onClick={showHide}>
        Upgrade Shop
      </button>
      <div className={show ? "buttonContaineropen" : "buttonContainerclosed"}>
        {renderedUpgrades}
      </div>
    </>
  );
}
