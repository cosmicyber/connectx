# Internet Communication + Telephone Network Interface
## Product Requirements & System Design Package

**Document type:** Product BRD + System Architecture + UI/UX + Project Management  
**Version:** 1.0  
**Status:** Product Definition / Pre-Development  
**Date:** 2026-10-08  
**Product codename:** BridgeCall *(working name; final brand TBD)*

---

# 1. Executive Summary

## 1.1 Product vision

Build an Internet-first communication platform that allows people to communicate through messaging, voice and video while creating a controlled bridge from Internet users to ordinary telephone numbers.

The core product principle is:

> **Normal communication happens over the Internet. Premium extends a user's reach beyond the Internet.**

A user creates a username and associates a verified phone number with the account. When the recipient is online and available, communication remains app-to-app. When the recipient is offline or does not have the app, eligible Premium functionality can route a call to the recipient's ordinary phone number through a licensed/authorized telecommunications gateway.

The initial product is **one-way Internet-to-telephone bridging**. A normal phone user does not call into the application in the initial scope.

---

# 2. Product Definition

## 2.1 Product statement

A messaging and communication application that combines:

- Username-based social identity
- Phone-number-based reachability
- 1-to-1 messaging
- Voice calls
- Video calls
- Presence/online status
- Offline message delivery
- Premium extended reachability
- Internet-to-telephone calls for eligible destinations
- Built-in wallet/balance for communication charges
- International reachability
- Telegram-like groups/channels/business functionality as later expansion

## 2.2 Core differentiator

Existing messaging platforms generally treat the Internet and telephone network as separate communication worlds.

This product aims to make them feel like one system:

```text
                    COMMUNICATION PLATFORM
                             |
              +--------------+--------------+
              |                             |
        INTERNET WORLD               TELEPHONE WORLD
              |                             |
       App-to-app chat/call          Normal phone number
              |                             |
              +--------------+--------------+
                             |
                       Routing Engine
```

The user should think:

> "I want to talk to this person."

The platform determines the available communication route.

---

# 3. Product Goals

## 3.1 Primary goals

1. Provide fast, reliable Internet messaging.
2. Provide high-quality app-to-app voice and video calling.
3. Detect user availability/presence.
4. Allow offline messages to queue and deliver later.
5. Allow Premium users to extend reachability to ordinary telephone networks.
6. Associate a verified phone number with a user identity.
7. Provide controlled wallet-based charging for telephone-network usage.
8. Support international telephone destinations eventually.
9. Provide a familiar social communication experience inspired by established messengers without copying their proprietary implementation or design.
10. Create an architecture that can scale from an MVP to a global communication platform.

## 3.2 Secondary goals

- Groups
- Channels/communities
- Business accounts
- Stories/status
- Rich media
- Contact discovery
- Spam protection
- Communication analytics
- Advanced routing
- Customer-support capabilities

---

# 4. Non-Goals for Initial Release

The MVP will NOT initially:

- Accept ordinary telephone calls into app users.
- Replace a mobile network operator.
- Provide emergency calling.
- Provide unrestricted anonymous telephone calling.
- Attempt to operate telecommunications infrastructure without appropriate carrier/regulatory arrangements.
- Reproduce every feature of Telegram, Snapchat and Discord.
- Execute a blockchain transaction for every call.
- Build a full enterprise contact-center platform.
- Guarantee international availability on day one.

---

# 5. Target Users

## 5.1 Individual users

People who want:

- Messaging
- Voice/video calls
- One identity for communication
- Reliable communication when contacts are offline
- Optional ability to reach contacts through ordinary phone numbers

## 5.2 Premium users

Users who value:

- Extended reachability
- Offline calling
- International calling
- Wallet-funded communication
- Greater control over how they can be reached

## 5.3 Business users — later phase

Businesses that want:

- Messaging
- Voice/video
- Customer communication
- Business profiles
- Agents
- Groups/channels
- Customer support workflows

---

# 6. Product Principles

## 6.1 Internet first

Use Internet communication whenever both sides can communicate through the application.

## 6.2 Route intelligently

The user should not need to understand whether the system is using an Internet call or telephone-network route.

## 6.3 Premium means reachability

Premium should have a coherent value proposition:

> **Premium makes you reachable beyond the Internet.**

## 6.4 User control

Users control:

- Who can reach them offline
- Whether their wallet may be charged
- Spending limits
- Privacy
- Contact permissions

## 6.5 Safety by design

The platform must prevent abuse, spam, fraud, caller-ID misuse, and uncontrolled wallet spending.

---

# 7. User Identity Model

Each account has two related identifiers.

## 7.1 Username

Example:

```text
@ola
```

Used for:

- Discovery
- Search
- Messaging
- Profile
- Social identity
- Sharing

## 7.2 Phone number

Example:

```text
+234XXXXXXXXXX
```

Used for:

- Account verification
- Telephone destination
- Offline reachability
- Contact matching

## 7.3 Identity relationship

