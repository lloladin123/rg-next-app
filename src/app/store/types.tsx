export interface ContactInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  cvr: string;
}

export interface ContactStore {
  contactInfo: ContactInfo;
  setContactInfo: (newInfo: ContactInfo) => void;
}

export interface InstructorInfo {
  name: string;
  description: string;
  image: string;
}

export interface InstructorStore {
  instructorInfo: InstructorInfo[];
  setInstructorInfo: (newInfo: InstructorInfo[]) => void;
}

export interface HelperInfo {
  name: string;
  description: string;
  image: string;
}

export interface HelperStore {
  helperInfo: HelperInfo[];
  setHelperInfo: (newInfo: HelperInfo[]) => void;
}

export interface BoardInfo {
  name: string;
  description: string;
  image: string;
}

export interface BoardStore {
  boardInfo: BoardInfo[];
  setBoardInfo: (newInfo: BoardInfo[]) => void;
}

export interface BoardSubstituteInfo {
  name: string;
  description: string;
  image: string;
}

export interface BoardSubstituteStore {
  boardSubstituteInfo: BoardSubstituteInfo[];
  setBoardSubstituteInfo: (newInfo: BoardSubstituteInfo[]) => void;
}
