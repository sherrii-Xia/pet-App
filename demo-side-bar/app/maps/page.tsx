import Header from "../_components/Header";
import DisplayPS from "./DisplaysPS";
import { ExpandableCardDemo } from "../_components/PetServicesCard";
function MapPage() {
  return (
    <div className="w-full">
      <Header />
      <div className="h-14 flex flex-row justify-between p-4">
        <div className="font-semibold">Pet Services </div>
        <div> Filter/ Sort </div>
      </div>
      <DisplayPS />
      {/* <Map /> */} {/* replace with actual map component */}
      {/* replace with actual pet services card component */}
    </div>
  );
}

export default MapPage;
