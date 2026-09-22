import { Pelkat } from "@/features/pelkat/types/pelkat";
import { Region } from "@/features/region/types/region";

export type Congregation = {
  id: string;
  name: string;
  phone: string;
  birth: string;
  isActive: boolean;
  isSidi: boolean;
  sidiYear: string;
  regionId: string;
  pelkatId: string;
  createdAt: string;
  updatedAt: string;
  region: Region;
  pelkat: Pelkat;
  leadership: Leadership | null;
};

type Leadership = {
  id: string;
  positionId: string;
  congregationId: string;
  pelkatId: string;
  createdAt: string;
  updatedAt: string;
};
