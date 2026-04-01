# Instagram Feed Setup

Tento dokument popisuje, jak nastavit Instagram Graph API pro zobrazení postů na osobním webu.

## Požadavky

- Instagram Business nebo Creator účet
- Facebook Business Page propojená s Instagram účtem
- Facebook Developer účet

## Krok 1: Vytvoření Facebook App

1. Přejdi na [Facebook Developers](https://developers.facebook.com/)
2. Klikni na **My Apps** → **Create App**
3. Vyber typ aplikace: **Business**
4. Vyplň:
   - **App Name**: `Personal Web Instagram Feed` (nebo jiný název)
   - **App Contact Email**: tvůj email
5. Vytvoř aplikaci

## Krok 2: Nastavení Instagram Graph API

1. V dashboardu aplikace přidej produkt **Instagram Graph API**
2. V **Settings** → **Basic**:
   - Zkopíruj **App ID** a **App Secret** (budeš potřebovat pro získání tokenu)

## Krok 3: Připojení Instagram Business účtu

1. Přejdi do **Instagram Graph API** → **Tools**
2. Klikni na **User Token Generator**
3. Vyber svou Facebook Page (propojenou s IG účtem)
4. Uděl permissions:
   - `instagram_basic`
   - `pages_show_list`
   - `instagram_manage_insights` (volitelné)
5. Zkopíruj vygenerovaný **Short-Lived Access Token**

## Krok 4: Získání Long-Lived Access Token

Short-lived token vyprší za 1 hodinu. Potřebuješ long-lived token (60 dní).

### Pomocí Graph API Exploreru:

```bash
curl -i -X GET "https://graph.facebook.com/v22.0/oauth/access_token?grant_type=fb_exchange_token&client_id={APP_ID}&client_secret={APP_SECRET}&fb_exchange_token={SHORT_LIVED_TOKEN}"
```

**Nahraď:**
- `{APP_ID}` → App ID z Kroku 2
- `{APP_SECRET}` → App Secret z Kroku 2
- `{SHORT_LIVED_TOKEN}` → Token z Kroku 3

Odpověď:
```json
{
  "access_token": "EAAxxxxx...",
  "token_type": "bearer",
  "expires_in": 5183944
}
```

## Krok 5: Získání Instagram User ID

Pomocí long-lived tokenu získej své Instagram User ID:

```bash
curl -i -X GET "https://graph.facebook.com/v22.0/me/accounts?access_token={LONG_LIVED_TOKEN}"
```

Najdi ID své Facebook Page, pak:

```bash
curl -i -X GET "https://graph.facebook.com/v22.0/{PAGE_ID}?fields=instagram_business_account&access_token={LONG_LIVED_TOKEN}"
```

Odpověď:
```json
{
  "instagram_business_account": {
    "id": "17841400000000000"
  },
  "id": "111222333444555"
}
```

Zkopíruj `instagram_business_account.id` → to je tvoje **Instagram User ID**.

## Krok 6: Nastavení Environment Variables

V projektu vytvoř `.env.local`:

```env
INSTAGRAM_ACCESS_TOKEN=EAAxxxxx...
INSTAGRAM_USER_ID=17841400000000000
```

**⚠️ DŮLEŽITÉ:**
- Nikdy necommituj `.env.local` do gitu!
- Přidej `.env.local` do `.gitignore` (mělo by být již přidáno)

## Krok 7: Deploy na Vercel

1. V Vercel projektu přejdi do **Settings** → **Environment Variables**
2. Přidej:
   - `INSTAGRAM_ACCESS_TOKEN` → long-lived token
   - `INSTAGRAM_USER_ID` → Instagram User ID

## Obnovení Access Tokenu

Long-lived token vyprší po 60 dnech. Před expirací ho musíš obnovit.

### Automatické obnovení (doporučeno):

Vytvoř endpoint `/api/instagram/refresh-token` (TODO: implementovat)

### Manuální obnovení:

Opakuj Krok 3-4 pro získání nového tokenu.

## Test API

Ověř, že API funguje:

```bash
curl -i -X GET "https://graph.facebook.com/{INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp&limit=9&access_token={ACCESS_TOKEN}"
```

Měl by se vrátit seznam posledních postů.

## Fallback: Mock Data

Pokud credentials nejsou nastavené, aplikace automaticky použije mock data (viz `src/lib/instagram.ts`).

Pro produkci je nutné nastavit správné credentials.

## Rate Limits

Instagram Graph API má rate limity:
- **200 requests per hour** per user
- ISR revalidace každou hodinu (3600s) by měla být dostatečná

## Troubleshooting

### "Invalid OAuth access token"
→ Token vypršel nebo je neplatný. Vygeneruj nový (Krok 3-4).

### "Error validating access token"
→ Zkontroluj, že používáš správný `INSTAGRAM_USER_ID` a `INSTAGRAM_ACCESS_TOKEN`.

### "Permissions error"
→ Ujisti se, že jsi udělil správné permissions při generování tokenu.

## Užitečné odkazy

- [Instagram Graph API Reference](https://developers.facebook.com/docs/instagram-api)
- [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/)
- [Graph API Explorer](https://developers.facebook.com/tools/explorer/)

---

**Vytvořeno:** 2026-02-21  
**Autor:** Homunculus 🧪