```text
User Account
|
+-- User ID (internal immutable identifier)
|
+-- Username (public identity)
|
+-- Verified phone number
|
+-- Profile
|
+-- Privacy settings
|
+-- Presence state
|
+-- Premium status
|
+-- Wallet
```

The internal user ID must be immutable and must not be the same thing as the public username.

---

# 8. Core User Journeys

## 8.1 Registration

```text
Install app
   |
Create account
   |
Choose username
   |
Enter phone number
   |
Verify phone number
   |
Create profile
   |
Optional Premium setup
   |
Home
```

## 8.2 App-to-app message

```text
User searches @john
       |
Open conversation
       |
Send message
       |
Message reaches server
       |
Recipient online?
   /           \
 Yes            No
 |               |
Deliver          Queue
 |               |
Read receipt     Deliver when online
```

## 8.3 App-to-app call

```text
Caller selects contact
       |
Presence check
       |
Recipient online?
       |
     YES
       |
WebRTC/session setup
       |
Voice/video call
```

## 8.4 Offline recipient

```text
Caller selects contact
       |
Presence check
       |
Recipient OFFLINE
       |
Is telephone reachability allowed?
       |
  +----+----+
  |         |
 YES       NO
  |         |
Premium     Show upgrade
route       / normal message
  |
Wallet/payer check
  |
Telephone gateway
  |
Recipient phone rings
```

## 8.5 Recipient without app

```text
Caller enters/selects phone number
          |
Does number map to app user?
      /           \
    YES            NO
     |              |
Check presence      Telephone route
     |              |
If offline          Premium eligibility
     |              |
Telephone route     Wallet/policy
                    |
                 Call phone
```

For an MVP, this should be limited to legally and operationally supported destinations and should not imply that every number globally is callable.

---

# 9. Functional Requirements

## FR-001 Account Creation

The system shall allow a user to create an account with:

- Username
- Verified phone number
- Password/passkey or supported authentication mechanism
- Profile information

## FR-002 Username

The system shall:

- Enforce uniqueness.
- Support username search.
- Prevent impersonation patterns where feasible.
- Allow controlled username changes subject to policy.

## FR-003 Phone Verification

The system shall verify phone ownership through an approved verification mechanism.

## FR-004 Messaging

Users shall be able to:

- Send text
- Send images
- Send files
- Send voice messages
- Receive delivery/read states
- Delete messages according to policy

## FR-005 Presence

The system shall maintain:

- Online
- Recently active
- Offline
- Calling/busy where supported

Presence must be privacy-controlled.

## FR-006 Voice Calling

Online app users shall be able to initiate voice calls.

## FR-007 Video Calling

Online app users shall be able to initiate video calls.

## FR-008 Offline Message Queue

Messages to offline users shall be securely stored until delivery or expiration according to retention policy.

## FR-009 Premium

The system shall support Premium subscriptions/eligibility.

## FR-010 Offline Telephone Calling

Eligible users shall be able to initiate Internet-to-telephone calls when:

- The destination is supported.
- The route is available.
- Required permissions are satisfied.
- A valid billing source exists.
- The call complies with applicable rules.

## FR-011 Recipient-Funded Offline Reachability

Where enabled, a Premium recipient may authorize their wallet to fund eligible incoming offline calls.

Controls shall include:

- Who may call
- Maximum amount per call
- Daily/monthly limit
- Contacts-only option
- Global enable/disable

## FR-012 Caller-Funded Calling

The product should support caller-funded telephone calls as a separate billing mode.

## FR-013 Wallet

The wallet/balance system shall support:

- Balance
- Funding
- Debits
- Refunds where applicable
- Call authorization
- Transaction history
- Spending limits
- Fraud controls

## FR-014 Routing

The system shall determine an eligible communication route:

```text
APP -> APP
APP -> TELEPHONE
```

Initial scope excludes:

```text
TELEPHONE -> APP
```

## FR-015 International Routing

The system shall support country-aware routing and pricing when international calling is enabled.

---

# 10. Non-Functional Requirements

## NFR-001 Availability

Core messaging should target high availability with graceful degradation.

## NFR-002 Latency

Messages should be delivered with low latency when connectivity is available.

## NFR-003 Call Quality

Voice/video quality should adapt dynamically to network conditions.

## NFR-004 Scalability

Architecture must support horizontal scaling of:

- API servers
- Messaging services
- Presence services
- WebRTC signaling
- Media infrastructure
- Notification workers

## NFR-005 Security

The platform shall use:

- TLS in transit
- Encryption at rest
- Secure authentication
- Device/session management
- Rate limiting
- Abuse detection
- Secure secrets management

## NFR-006 Privacy

Users must control:

- Phone-number visibility
- Presence visibility
- Who can message them
- Who can call them
- Offline reachability
- Wallet-funded reachability

## NFR-007 Reliability

The system shall handle:

- Temporary Internet loss
- Server reconnection
- Call reconnection
- Duplicate messages
- Delayed delivery
- Push notification failure

