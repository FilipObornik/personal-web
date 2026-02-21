# Instagram Feed Integration

## Přehled

Web zobrazuje nejnovější Instagram posty z Filipova účtu v carouselu na homepage. Implementováno pomocí **Instagram Graph API**.

## Setup Instagram Graph API

### 1. Požadavky

- Instagram Business nebo Creator účet
- Facebook stránka propojená s Instagram účtem
- Meta Developer účet

### 2. Vytvoření Facebook App

1. Jdi na [Meta for Developers](https://developers.facebook.com/)
2. Klikni na **My Apps** → **Create App**
3. Vyber **Business** jako typ aplikace
4. Zadej:
   - **App Name:** Filip Oborník Personal Web
   - **App Contact Email:** tvůj email
5. Klikni **Create App**

### 3. Přidání Instagram Graph API

1. V dashboardu aplikace klikni **Add Product**
2. Najdi **Instagram Graph API** a klikni **Set Up**
3. V menu vlevo vyber **Instagram Graph API** → **Basic Display**

### 4. Získání Access Tokenu

#### Krátkodobý token (1 hodina)

1. V App Dashboardu jdi na **Tools** → **Graph API Explorer**
2. Vyber svou aplikaci z dropdown menu
3. V **User or Page** vyber svou Facebook stránku
4. V **Permissions** přidej:
   - `instagram_basic`
   - `pages_read_engagement`
5. Klikni **Generate Access Token**
6. Autorizuj aplikaci
7. Zkopíruj vygenerovaný token

#### Dlouhodobý token (60 dní)

Pro získání long-lived tokenu (60 dní validity) použij:

```bash
curl -i -X GET "https://graph.facebook.com/v21.0/oauth/access_token?grant_type=fb_exchange_token&client_id={app-id}&client_secret={app-secret}&fb_exchange_token={short-lived-token}"
```

Response:
```json
{
  "access_token": "long-lived-token",
  "token_type": "bearer",
  "expires_in": 5183944
}
```

### 5. Získání Instagram User ID

Pro zjištění tvého Instagram User ID:

```bash
curl -i -X GET "https://graph.facebook.com/v21.0/me/accounts?access_token={your-access-token}"
```

Najdi Instagram Business účet v response a zkopíruj `id`.

Nebo použij Graph API Explorer:
```
GET /me?fields=instagram_business_account
```

Response obsahuje Instagram User ID.

### 6. Nastavení Environment Variables

Vytvoř `.env.local` soubor v root projektu:

```env
INSTAGRAM_USER_ID=your_instagram_user_id
INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token
```

**Nikdy necommituj `.env.local` do gitu!** (je v `.gitignore`)

### 7. Obnovení tokenu

Long-lived token expiruje po 60 dnech. Máš dvě možnosti:

#### A) Manuální obnova

Před expirací tokenu zopakuj krok 4 (získání nového long-lived tokenu).

#### B) Automatická obnova (doporučeno)

Nastav cron job nebo GitHub Action, který před expirací tokenu automaticky vygeneruje nový:

```bash
# Každých 50 dní
0 0 */50 * * /path/to/refresh-instagram-token.sh
```

Script může vypadat takto:

```bash
#!/bin/bash
# refresh-instagram-token.sh

APP_ID="your_app_id"
APP_SECRET="your_app_secret"
CURRENT_TOKEN="$INSTAGRAM_ACCESS_TOKEN"

NEW_TOKEN=$(curl -s "https://graph.facebook.com/v21.0/oauth/access_token?grant_type=fb_exchange_token&client_id=$APP_ID&client_secret=$APP_SECRET&fb_exchange_token=$CURRENT_TOKEN" | jq -r '.access_token')

echo "New token: $NEW_TOKEN"
# Update .env.local nebo Vercel env variable
```

## Testování

### Lokální development

```bash
npm run dev
```

Pokud jsou credentials správně nastavené, Instagram sekce se zobrazí na homepage mezi Portfolio a Free Resources.

### Test API endpointu

```bash
curl "https://graph.instagram.com/{user-id}/media?fields=id,caption,media_url,permalink,timestamp&limit=9&access_token={token}"
```

Měl by vrátit seznam posledních 9 postů.

## Troubleshooting

### Chyba: "Invalid OAuth access token"

- Token expiroval → obnov ho podle kroku 4
- Špatný User ID → ověř ho podle kroku 5

### Chyba: "Application does not have permission"

- Ověř, že aplikace má permissions: `instagram_basic`, `pages_read_engagement`
- Re-autorizuj aplikaci v Graph API Explorer

### Sekce se nezobrazuje

- Zkontroluj `.env.local` - jsou nastavené obě proměnné?
- Podívej se do console logu (server-side) zda není error message
- Pokud API vrátí prázdný array, sekce se skryje (by design)

### Rate limiting

Instagram Graph API má rate limity:
- 200 calls/hour/user
- ISR cache (1 hodina) tento limit respektuje

## Komponenty

- **`src/types/instagram.ts`** - TypeScript typy
- **`src/lib/instagram.ts`** - API helper funkce
- **`src/components/ui/InstagramPost.tsx`** - Post card komponenta
- **`src/components/ui/InstagramCarousel.tsx`** - Carousel s Framer Motion
- **`src/components/sections/InstagramFeed.tsx`** - Sekce na homepage

## Deployment (Vercel)

V Vercel dashboardu nastav environment variables:

1. Jdi do **Settings** → **Environment Variables**
2. Přidej:
   - `INSTAGRAM_USER_ID`
   - `INSTAGRAM_ACCESS_TOKEN`
3. Scope: **Production, Preview, Development**
4. Redeploy aplikaci

## Odkazy

- [Instagram Graph API Docs](https://developers.facebook.com/docs/instagram-api)
- [Meta for Developers](https://developers.facebook.com/)
- [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/)
