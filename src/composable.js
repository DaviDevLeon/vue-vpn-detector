import { readonly } from 'vue';
import { ipInfo, isLoading, error, loadIpData } from './core/state';

/**
 * Composable for Vue.js to detect VPN and IP information.
 * The data is loaded automatically the first time the library is used.
 * @returns {{
 * ipInfo: Readonly<Ref<IpApiInfo | null>>,
 * isVpn: Readonly<Ref<boolean | null>>,
 * country: Readonly<Ref<string | null>>,
 * city: Readonly<Ref<string | null>>,
 * query: Readonly<Ref<string | null>>,
 * isLoading: Readonly<Ref<boolean>>,
 * error: Readonly<Ref<string | null>>,
 * load: (force?: boolean) => Promise<void>
 * }}
 */
export function useVpnDetector() {

  return {
    ipInfo: readonly(ipInfo),
    isLoading: readonly(isLoading),
    error: readonly(error),
    load: loadIpData 
  };
}