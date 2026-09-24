/**
 * Supabase API layer for catalog, auth, save, and quotes.
 * Config: window.MTG_SUPABASE_URL + MTG_SUPABASE_ANON_KEY (config.js defaults,
 * overridable from Admin → Database settings / localStorage).
 */
(function (global) {
  "use strict";

  var client = null;
  var STORE_KEY = "glasscalc:supabase";

  function defaults() {
    return {
      url: String(global.MTG_SUPABASE_DEFAULT_URL || global.MTG_SUPABASE_URL || "").trim(),
      key: String(global.MTG_SUPABASE_DEFAULT_ANON_KEY || global.MTG_SUPABASE_ANON_KEY || "").trim()
    };
  }

  function current() {
    return {
      url: String(global.MTG_SUPABASE_URL || "").trim(),
      key: String(global.MTG_SUPABASE_ANON_KEY || "").trim()
    };
  }

  function applyConfig(url, key) {
    global.MTG_SUPABASE_URL = String(url || "").trim();
    global.MTG_SUPABASE_ANON_KEY = String(key || "").trim();
    client = null;
  }

  function loadStoredConfig() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return false;
      var o = JSON.parse(raw);
      if (!o || !o.url || !o.key) return false;
      applyConfig(o.url, o.key);
      return true;
    } catch (_) {
      return false;
    }
  }

  function saveConfig(url, key) {
    applyConfig(url, key);
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({
        url: global.MTG_SUPABASE_URL,
        key: global.MTG_SUPABASE_ANON_KEY
      }));
    } catch (_) { /* ignore */ }
    return configured();
  }

  function clearStoredConfig() {
    try { localStorage.removeItem(STORE_KEY); } catch (_) { /* ignore */ }
    var d = defaults();
    applyConfig(d.url, d.key);
    return configured();
  }

  function useDefaults() {
    var d = defaults();
    return saveConfig(d.url, d.key);
  }

  function configured() {
    return !!(global.MTG_SUPABASE_URL && global.MTG_SUPABASE_ANON_KEY && global.supabase);
  }

  function getClient() {
    if (!configured()) throw new Error("noapi");
    if (!client) {
      client = global.supabase.createClient(
        String(global.MTG_SUPABASE_URL).trim(),
        String(global.MTG_SUPABASE_ANON_KEY).trim(),
        { auth: { persistSession: false, autoRefreshToken: false } }
      );
    }
    return client;
  }

  function rpc(name, args) {
    return getClient().rpc(name, args || {}).then(function (res) {
      if (res.error) {
        var err = new Error(res.error.message || "rpc");
        err.code = res.error.code;
        throw err;
      }
      return res.data;
    });
  }

  function projectRef() {
    var url = current().url;
    var m = url.match(/^https?:\/\/([a-z0-9-]+)\.supabase\.co/i);
    return m ? m[1] : "";
  }

  function sqlEditorUrl() {
    var ref = projectRef();
    return ref ? ("https://supabase.com/dashboard/project/" + ref + "/sql/new") : "https://supabase.com/dashboard";
  }

  function testConnection() {
    if (!configured()) return Promise.reject(new Error("noapi"));
    return rpc("mtg_catalog").then(function (data) {
      return { ok: true, data: data };
    });
  }

  function request(payload) {
    payload = payload || {};
    var action = String(payload.action || "").trim();

    if (action === "catalog") {
      return rpc("mtg_catalog");
    }

    if (action === "quote") {
      return rpc("mtg_quote", {
        p_name: payload.name || "",
        p_phone: payload.phone || "",
        p_items: payload.items || []
      });
    }

    if (action === "quotePublic" || (action === "" && payload.id && !payload.email)) {
      return rpc("mtg_quote_public", { p_id: payload.id || "" });
    }

    if (action === "quoteByPhone") {
      return rpc("mtg_quote_by_phone", { p_phone: payload.phone || "" });
    }

    if (action === "save") {
      return rpc("mtg_save", {
        p_email: payload.email || "",
        p_pin: payload.pin || "",
        p_sections: payload.sections || [],
        p_payload: {
          companies: payload.companies || [],
          locks: payload.locks || [],
          aluminium: payload.aluminium || [],
          charges: payload.charges || {},
          cutParams: payload.cutParams || {},
          users: payload.users || [],
          shop: payload.shop || {}
        }
      });
    }

    if (action === "quotePatch") {
      return rpc("mtg_quote_patch", {
        p_email: payload.email || "",
        p_pin: payload.pin || "",
        p_id: payload.id || "",
        p_status: payload.status != null ? payload.status : null,
        p_assigned: payload.assigned != null ? payload.assigned : null
      });
    }

    if (action === "quoteDelete") {
      return rpc("mtg_quote_delete", {
        p_email: payload.email || "",
        p_pin: payload.pin || "",
        p_id: payload.id || ""
      });
    }

    if (payload.email && payload.pin) {
      return rpc("mtg_unlock", {
        p_email: payload.email || "",
        p_pin: payload.pin || ""
      });
    }

    return Promise.reject(new Error("method"));
  }

  function fetchCatalogGet() {
    return rpc("mtg_catalog");
  }

  function fetchPublicQuote(id) {
    return rpc("mtg_quote_public", { p_id: id });
  }

  function fetchQuotesByPhone(phone) {
    return rpc("mtg_quote_by_phone", { p_phone: phone || "" });
  }

  loadStoredConfig();

  global.MTG_API = {
    configured: configured,
    request: request,
    fetchCatalogGet: fetchCatalogGet,
    fetchPublicQuote: fetchPublicQuote,
    fetchQuotesByPhone: fetchQuotesByPhone,
    defaults: defaults,
    current: current,
    saveConfig: saveConfig,
    clearStoredConfig: clearStoredConfig,
    useDefaults: useDefaults,
    testConnection: testConnection,
    projectRef: projectRef,
    sqlEditorUrl: sqlEditorUrl,
    applyConfig: applyConfig
  };
})(window);