---

# 11. High-Level System Architecture

```text
+---------------------------------------------------------------+
|                         CLIENT APPS                           |
|                                                               |
|  Android        iOS        Web/Desktop (later)               |
+----------------------------+----------------------------------+
                             |
                             v
+---------------------------------------------------------------+
|                        EDGE / API LAYER                       |
|                                                               |
| API Gateway | Authentication | Rate Limiting | Load Balancer |
+----------------------------+----------------------------------+
                             |
          +------------------+-------------------+
          |                  |                   |
          v                  v                   v
+----------------+  +----------------+  +---------------------+
| User Service   |  | Messaging      |  | Presence Service    |
|                |  | Service        |  |                     |
+----------------+  +----------------+  +---------------------+
          |                  |                   |
          +------------------+-------------------+
                             |
                             v
+---------------------------------------------------------------+
|                    COMMUNICATION ENGINE                       |
|                                                               |
| Routing | Call Authorization | Session/Signaling | Policy     |
+----------------------------+----------------------------------+
                             |
             +---------------+----------------+
             |                                |
             v                                v
+---------------------------+     +-----------------------------+
| Internet Communication    |     | Telephone Integration       |
|                           |     |                             |
| WebRTC / TURN / SFU       |     | SIP/VoIP Gateway / Carrier  |
+---------------------------+     +-----------------------------+
             |                                |
             v                                v
        App User                         Phone Network
```

---

# 12. Core Backend Services

## 12.1 API Gateway

Responsibilities:

- Authentication
- Request routing
- Rate limiting
- API versioning
- Access control

## 12.2 Identity Service

Stores:

- User ID
- Username
- Phone verification
- Profile
- Account state

## 12.3 Presence Service

Tracks:

- Device connections
- Heartbeats
- Online/offline state
- Last active
- Call state

A low-latency datastore such as Redis can be used for ephemeral presence state.

## 12.4 Messaging Service

Responsible for:

- Message creation
- Delivery
- Queueing
- Read receipts
- Attachments metadata
- Message synchronization

## 12.5 Notification Service

Integrates with mobile push systems and sends:

- New message notifications
- Incoming call notifications
- Security notifications
- Wallet alerts

## 12.6 Call Signaling Service

Handles:

- Call initiation
- Session negotiation
- Call state
- Participant authorization
- Reconnection signaling

## 12.7 Media Infrastructure

For calls, the architecture may use:

- WebRTC
- STUN
- TURN
- SFU infrastructure for group calls

## 12.8 Communication Routing Service

This is a core differentiator.

Input:

```text
caller
recipient
communication_type
recipient_presence
premium_status
wallet_policy
destination_country
route_availability
```

Output:

```text
APP_CALL
TELEPHONE_CALL
DENY
UPGRADE_REQUIRED
INSUFFICIENT_BALANCE
```

Example:

```text
if recipient_online:
    route = APP_CALL
elif offline_route_allowed:
    route = TELEPHONE_CALL
else:
    route = UPGRADE_REQUIRED
```

The production implementation must include policy, fraud, billing, regulatory, and route availability checks rather than relying on a simple conditional.

---

# 13. Wallet Architecture

The wallet should be separated into financial accounting and communication billing.

```text
External funding source
        |
        v
 Wallet / Ledger
        |
        v
Communication Balance
        |
        v
Call Authorization
        |
        v
Usage Meter
        |
        v
Debit / Settlement
```

## 13.1 Ledger

Every monetary event should create an auditable ledger record.

Example:

```text
Transaction ID
User ID
Type
Amount
Currency
Status
Timestamp
Reference
```

## 13.2 Call billing

At call initiation:

```text
Authorize estimated amount
```

During call:

```text
Measure usage
```

At call completion:

```text
Finalize charge
Refund unused authorization where applicable
```

## 13.3 Do not perform a blockchain transaction per call

If crypto is used, blockchain assets should fund or settle the wallet layer rather than forcing every call to become an on-chain transaction.

This reduces:

- latency
- fees
- complexity
- failure modes

Crypto custody, conversion, withdrawal, KYC/AML and regulatory requirements must be separately assessed before launch.

---

# 14. Telephone Integration Architecture

The platform requires authorized connectivity to the telephone network.

```text
Communication Router
        |
        v
SIP/VoIP Integration
        |
        v
Carrier / PSTN Provider
        |
        v
Mobile/Fixed Network
        |
        v
Recipient phone
```

The platform should not directly manipulate the public telephone network without an appropriate licensed/contracted carrier or communications provider.

The integration layer should abstract providers:

```text
Carrier Adapter
   |
   +-- Provider A
   +-- Provider B
   +-- Provider C
```

This enables:

- redundancy
- country-specific routing
- pricing optimization
- failover
- provider replacement

---

# 15. Routing Engine

## 15.1 Routing inputs

```text
Caller identity
Recipient identity
Recipient online status
Recipient phone availability
Caller premium state
Recipient premium state
Wallet policy
Wallet balance
Destination country
Carrier availability
Fraud/risk score
```

