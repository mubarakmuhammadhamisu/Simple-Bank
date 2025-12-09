"use client";

import { PiggyBank, Wallet, Briefcase, LifeBuoy, CreditCard, Plane } from "lucide-react";

type IconHolderProps = {
  type: string;
  className?: string;
};

export default function IconHolder({ type, className = "w-6 h-6" }: IconHolderProps) {
  const icons: any = {
    wallet: Wallet,
    savings: PiggyBank,
    business: Briefcase,
    support: LifeBuoy,
    card: CreditCard,
    travel: Plane,
  };

  const Icon = icons[type] || Wallet;

  return <Icon className={`text-blue-700 ${className}`} />;
}
