"use client";
import { getPetService } from "@/services/apiPetServices";
import { useQuery } from "@tanstack/react-query";
import TextSpinnerLoader from "../_components/TextSpinnerLoader";
import { ExpandableCardDemo } from "../_components/PetServicesCard";
function DisplayPS() {
  const {
    isLoading,
    data: PetServices,
    error,
  } = useQuery({
    queryKey: ["PetServices"],
    queryFn: getPetService,
  });
  //console.log(x);

  if (isLoading)
    return (
      <>
        <div className="flex justify-center items-center h-[60vh] ">
          <TextSpinnerLoader />
        </div>
      </>
    );

  return <div className="p-4"> <ExpandableCardDemo /> </div>;
}

export default DisplayPS;
