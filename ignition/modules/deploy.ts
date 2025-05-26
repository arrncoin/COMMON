import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DeployCommonModule = buildModule("DeployCommonModule", (m) => {
  const recipient = m.getParameter("recipient", "0x11Cde369597203f385BC164E64E34e1F520E1983");
  
  // Jangan kasih default dari recipient, langsung tulis string address default lain atau kosong saja
  const initialOwner = m.getParameter("initialOwner", "0x11Cde369597203f385BC164E64E34e1F520E1983");

  const common = m.contract("COMMON", [recipient, initialOwner]);

  return { common };
});

export default DeployCommonModule;