## 15.2 Routing decisions

```text
                     START
                       |
                Is recipient online?
                  /           \
                YES            NO
                 |              |
            App-to-app     Is offline route
               call          permitted?
                             /        \
                           YES         NO
                            |           |
                      Billing/policy   Upgrade
                            |
                      Is funding valid?
                       /          \
                     YES           NO
                      |             |
              Telephone call     Reject/upgrade
```

---

# 16. Offline Reachability Model

Premium users can opt into:

> **Reach Me When Offline**

Settings:

```text
Offline Reachability
--------------------

Enabled:             ON

Who can reach me:
[✓] Contacts
[ ] Anyone
[ ] Nobody

Wallet-funded calls:
[✓] Allow

Maximum per call:
$1.00

Daily maximum:
$5.00

International:
[ ] Allow
```

This prevents uncontrolled spending.

---

# 17. Poor Connectivity Strategy

The platform should use adaptive communication rather than treating connectivity as binary.

## Voice

- Dynamic bitrate
- Packet-loss handling
- Jitter buffering
- Echo cancellation
- Noise suppression
- Adaptive codec selection

## Video

- Dynamic resolution
- Dynamic frame rate
- Bitrate adaptation
- Audio prioritization

## Reconnection

```text
Connection loss
      |
Attempt recovery
      |
Backoff
      |
Reconnect
      |
Restore call state
```

The exact media stack should be validated during technical prototyping.

---

# 18. Data Model — Conceptual

## User

```text
User
- id
- username
- phone_number
- phone_verified
- profile_id
- premium_status
- created_at
- status
```

## Device

```text
Device
- id
- user_id
- platform
- push_token
- last_seen
- app_version
```

## Conversation

```text
Conversation
- id
- type
- created_at
```

## Message

```text
Message
- id
- conversation_id
- sender_id
- type
- content_reference
- created_at
- delivered_at
- read_at
```

## Call

```text
Call
- id
- caller_id
- recipient_id
- route_type
- status
- started_at
- ended_at
- duration
- billing_reference
```

## Wallet

```text
Wallet
- id
- user_id
- currency
- available_balance
- reserved_balance
```

## Wallet Transaction

```text
WalletTransaction
- id
- wallet_id
- type
- amount
- status
- reference
- created_at
```

## Reachability Policy

```text
ReachabilityPolicy
- user_id
- enabled
- allowed_callers
- max_call_amount
- daily_limit
- international_enabled
```

---

# 19. UI/UX Product Architecture

## 19.1 Primary navigation

Recommended mobile navigation:

```text
Home
Chats
Calls
Contacts
Profile
```

A bottom navigation model is appropriate for the MVP.

---

# 20. Screen Inventory

## Authentication

1. Splash
2. Welcome
3. Phone number
4. Verification
5. Username
6. Profile
7. Permissions

## Main app

8. Chats
9. Conversation
10. Contacts
11. Search
12. Calls
13. Call screen
14. Incoming call
15. Profile
16. Settings

## Premium

17. Premium overview
18. Wallet
19. Add funds
20. Transaction history
21. Offline reachability
22. Call pricing confirmation

## Safety

23. Blocked users
24. Report user
25. Privacy
26. Security/session management

---

# 21. UX Principles

## 21.1 Familiar

The interface should feel immediately understandable to users of modern messaging applications.

## 21.2 Route transparency

The app should clearly communicate when a call uses a paid telephone route.

Example:

```text
John is offline.

Call his phone?
Estimated cost: $0.04/min

[Cancel] [Call]
```

## 21.3 No surprise charges

Always disclose:

- payer
- estimated rate
- spending limit
- destination
- Premium requirement

## 21.4 Minimal cognitive load

Do not force users to understand:

- SIP
- PSTN
- WebRTC
- carrier routing
- codecs

Those are platform internals.

---

# 22. Key UI Screens

## 22.1 Home / Chats

```text
+--------------------------------+
| Search                         |
+--------------------------------+
| John             Online        |
| Hey, are you free?             |
+--------------------------------+
| Sarah            2m            |
| Photo                          |
+--------------------------------+
| ACME Business    10m           |
| We received your message      |
+--------------------------------+
|                                |
| Chats | Calls | Contacts | Me |
+--------------------------------+
```

## 22.2 Contact

```text
+--------------------------------+
|            JOHN                |
|         @john                  |
|                                |
|          [Profile]             |
|                                |
|  [Message] [Voice] [Video]     |
|                                |
| Phone: +234 XXX XXX XXXX       |
|                                |
| Status: Offline                |
+--------------------------------+
```

## 22.3 Offline call prompt

```text
+--------------------------------+
|          JOHN OFFLINE          |
|                                |
| John is currently offline.     |
|                                |
| You can call his phone using   |
| Premium Offline Reachability.  |
|                                |
| Estimated cost                 |
| $0.04 / minute                 |
|                                |
| Payer: Your wallet             |
|                                |
| [Cancel]        [Call Phone]   |
+--------------------------------+
```

