export type MembershipPackage = {
  id: string;
  name: string;
  duration?: string;
  price: string;
  action?: string;
  recommended?: boolean;
};

export const membershipPackages: MembershipPackage[] = [
  {
    id: "basic",
    name: "Basic Package",
    duration: "1 Month",
    price: "₹2,000",
    action: "Choose Plan",
  },
  {
    id: "standard",
    name: "Standard Package",
    duration: "3 Months",
    price: "₹5,500",
    action: "Choose Plan",
  },
  {
    id: "premium",
    name: "Premium Package",
    duration: "6 Months",
    price: "₹10,000",
    action: "Choose Plan",
  },
  {
    id: "ultimate",
    name: "Ultimate Package",
    duration: "12 Months",
    price: "₹20,000",
    action: "Choose Plan",
    recommended: true,
  },
  {
    id: "personal-training",
    name: "Personal Training",
    duration: "1 Month",
    price: "₹5,000",
    action: "Choose Plan",
  },
  {
    id: "daily-pass",
    name: "Daily Pass",
    price: "₹100 per visit",
    action: "Book Now",
  },
];
