import { ref as i, readonly as t } from "vue";
const c = "https://api.ipify.org?format=json", g = "http://ip-api.com/json/", p = "continent,country,countryCode,region,regionName,city,isp,hosting,org,proxy,query";
async function f() {
  try {
    const e = await fetch(c);
    if (!e.ok)
      throw new Error(`Error al obtener la IP: ${e.statusText}`);
    return (await e.json()).ip;
  } catch (e) {
    throw console.error("[API Error] No se pudo obtener la dirección IP:", e), new Error("No se pudo obtener la dirección IP. Por favor, verifica tu conexión a internet.");
  }
}
async function v(e) {
  try {
    const n = await fetch(`${g}${e}?fields=${p}`);
    if (!n.ok)
      throw new Error(`Error al consultar ip-api.com: ${n.statusText}`);
    const o = await n.json();
    if (o.status === "fail")
      throw new Error(`ip-api.com reportó un error: ${o.message}`);
    return o;
  } catch (n) {
    throw console.error("[API Error] No se pudo obtener la información detallada de la IP:", n), new Error(`No se pudo obtener la información de la IP: ${n.message}`);
  }
}
const r = i(null), l = i(!1), u = i(null);
let a = null;
async function s(e = !1) {
  return l.value && !e ? a : r.value && !e ? Promise.resolve() : (l.value = !0, u.value = null, r.value = null, a = (async () => {
    try {
      const n = await f(), o = await v(n);
      r.value = o;
    } catch (n) {
      u.value = n.message, r.value = null;
    } finally {
      l.value = !1, a = null;
    }
  })(), a);
}
s();
const y = {
  get isVpn() {
    var e;
    return ((e = t(r).value) == null ? void 0 : e.proxy) ?? null;
  },
  get continent() {
    var e;
    return ((e = t(r).value) == null ? void 0 : e.continent) ?? null;
  },
  get country() {
    var e;
    return ((e = t(r).value) == null ? void 0 : e.country) ?? null;
  },
  get countryCode() {
    var e;
    return ((e = t(r).value) == null ? void 0 : e.countryCode) ?? null;
  },
  get region() {
    var e;
    return ((e = t(r).value) == null ? void 0 : e.region) ?? null;
  },
  get regionName() {
    var e;
    return ((e = t(r).value) == null ? void 0 : e.regionName) ?? null;
  },
  get city() {
    var e;
    return ((e = t(r).value) == null ? void 0 : e.city) ?? null;
  },
  get isp() {
    var e;
    return ((e = t(r).value) == null ? void 0 : e.isp) ?? null;
  },
  get hosting() {
    var e;
    return ((e = t(r).value) == null ? void 0 : e.hosting) ?? null;
  },
  get org() {
    var e;
    return ((e = t(r).value) == null ? void 0 : e.org) ?? null;
  },
  get query() {
    var e;
    return ((e = t(r).value) == null ? void 0 : e.query) ?? null;
  },
  get isLoading() {
    return t(l).value;
  },
  get error() {
    return t(u).value;
  },
  load: s
};
export {
  y as useVpnDetector
};
