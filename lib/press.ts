/**
 * Press mentions registry. Populate with real coverage when it exists.
 * The /press page renders "coming soon" while this array is empty.
 */

export type PressMention = {
  outlet: string;
  headline: string;
  date: string;
  url: string;
  /** Optional excerpt to quote on the press page. */
  quote?: string;
};

export const PRESS: PressMention[] = [
  // Example format — replace when real coverage lands:
  // {
  //   outlet: "Loadstar",
  //   headline: "Afghan freight forwarder scales Central Asia lanes",
  //   date: "2026-06-14",
  //   url: "https://theloadstar.com/example",
  //   quote: "Logistics.af is quietly becoming the reference operator for the Central Asia corridor.",
  // },
];
