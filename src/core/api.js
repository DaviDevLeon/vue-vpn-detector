// src/core/api.js

/**
 * @typedef {object} IpApiInfo
 * @property {string} continent
 * @property {string} country
 * @property {string} countryCode
 * @property {string} region
 * @property {string} regionName
 * @property {string} city
 * @property {string} isp
 * @property {string} org 
 * @property {boolean} proxy
 * @property {boolean} hosting
 * @property {string} query
 */

const IPIFY_URL = "https://api.ipify.org?format=json";
const IP_API_URL = "http://ip-api.com/json/";
const IP_API_FIELDS = "continent,country,countryCode,region,regionName,city,isp,hosting,org,proxy,query";

/**
 * Get the user's public IP address using ipify.org.
 * @returns {Promise<string>} The user's public IP address.
 * @throws {Error} If the request fails or the IP cannot be retrieved.
 */
export async function fetchUserIp() {
  try {
    const response = await fetch(IPIFY_URL);
    if (!response.ok) {
      throw new Error(`Error al obtener la IP: ${response.statusText}`);
    }
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("[API Error] No se pudo obtener la dirección IP:", error);
    throw new Error("No se pudo obtener la dirección IP. Por favor, verifica tu conexión a internet.");
  }
}

/**
 * Get detailed information about an IP address using ip-api.com.
 * @param {string} ip - The IP address to query.
 * @returns {Promise<IpApiInfo>} An object containing detailed information about the IP address.
 * @throws {Error} If the request fails or the IP cannot be resolved.
 */
export async function fetchIpDetails(ip) {
  try {
    const response = await fetch(`${IP_API_URL}${ip}?fields=${IP_API_FIELDS}`);
    if (!response.ok) {
      throw new Error(`Error al consultar ip-api.com: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.status === 'fail') {
      throw new Error(`ip-api.com reportó un error: ${data.message}`);
    }
    return data;
  } catch (error) {
    console.error("[API Error] No se pudo obtener la información detallada de la IP:", error);
    throw new Error(`No se pudo obtener la información de la IP: ${error.message}`);
  }
}