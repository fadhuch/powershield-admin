// Common types for the Power Shield Technical Service LLC

export interface NavigationItem {
  id;
  label;
  href;
  children?: NavigationItem[];
}

export interface ServiceItem {
  id;
  title;
  description;
  icon;
  href;
}

export interface ProjectItem {
  id;
  title;
  description;
  image;
  category;
  href;
}

export interface TeamMember {
  id;
  name;
  position;
  image;
  bio?;
  social?: {
    linkedin?;
    twitter?;
    email?;
  };
}

export interface BlogPost {
  id;
  title;
  excerpt;
  content;
  image;
  author;
  date;
  category;
}

export interface ContactInfo {
  address;
  phone;
  email;
  hours;
}

export interface CompanyInfo {
  name;
  description;
  mission;
  vision;
  values[];
}
