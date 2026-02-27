import axios from "axios";
import { normalizeLookup } from "../utils/lookupNormalizer";

const API_BASE = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000/";

const client = axios.create({
  baseURL: API_BASE,
});

console.log(API_BASE);

export const fetchPaymentTerms = async (company) => {
  const { data } = await client.get("api/terms/payment-terms", {
    params: {company},
  });
  console.log(data);

  const mapped = normalizeLookup(data, {
    value: "Name",
    label: "Name",
    description: "Description",
  });

  console.log(mapped);

  return mapped;
};

export const fetchCurrencies = async (company) => {
  const { data } = await client.get("api/terms/currencies");
  return normalizeLookup(data, {
    value: "CurrencyCode",
    label: "CurrencyCode",
    description: "Name",
  });
};

export const fetchDeliveryTerms = async (company) => {
  const { data } = await client.get("api/terms/delivery-terms",{
    params:{company},
  });
  return normalizeLookup(data, {
    value: "TermsCode",
    label: "TermsCode",
    description: "TermsDescription",
  });
};

export const fetchZipCodes = async (company) => {
    const {data} = await client.get('api/terms/zip-codes');
    return normalizeLookup(data, {
        value: "ZipCode",
        label: "ZipCode",
        description: "CountryRegionId"
    });
};

export const fetchTaxGroups = async (company) => {
  const { data } = await client.get("api/terms/tax-groups", {
    params: {company},
  });
  return normalizeLookup(data, {
    value: "TaxGroupCode",
    label: "TaxGroupCode",
    description: "Description",
  });
};

export const fetchDeliveryModes = async (company) => {
  const { data } = await client.get("api/terms/dlv-modes",{
    params:{company},
  });
  return normalizeLookup(data, {
    value: "ModeCode",
    label: "ModeCode",
    description: "ModeDescription",
  });
};

export const fetchCustomerPaymentMethods = async (company) => {
  const { data } = await client.get("api/terms/customer-payment-methods",{
    params : {company}
  });
  return normalizeLookup(data, {
    value: "Name",
    label: "Name",
    description: (r) => r.Description || r.Name,
  });
};

export const fetchLineOfBusiness = async (company) => {
  const { data } = await client.get("api/terms/line-of-business", {
    params : {company}
  });
  return normalizeLookup(data, {
    value: "LineOfBusiness",
    label: "LineOfBusiness",
    description: "Description",
  });
};
