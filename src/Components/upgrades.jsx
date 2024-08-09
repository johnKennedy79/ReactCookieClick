import { useState, useEffect } from "react";

export default function UpBtn(props) {
  const [upgrade, setUpgrade] = useState([]);
  const [upgradedata, setUpgradedata] = useState([
    { id: 1, btnname: "Transmutation", btnimage: "img/id1.png" },
    { id: 2, btnname: "Isotopes", btnimage: "img/id2.png" },
    {
      id: 3,
      btnname: "Enrichmant Plant",
      btnimage: "img/id3.png",
    },
    { id: 4, btnname: "Nuclear Binding", btnimage: "img/id4.jpg" },
    { id: 5, btnname: "Binding Energy", btnimage: "img/id5.png" },
    { id: 6, btnname: "Reactor Core", btnimage: "img/id6.png" },
    { id: 7, btnname: "Fission", btnimage: "img/id7.png" },
    { id: 8, btnname: "Antiparticle Fission", btnimage: "img/id8.png" },
    { id: 9, btnname: "Cold Fission", btnimage: "img/id9.png" },
    {
      id: 10,
      btnname: "Zero Point Fission",
      btnimage: "img/id10.png",
    },
  ]);
  const [show, setShow] = useState(false);
  useEffect(function () {
    async function getUpgrade() {
      const response = await fetch(
        "https://cookie-upgrade-api.vercel.app/api/upgrades"
      );
      const data = await response.json();
      setUpgrade(data);
    }
    getUpgrade();
  }, []);
  function showHide() {
    setShow(!show);
  }
  return (
    <>
      <button className="upgradeBtn" onClick={showHide}>
        Upgrade Shop
      </button>
      <div className={show ? "buttonContaineropen" : "buttonContainerclosed"}>
        {upgrade.map(function (upgrade, index) {
          console.log("id is", upgrade.id, "name is", upgrade.name);
          return (
            <button
              className="upgradeBtn"
              onClick={() => props.buyUpgrade(upgrade.cost, upgrade.increase)}
              key={upgrade.id}
            >
              <div className="btnname">
                <img
                  className="btnimage"
                  src={upgradedata[index].btnimage}
                  alt={upgradedata[index].btnname}
                />
                <h4>{upgradedata[index].btnname}</h4>
              </div>
              <p> Increase to your atoms per second by: {upgrade.increase}</p>
              <p>Cost: {upgrade.cost} atoms</p>
            </button>
          );
        })}
      </div>
    </>
  );
}
