export type Congregation = {
  id: string;
  name: string;
  phone: string;
  birth: string;
  regionId: string;
  pelkatId: string;
  createdAt: string;
  updatedAt: string;
  region: Region;
  pelkat: Pelkat;
  leadership: Leadership | null;
};

type Region = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

type Pelkat = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

type Leadership = {
  id: string;
  positionId: string;
  congregationId: string;
  pelkatId: string;
  createdAt: string;
  updatedAt: string;
};
