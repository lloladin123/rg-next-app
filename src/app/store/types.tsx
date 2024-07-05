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
