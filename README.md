# ConnectX

ConnectX is a responsive, installable web-app preview based on the supplied product requirements and UI/UX specification. It demonstrates the mobile-first messaging, app-call, offline-reachability, wallet, privacy, and call-history experience.

## Run locally

Serve this folder from `localhost` with any static HTTP server and open its URL in a current browser. There is no build step or third-party runtime dependency. The service worker enables the cached app shell on `localhost` and HTTPS.

On Android, install the app from the browser's install action. On iOS, open the HTTPS site in Safari and choose **Add to Home Screen**. The layout adapts between phone and desktop widths.

## Preview behavior

- New messages, selected conversation, reachability preference, spending limit, and appearance are saved in the current browser's local storage.
- Sample people, call history, balances, rates, and transactions are illustrative.
- Calls, wallet funding, authentication, contact syncing, push notifications, message delivery, and carrier routing are **not connected**. Preview actions say when no call or payment will occur.
- This web preview is not a substitute for the production services in the product documentation. A production launch still needs the identity and messaging APIs, WebSocket/presence services, WebRTC signaling and media infrastructure, push delivery, payment/wallet ledger, carrier integrations, abuse prevention, and applicable legal and security review.

## Product direction

The experience follows the product's Internet-first rule: online contacts use app-to-app communication; messages to offline contacts queue; a telephone-network route is presented separately with an estimated rate and payer before confirmation. Recipient-funded reachability is opt-in and configurable.
