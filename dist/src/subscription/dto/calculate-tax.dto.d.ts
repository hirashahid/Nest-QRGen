import { AddressDto } from './address.dto';
import { ECountryCodeIso2 } from '../../enums/e-country-code-iso-2';
export declare class CalculateTaxDto {
    amount: number;
    currency: string;
    address: AddressDto;
}
export declare class CalculateTaxUpdatedDto {
    user_id: number;
    plan_id: number;
    country_code: ECountryCodeIso2;
    currency: string;
    address: AddressDto;
}
