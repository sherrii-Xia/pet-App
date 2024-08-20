"use client";
import { getPetService } from "@/services/apiPetServices";
import { useEffect } from "react";

function MapPage() {
  useEffect(() => {
    getPetService().then((data) => console.log(data));
  }, []);
  return <div className="bg-yellow-100 w-full h-12 "> Here we got a map</div>;
}

export default MapPage;
