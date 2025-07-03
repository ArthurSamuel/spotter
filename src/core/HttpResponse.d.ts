export interface IDictionaries {
  locations: {
    [code: string]: {
      cityCode: string;
      countryCode: string;
    };
  };
  aircraft: {
    [aircraftCode: string]: string;
  };
  currencies: {
    [currencyCode: string]: string;
  };
  carriers: {
    [carrierCode: string]: string;
  };
}

export interface HttpMetaResponse<T> {
  data: T;
  dictionaries?: IDictionaries;
}