## 22.4 Recipient-funded route

```text
+--------------------------------+
|          JOHN OFFLINE          |
|                                |
| John has enabled Premium       |
| Offline Reachability.          |
|                                |
| His wallet will cover eligible |
| call charges.                  |
|                                |
| [Cancel]        [Continue]     |
+--------------------------------+
```

## 22.5 Wallet

```text
+--------------------------------+
| Wallet                         |
|                                |
| Available                      |
| $12.40                         |
|                                |
| [Add Funds]                    |
|                                |
| Recent                         |
| -$0.32 Offline call            |
| +$5.00 Wallet funding          |
| -$0.08 Offline call            |
+--------------------------------+
```

---

# 23. Premium Product

## Positioning

Premium is not simply "extra features."

The core promise is:

> **Stay reachable even when the Internet isn't available.**

Potential Premium benefits:

- Offline phone calling
- Recipient-funded reachability
- International telephone calling
- Higher communication limits
- Advanced call routing
- Expanded wallet controls
- Future premium identity features

---

# 24. Monetization

Potential revenue streams:

1. Premium subscription
2. Telephone-network usage
3. International call margin
4. Business accounts later
5. Communication APIs later

## Suggested economic model

```text
Internet app-to-app
        |
        +-- Included/free

Internet -> telephone
        |
        +-- Premium + usage

International
        |
        +-- Premium + destination rate
```

The actual prices must be based on carrier termination costs, payment costs, fraud losses, taxes, regulatory obligations and target market economics.

---

# 25. Security Architecture

## Authentication

- Verified phone
- Strong account credentials/passkeys
- Device sessions
- Session revocation

## Transport security

- HTTPS/TLS
- Secure WebSocket connections
- WebRTC encrypted media transport

## Wallet security

- Transaction authorization
- Spending limits
- Fraud monitoring
- Audit logs
- Device/session verification

## Account security

- New-device alerts
- Session management
- Suspicious login detection
- Account recovery

---

# 26. Privacy Model

Users should control:

- Who sees their phone number
- Who finds them by phone number
- Who can message them
- Who can call them
- Who can trigger offline reachability
- Whether Premium status is visible
- Presence visibility

Phone number discovery should not automatically expose a phone number unless the user permits it.

---

# 27. Abuse Prevention

Telephone bridging creates elevated abuse risk.

Required controls include:

- Rate limits
- Destination restrictions
- Caller reputation
- User reports
- Blocking
- Call quotas
- Spending limits
- Suspicious call detection
- Automated abuse detection
- Account verification
- Carrier/provider controls

Potentially dangerous capabilities such as mass calling must be restricted.

---

# 28. Regulatory / Operational Considerations

Before launching telephone-network functionality, the company must assess requirements for each target market, including:

- Telecommunications licensing/registration
- Carrier agreements
- Numbering rules
- Caller ID rules
- KYC/AML where financial/crypto functionality requires it
- Data protection/privacy
- Consumer protection
- Tax
- Recording/consent laws where applicable
- Spam/robocall restrictions
- Payment regulations

The product should launch telephone functionality only where the required infrastructure and legal arrangements are in place.

---

# 29. MVP Scope

## Must have

### Account

- Registration
- Phone verification
- Username
- Profile

### Messaging

- 1-to-1 text
- Delivery state
- Offline message queue
- Push notification

### Calling

- 1-to-1 voice
- Basic video
- Presence
- Call history

### Premium

- Premium state
- Wallet/balance abstraction
- Offline calling eligibility
- Spending controls

### Infrastructure

- Backend API
- Database
- Redis/presence
- WebRTC signaling
- Push notifications
- Monitoring/logging

## Prototype only

Telephone gateway integration should initially be tested as a controlled technical prototype before public release.

---

# 30. Phase 2

- Telephone-network calling in supported market
- Wallet funding
- Call metering
- Recipient-funded reachability
- International pilot
- Improved call quality
- Rich messaging

---

# 31. Phase 3

- Groups
- Channels
- Communities
- Stories/status
- Media sharing improvements
- Business profiles
- Business messaging

---

# 32. Phase 4

- Multi-country carrier routing
- Global pricing engine
- Business APIs
- Customer support tools
- Advanced communications analytics
- Developer platform

---

# 33. Technical Development Strategy

The team should NOT begin by attempting the full global system.

Recommended order:

```text
1. Identity
2. Messaging
3. Presence
4. App-to-app voice
5. App-to-app video
6. Wallet abstraction
7. Offline reachability policy
8. Telephone gateway prototype
9. Billing/metering
10. Controlled production launch
11. International expansion
```

---

# 34. Suggested Technology Direction

Technology should be finalized after technical validation, but a plausible stack is:

## Mobile

- Flutter or React Native for cross-platform application development
- Native platform modules where required for calling/push functionality

## Backend

