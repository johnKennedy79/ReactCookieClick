import { useState, useEffect } from "react";

export default function UpBtn(props) {
  const [upgrade, setUpgrade] = useState([]);
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

  return (
    <>
      {upgrade.map(function (upgrade) {
        return (
          <button
            onClick={() => props.buyUpgrade(upgrade.cost, upgrade.increase)}
            key={upgrade.id}
          >
            Cost: {upgrade.cost} increase: {upgrade.increase}
          </button>
        );
      })}
    </>
  );
}
