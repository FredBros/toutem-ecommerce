import React, { useContext } from "react";


const Test = () => {
  
  const euro_users = {
    // -- EU countries using the euro
    AT: { name: "Austria" },
    BE: { name: "Belgium" },
    CY: { name: "Cyprus" },
    EE: { name: "Estonia" },
    FI: { name: "Finland" },
    FR: { name: "France" },
    DE: { name: "Germany" },
    GR: { name: "Greece" },
    IE: { name: "Ireland" },
    IT: { name: "Italy" },
    LV: { name: "Latvia" },
    LT: { name: "Lithuania" },
    LU: { name: "Luxembourg" },
    MT: { name: "Malta" },
    NL: { name: "Netherlands" },
    PT: { name: "Portugal" },
    ES: { name: "Spain" },
    SI: { name: "Slovenia" },
    SK: { name: "Slovakia" },
    // -- Non-EU countries using the euro
    XK: { name: "Kosovo" },
    ME: { name: "Montenegro" },
    // -- Microstates using the euro
    AD: { name: "Andorra" },
    MC: { name: "Monaco" },
    SM: { name: "San Marino" },
    VA: { name: "Vatican City" },
  };

  const keys= Object.keys(euro_users);
  console.log(keys);
  return (
    <>
      <div>test</div>
      
    </>
  );
}

export default Test