- Python/FastAPI or Django for business APIs
- WebSocket services for real-time communication
- Redis for presence/cache
- PostgreSQL for core transactional data

## Calling

- WebRTC
- STUN/TURN
- SFU for group calling later

## Infrastructure

- Docker
- Kubernetes or managed container infrastructure at scale
- Cloud load balancing
- Object storage for media
- CDN for media delivery
- Centralized logging/metrics

## Telephone

- SIP/VoIP carrier integration
- Provider abstraction layer
- Country-aware routing

This stack is a recommendation, not a final architecture decision.

---

# 35. Repository / Codebase Structure

A possible monorepo:

```text
communication-platform/
|
+-- apps/
|   +-- mobile/
|   +-- web/
|
+-- services/
|   +-- api/
|   +-- identity/
|   +-- messaging/
|   +-- presence/
|   +-- calling/
|   +-- routing/
|   +-- billing/
|   +-- wallet/
|   +-- notifications/
|   +-- telephone/
|
+-- packages/
|   +-- shared-types/
|   +-- auth/
|   +-- protocol/
|   +-- observability/
|
+-- infrastructure/
|   +-- docker/
|   +-- terraform/
|   +-- kubernetes/
|
+-- docs/
|   +-- brd/
|   +-- architecture/
|   +-- api/
|   +-- ux/
|   +-- security/
|
+-- tests/
```

---

# 36. API Concept

Example conceptual endpoints:

```text
POST /auth/register
POST /auth/verify-phone

GET  /users/@username
GET  /users/by-phone

GET  /presence/{userId}

POST /messages
GET  /conversations/{id}/messages

POST /calls
POST /calls/{id}/accept
POST /calls/{id}/end

GET  /routing/quote

GET  /wallet
POST /wallet/fund
GET  /wallet/transactions

GET  /premium
POST /premium/subscribe

GET  /reachability-policy
PUT  /reachability-policy
```

The final API should be versioned and designed around resources rather than these exact examples.

---

# 37. Event Architecture

Useful internal events:

```text
USER_REGISTERED
PHONE_VERIFIED
USER_ONLINE
USER_OFFLINE

MESSAGE_SENT
MESSAGE_DELIVERED
MESSAGE_READ

CALL_REQUESTED
CALL_CONNECTED
CALL_ENDED

OFFLINE_ROUTE_REQUESTED
OFFLINE_ROUTE_AUTHORIZED
OFFLINE_ROUTE_REJECTED

WALLET_RESERVED
CALL_USAGE_RECORDED
WALLET_DEBITED
WALLET_REFUNDED
```

An event-driven design becomes increasingly useful as the system grows.

---

# 38. Observability

Monitor:

## Product

- DAU/MAU
- messages/day
- calls/day
- call duration
- Premium conversion
- wallet usage

## Technical

- API latency
- message latency
- presence accuracy
- call setup time
- call failure rate
- packet loss
- reconnect rate
- TURN usage
- carrier failure rate

## Financial

- telecom cost
- revenue per minute
- gross margin per destination
- wallet funding success
- refund rate
- fraud loss

---

# 39. Key Product Metrics

## North Star candidate

> **Successful meaningful communications per active user.**

Supporting metrics:

### Messaging

- Messages sent
- Message delivery success
- Median delivery latency

### Calling

- Call attempts
- Successful calls
- Call completion rate
- Average duration
- Call quality

### Offline reachability

- Offline call attempts
- Successful telephone connections
- Cost per successful call
- Premium usage

### Business

- Premium conversion
- Premium retention
- ARPU
- Gross margin
- Cost per minute

---

# 40. Project Management Structure

## Workstreams

### WS-01 Product

- Requirements
- Product rules
- Pricing
- User research

### WS-02 UX/UI

- Information architecture
- User flows
- Wireframes
- Design system
- Prototypes

### WS-03 Mobile

- Authentication
- Chat
- Calls
- Wallet
- Premium

### WS-04 Backend

- Identity
- Messaging
- Presence
- Routing
- Billing

### WS-05 Communication Infrastructure

- WebRTC
- TURN
- SFU
- SIP/carrier integration

### WS-06 Security

- Authentication
- Encryption
- Fraud
- Abuse prevention

### WS-07 DevOps

- CI/CD
- Infrastructure
- Monitoring
- Backups

### WS-08 Legal/Operations

- Carrier contracts
- Regulatory analysis
- Payment/crypto compliance
- Privacy

---

# 41. MVP Backlog

## Epic 1 — Account

- Create account
- Verify phone
- Choose username
- Login/logout
- Manage profile

## Epic 2 — Messaging

- Create conversation
- Send message
- Receive message
- Offline queue
- Read receipts
- Push notifications

## Epic 3 — Presence

- Online state
- Offline state
- Last seen
- Presence privacy

## Epic 4 — Voice

- Start call
- Accept call
- Reject call
- End call
- Reconnect
- Call history

## Epic 5 — Video

- Start video
- Accept/reject
- Camera controls
- Microphone controls
- Network adaptation

