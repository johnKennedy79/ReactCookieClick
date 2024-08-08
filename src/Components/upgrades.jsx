import { useState, useEffect } from "react";

export default function UpBtn(props) {
  const [upgrade, setUpgrade] = useState([]);
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
        {upgrade.map(function (upgrade) {
          return (
            <button
              className="upgradeBtn"
              onClick={() => props.buyUpgrade(upgrade.cost, upgrade.increase)}
              key={upgrade.id}
            >
              This upgrade will Cost: {upgrade.cost} and will increase your
              atoms per second by: {upgrade.increase}
            </button>
          );
        })}
      </div>
    </>
  );
}
