import { ipInfo, isLoading, error, loadIpData } from './core/state';
import { readonly } from 'vue';

export const useVpnDetector = {

  get isVpn() { return readonly(ipInfo).value?.proxy ?? null; },
  get continent() { return readonly(ipInfo).value?.continent ?? null; },
  get country() { return readonly(ipInfo).value?.country ?? null; },
  get countryCode() { return readonly(ipInfo).value?.countryCode ?? null; },
  get region() { return readonly(ipInfo).value?.region ?? null; },
  get regionName() { return readonly(ipInfo).value?.regionName ?? null; },
  get city() { return readonly(ipInfo).value?.city ?? null; },
  get isp() { return readonly(ipInfo).value?.isp ?? null; },
  get hosting() { return readonly(ipInfo).value?.hosting ?? null; },
  get org() { return readonly(ipInfo).value?.org ?? null; },
  get query() { return readonly(ipInfo).value?.query ?? null; },

  get isLoading() { return readonly(isLoading).value; },
  get error() { return readonly(error).value; },

  load: loadIpData 
};