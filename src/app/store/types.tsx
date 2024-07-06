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
