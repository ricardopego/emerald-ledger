import { useSyncExternalStore } from "react";
import { subscribe, getTerminals, getTransactions, getSummary } from "@/lib/store";

export function useTerminals() {
  return useSyncExternalStore(subscribe, getTerminals);
}

export function useTransactions() {
  return useSyncExternalStore(subscribe, getTransactions);
}

export function useSummary() {
  return useSyncExternalStore(subscribe, getSummary);
}