## Epic 6 — Premium

- Premium screen
- Subscription state
- Benefits
- Eligibility checks

## Epic 7 — Wallet

- Balance
- Funding abstraction
- Transaction history
- Spending limits
- Call reservation

## Epic 8 — Offline Reachability

- Offline detection
- Route eligibility
- Price quote
- Consent
- Telephone route
- Call metering

## Epic 9 — Safety

- Block
- Report
- Rate limit
- Abuse detection

---

# 42. Definition of Done

A feature is complete when:

1. Requirements are documented.
2. UX is approved.
3. Implementation is complete.
4. Unit tests pass.
5. Integration tests pass.
6. Security review is complete where applicable.
7. Analytics are implemented.
8. Error states are handled.
9. Accessibility is checked.
10. Monitoring is available.
11. Product acceptance criteria pass.
12. Documentation is updated.

---

# 43. Major Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Carrier availability | High | Establish carrier/provider relationships early |
| Telecom regulation | Critical | Legal/regulatory review before launch |
| Call cost volatility | High | Dynamic routing/pricing |
| Fraud | Critical | Limits, verification, risk scoring |
| Wallet abuse | Critical | Authorization, limits, monitoring |
| Poor network quality | High | Adaptive WebRTC strategy |
| Scaling presence | High | Redis/distributed presence |
| Push notification failure | Medium | Reliable notification/retry design |
| Privacy concerns | High | Strong privacy controls |
| Crypto regulation | Critical | Legal/compliance review |
| International termination complexity | High | Country-by-country rollout |

---

# 44. Product Decisions Log

| Decision | Status |
|---|---|
| Username is public identity | Confirmed |
| Phone number associated with account | Confirmed |
| Presence determines online/offline state | Confirmed |
| Offline reachability is Premium | Confirmed |
| App-to-telephone is supported | Confirmed |
| Telephone-to-app is excluded initially | Confirmed |
| Recipient may fund offline calls | Confirmed concept |
| Caller may fund calls | Proposed |
| Built-in wallet | Confirmed concept |
| Crypto wallet implementation | To be validated |
| Business functionality | Later / Telegram-like |
| International support | Later |
| Adaptive poor-network calling | Confirmed |
| Full Telegram/Snapchat/Discord feature set | Later, not MVP |

---

# 45. Open Questions

These must be resolved before production architecture is frozen.

## Product

1. Is Premium subscription required for both caller-funded and recipient-funded offline calls?
2. Can Free users call ordinary numbers if the recipient pays?
3. Should offline calling require the recipient to explicitly enable it?
4. Should recipients be able to approve every offline call?
5. What happens if the recipient's wallet is empty during a call?
6. Are offline SMS/text messages included, or only voice calls?
7. Should the product support voicemail?

## Wallet

8. What cryptocurrency/asset is supported?
9. Will users have custodial or non-custodial wallets?
10. Will the wallet hold fiat equivalents?
11. What countries can legally use the wallet?
12. How are refunds handled?

## Telephone

13. Which carrier/provider will provide termination?
14. Which launch country is first?
15. What destinations are supported?
16. How is caller ID presented?
17. What are the per-minute carrier costs?
18. What legal/telecom registrations are required?

## Security

19. What verification level is required before telephone calling?
20. What anti-spam limits apply?
21. What is the maximum daily call spend?
22. How are suspicious calls blocked?

---

# 46. Recommended MVP Product Rules

To prevent complexity, use these initial rules:

```text
RULE 1
App user + app user + online
= Internet communication

RULE 2
App user + app user + offline
= Message queues normally

RULE 3
Offline phone call
= Premium feature

RULE 4
Offline telephone call
= Must have valid funding authorization

RULE 5
Recipient-funded calling
= Recipient must explicitly enable it

RULE 6
Every telephone call
= Display price/estimated charge

RULE 7
Every wallet
= Has spending limits

RULE 8
Telephone calls
= Only supported destinations/routes

RULE 9
Normal phone -> app
= Not MVP

RULE 10
International
= Added country by country
```

---

# 47. Product Roadmap

## Stage 0 — Discovery

Deliverables:

- Final product vision
- Market research
- Regulatory feasibility
- Carrier feasibility
- Technical spike
- Wallet feasibility

## Stage 1 — Communication MVP

Deliver:

- Accounts
- Usernames
- Phone verification
- Messaging
- Presence
- Voice calls
- Basic video

## Stage 2 — Premium Foundation

Deliver:

- Premium
- Wallet abstraction
- Billing ledger
- Spending controls
- Routing engine

## Stage 3 — Telephone Pilot

Deliver:

- Carrier integration
- Telephone routing
- Call metering
- Price quotes
- Controlled offline calling

## Stage 4 — Product Expansion

Deliver:

- Rich media
- Groups
- Channels
- Stories
- Business accounts

## Stage 5 — International

Deliver:

- Country routing
- International pricing
- Multiple carriers
- Regional compliance

---

# 48. Team Structure

For an early-stage build:

