export interface ISegments {
  departure: {
    iataCode: string;
    terminal: string;
    at: string;
  };
  arrival: {
    iataCode: string;
    at: string;
    terminal: string;
  };
  carrierCode: string;
  number: string;
  aircraft: {
    code: string;
  };
  operating: {
    carrierCode: string;
  };
  duration: string;
  id: string;
  numberOfStops: number;
}

export interface IItineraries {
  duration: string;
  segments: ISegments[];
}

interface IFees {
  amount: string;
  type: string;
}

interface IFareDetailsBySegment {
  segmentId: string;
  cabin: string;
  fareBasis: string;
  class: string;
  includedCheckedBags: {
    weight: number;
    weightUnit: string;
  };
  includedCabinBags: {
    quantity: number;
  };
}

interface ITravelerPricings {
  travelerId: string;
  fareOption: string;
  travelerType: string;
  price: {
    currency: string;
    total: string;
    base: string;
  };
  fareDetailsBySegment: IFareDetailsBySegment[];
}

export interface IFlightOffers {
  type: string;
  id: string;
  source: string;
  instantTicketingRequired: boolean;
  nonHomogeneous: boolean;
  lastTicketingDate: string;
  lastTicketingDateTime: string;
  numberOfBookableSeats: number;
  itineraries: IItineraries[];
  price: {
    currency: string;
    total: string;
    base: string;
    fees: IFees[];
    grandTotal: string;
  };
  pricingOptions: {
    fareType: string[];
    includedCheckedBagsOnly: boolean;
  };
  validatingAirlineCodes: string[];
  travelerPricings: ITravelerPricings[];
}