## Product

- Founder/Product Manager
- Product Designer

## Engineering

- Backend engineer
- Mobile engineer
- Real-time/WebRTC engineer
- DevOps/cloud engineer

## Specialist

- Security engineer/advisor
- Telecom/VoIP specialist
- Legal/regulatory advisor
- Payments/crypto specialist

A small founding team can combine several of these roles initially.

---

# 49. Project Governance

Every major feature should pass through:

```text
Idea
 ↓
Requirement
 ↓
User flow
 ↓
Architecture
 ↓
Implementation
 ↓
Testing
 ↓
Security review
 ↓
Product acceptance
 ↓
Release
 ↓
Monitoring
 ↓
Iteration
```

No production telephone functionality should bypass the legal, security, billing and carrier review stages.

---

# 50. Final Product Architecture Vision

```text
                         ┌───────────────────────┐
                         │       USER APP        │
                         │                       │
                         │ Chat | Voice | Video  │
                         │ Contacts | Profile    │
                         │ Premium | Wallet      │
                         └───────────┬───────────┘
                                     |
                                     v
                         ┌───────────────────────┐
                         │     IDENTITY LAYER    │
                         │                       │
                         │ Username              │
                         │ Phone identity        │
                         │ User/device/session    │
                         └───────────┬───────────┘
                                     |
                                     v
                         ┌───────────────────────┐
                         │   PRESENCE + ROUTING  │
                         │                       │
                         │ Online?               │
                         │ Offline?              │
                         │ Premium?              │
                         │ Wallet authorized?    │
                         │ Route available?      │
                         └───────┬───────┬───────┘
                                 |       |
                         APP ROUTE       PHONE ROUTE
                             |               |
                             v               v
                    ┌────────────────┐  ┌─────────────────┐
                    │ Internet Stack │  │ Telecom Gateway │
                    │                │  │                 │
                    │ Messaging      │  │ SIP/VoIP        │
                    │ WebRTC         │  │ Carrier         │
                    └───────┬────────┘  └────────┬────────┘
                            |                    |
                            v                    v
                       App User            Normal Phone
```

---

# 51. Final Product Statement

## Working product definition

> **A communication platform that connects people through Internet messaging, voice and video while allowing Premium users to extend communication to ordinary telephone numbers when Internet-based communication is unavailable.**

## Core promise

> **Talk to people, not networks.**

The user chooses the person.

The platform handles the route.

---

# 52. Immediate Next Actions

Before writing production code:

### P0 — Feasibility

- Validate carrier/PSTN integration options.
- Validate target-country telecommunications requirements.
- Validate crypto/wallet regulatory requirements.
- Validate economics of per-minute telephone termination.
- Build a tiny telephone-routing proof of concept.

### P1 — Product

- Finalize Premium rules.
- Finalize wallet payer rules.
- Finalize offline reachability policy.
- Define pricing model.
- Define privacy model.

### P2 — UX

- Produce wireframes.
- Produce interactive prototype.
- Test registration, chat, calling, Premium and offline-call flows.

### P3 — Engineering

- Build identity service.
- Build messaging service.
- Build presence service.
- Build app-to-app calling.
- Build wallet ledger abstraction.
- Build routing engine.

### P4 — Pilot

- Controlled users.
- One country.
- Limited telephone destinations.
- Strict spending limits.
- Full monitoring.

---

# 53. Project Manager's Master Backlog

```text
EPIC A  Identity
EPIC B  Authentication
EPIC C  Messaging
EPIC D  Presence
EPIC E  Voice
EPIC F  Video
EPIC G  Premium
EPIC H  Wallet
EPIC I  Routing
EPIC J  Telephone integration
EPIC K  Billing
EPIC L  Security
EPIC M  Abuse prevention
EPIC N  Notifications
EPIC O  Analytics
EPIC P  Infrastructure
EPIC Q  Compliance
EPIC R  UX/UI
EPIC S  QA
EPIC T  Launch
```

Priority convention:

```text
P0 = blocks product viability/security
P1 = required for MVP
P2 = important after MVP
P3 = future expansion
```

---

# 54. Definition of MVP Success

The MVP is successful if a new user can:

```text
Register
   ↓
Choose username
   ↓
Verify phone
   ↓
Find another user
   ↓
Send message
   ↓
Receive message
   ↓
Make Internet voice call
   ↓
Make Internet video call
   ↓
See presence
   ↓
Become Premium
   ↓
Fund/authorize communication balance
   ↓
Request an eligible offline telephone call
   ↓
Receive clear billing information
   ↓
Complete the call through an approved telephone route
   ↓
See the resulting wallet transaction
```

That is the first complete product loop.

---

# 55. Product North Star

The long-term ambition is not:

> "Build another Telegram."

It is:

> **Build a communication network where the user does not have to care whether the person they want to reach is on the Internet, offline, or using a basic phone.**

Telegram/Snapchat/Discord-like features can be layered on top later.

The **communication bridge** is the foundational product.
