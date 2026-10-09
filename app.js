(() => {
  "use strict";

  const iconPaths = {
    chat: '<path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-4.5A7.5 7.5 0 1 1 20 11.5Z"/><path d="M7.5 11h9M7.5 14.5h5"/>',
    phone: '<path d="M21 16.4v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.7 2 2 0 0 1 3.1 1.5h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7 9.5a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    wallet: '<rect x="2.5" y="5" width="19" height="15" rx="3"/><path d="M2.5 9h19M16 15h2"/><path d="M5 5V3.5h14"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.6a8 8 0 0 1-1.8 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.8-1l-1.7.6-1.4-2.4 1.4-1.1a7 7 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.6a8 8 0 0 1 1.8-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.8 1l1.7-.6 1.4 2.4-1.4 1.1a7 7 0 0 1 0 2Z"/>',
    search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.5 4.5"/>',
    edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
    video: '<rect x="3" y="6" width="13" height="12" rx="2.5"/><path d="m16 10 5-3v10l-5-3z"/>',
    panel: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M15 3v18"/>',
    more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
    arrowLeft: '<path d="m15 18-6-6 6-6"/><path d="M20 12H9"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    smile: '<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
    block: '<circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    checks: '<path d="m2 12 4 4L16 6"/><path d="m8 12 4 4 10-10"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
    alert: '<path d="m10.3 3.9-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3.1l-8-14a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z"/>',
    spark: '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z"/><path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2Z"/>',
    incoming: '<path d="M7 7h10v10"/><path d="m17 7-8 8"/><path d="M7 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/>',
    outgoing: '<path d="M17 17H7V7"/><path d="m7 17 8-8"/><path d="M17 7h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2"/>',
    minus: '<path d="M5 12h14"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
    shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    moon: '<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  };

  const icon = (name) => `<span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24">${iconPaths[name] || iconPaths.spark}</svg></span>`;
  document.querySelectorAll("[data-icon]").forEach((element) => {
    const name = element.dataset.icon;
    if (iconPaths[name]) element.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name]}</svg>`;
  });
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[char]);
  const avatarColors = {
    violet: ["#ece7ff", "#6752b8"], peach: ["#ffebe3", "#b66d59"], sage: ["#e3f2ec", "#477d6d"],
    blue: ["#e4efff", "#4f73a4"], rose: ["#fae8ed", "#a45f76"], sand: ["#f5eedf", "#92774b"],
    aqua: ["#e2f3f4", "#4b8287"],
  };
  const avatarMarkup = (person, extraClass = "") => {
    const colors = avatarColors[person.color] || avatarColors.violet;
    const presence = person.online ? "online" : person.away ? "avatar-away" : "";
    return `<span class="avatar ${presence} ${extraClass}" style="--avatar-bg:${colors[0]};--avatar-ink:${colors[1]}" aria-hidden="true">${escapeHTML(person.initials)}</span>`;
  };

  const people = {
    sophie: { id: "sophie", name: "Sophie Chen", initials: "SC", handle: "@sophiechen", online: true, presence: "Online now", phone: "+1 (415) 555-0142", bio: "Making things, collecting moments, and always looking for a new coffee spot ☕", color: "violet", preview: "That little bookstore was perfect ✨", time: "10:42", unread: 0, messages: [
      { from: "them", text: "Hey! I found that little bookstore you were talking about.", time: "10:34" },
      { from: "me", text: "Wait, the one tucked away on Valencia? I've been meaning to go for ages.", time: "10:36", status: "read" },
      { from: "them", text: "That's the one! The whole place smells like old books and really good coffee.", time: "10:38" },
      { from: "them", text: "I saved you the window seat ☕", time: "10:39" },
      { from: "me", text: "You're the best. I can be there in about 20 minutes!", time: "10:40", status: "read" },
      { from: "them", text: "That little bookstore was perfect ✨", time: "10:42" },
    ] },
    marcus: { id: "marcus", name: "Marcus Lee", initials: "ML", handle: "@marcuslee", online: true, presence: "Online now", phone: "+1 (415) 555-0188", bio: "Designer by day, enthusiastic home cook by night.", color: "sage", preview: "Sent you the new mockups", time: "10:18", unread: 2, messages: [
      { from: "them", text: "Hey! Just wrapped up the new mockups.", time: "10:05" },
      { from: "them", text: "Sent you the new mockups", time: "10:18" },
    ] },
    maya: { id: "maya", name: "Maya Patel", initials: "MP", handle: "@mayapatel", online: false, presence: "Last seen 2 hours ago", phone: "+44 20 7946 0811", bio: "Slow mornings, big ideas, and spontaneous weekend trips.", color: "peach", preview: "I’ll send you the photos later!", time: "09:51", unread: 0, messages: [
      { from: "me", text: "Those photos from the coast looked unreal.", time: "09:39", status: "read" },
      { from: "them", text: "It was even more beautiful in person!", time: "09:44" },
      { from: "them", text: "I’ll send you the photos later!", time: "09:51" },
    ] },
    noah: { id: "noah", name: "Noah Williams", initials: "NW", handle: "@noahw", online: false, away: true, presence: "Last seen yesterday", phone: "+1 (212) 555-0190", bio: "A little bit of everywhere. Currently somewhere near the mountains.", color: "blue", preview: "Voice message · 0:24", time: "Yesterday", unread: 0, messages: [
      { from: "them", text: "Voice message · 0:24", time: "Yesterday" },
    ] },
    elena: { id: "elena", name: "Elena Rivera", initials: "ER", handle: "@elena.r", online: true, presence: "Online now", phone: "+34 91 555 01 39", bio: "Art, architecture, and finding joy in the everyday.", color: "rose", preview: "See you Saturday 💛", time: "Yesterday", unread: 1, messages: [
      { from: "me", text: "Are we still on for Saturday?", time: "Yesterday", status: "read" },
      { from: "them", text: "See you Saturday 💛", time: "Yesterday" },
    ] },
    avery: { id: "avery", name: "Avery Brooks", initials: "AB", handle: "@averyb", online: false, presence: "Offline", phone: "+1 (646) 555-0108", bio: "Building community and making room for good conversations.", color: "sand", preview: "Thanks for checking in!", time: "Mon", unread: 0, recipientPays: true, messages: [
      { from: "them", text: "Thanks for checking in!", time: "Mon" },
    ] },
    studio: { id: "studio", name: "Studio North", initials: "SN", handle: "@studionorth", online: false, presence: "Business account", phone: "+1 (212) 555-0104", bio: "An independent creative studio making thoughtful digital things.", color: "aqua", preview: "Your appointment is confirmed", time: "Mon", unread: 0, business: true, messages: [
      { from: "them", text: "Your appointment is confirmed", time: "Mon" },
    ] },
  };

  const calls = [
    { personId: "sophie", type: "video", direction: "outgoing", when: "Today · 9:12", duration: "18 min" },
    { personId: "marcus", type: "voice", direction: "incoming", when: "Today · 8:36", duration: "6 min" },
    { personId: "maya", type: "voice", direction: "outgoing", when: "Yesterday · 6:24", duration: "No answer" },
    { personId: "noah", type: "phone", direction: "outgoing", when: "Mon · 2:51", duration: "4 min", billed: true },
  ];
  people.sophie.favorite = true;
  people.marcus.favorite = true;

  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem("connectx-preview-state") || "{}");
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) saved = {};
  } catch (error) {
    console.warn("ConnectX could not read saved preview preferences.", error);
    saved = {};
  }
  Object.entries(saved.messages || {}).forEach(([id, messages]) => {
    if (people[id] && Array.isArray(messages)) people[id].messages = messages;
  });
  Object.entries(saved.unread || {}).forEach(([id, count]) => {
    if (people[id] && Number.isInteger(count)) people[id].unread = count;
  });
  let currentId = saved.currentId && people[saved.currentId] ? saved.currentId : "sophie";
  let activeFilter = "all";
  let activeView = "chats";
  let query = "";
  let reachabilityOn = Boolean(saved.reachabilityOn);
  let dailyLimit = saved.dailyLimit || "10";
  let theme = saved.theme || "light";
  let currentPageQuery = "";
  let toastTimeout;

  const app = document.getElementById("app");
  const inboxPanel = document.getElementById("inbox-panel");
  const mainPanel = document.getElementById("main-panel");
  const pageView = document.getElementById("page-view");
  const modalRoot = document.getElementById("modal-root");
  const searchInput = document.getElementById("search");
  const list = document.getElementById("conversation-list");
  const messageList = document.getElementById("message-list");
  const threadScroll = document.getElementById("thread-scroll");
  const composer = document.getElementById("composer");
  const messageInput = document.getElementById("message-input");
  const filterTabs = [...document.querySelectorAll(".filter-tab")];
  const navButtons = [...document.querySelectorAll("[data-view]")];

  const persist = () => {
    try {
      localStorage.setItem("connectx-preview-state", JSON.stringify({
        currentId,
        reachabilityOn,
        dailyLimit,
        theme,
        messages: Object.fromEntries(Object.entries(people).map(([id, person]) => [id, person.messages])),
        unread: Object.fromEntries(Object.entries(people).map(([id, person]) => [id, person.unread])),
      }));
    } catch (error) {
      console.warn("ConnectX could not save preview changes on this device.", error);
      showToast("Your browser couldn't save this change on this device.", "warning");
    }
  };
  const currentPerson = () => people[currentId];
  const setIcon = (element, name) => { if (element) element.innerHTML = icon(name); };

  function renderConversationList() {
    const ordered = Object.values(people).sort((a, b) => {
      if (a.id === currentId) return -1;
      if (b.id === currentId) return 1;
      return 0;
    });
    const filtered = ordered.filter((person) => {
      const matchesQuery = `${person.name} ${person.handle} ${person.preview}`.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = activeFilter === "all" || (activeFilter === "unread" ? person.unread > 0 : Boolean(person.favorite));
      return matchesQuery && matchesFilter;
    });
    document.getElementById("all-count").textContent = String(Object.values(people).length);
    list.innerHTML = filtered.length ? filtered.map((person) => `
      <button class="conversation-item ${person.id === currentId ? "selected" : ""}" data-person="${escapeHTML(person.id)}" aria-current="${person.id === currentId ? "true" : "false"}">
        ${avatarMarkup(person)}
        <span class="conversation-copy">
          <span class="conversation-first-line"><span class="conversation-name">${escapeHTML(person.name)}</span><time class="conversation-time">${escapeHTML(person.time)}</time></span>
          <span class="conversation-second-line"><span class="conversation-preview">${escapeHTML(person.preview)}</span>${person.unread ? `<span class="unread-count">${person.unread}</span>` : ""}</span>
        </span>
      </button>`).join("") : `<div class="empty-state"><div class="empty-icon">${icon("search")}</div>No conversations found.</div>`;
    list.querySelectorAll("[data-person]").forEach((button) => button.addEventListener("click", () => openConversation(button.dataset.person)));
  }

  function renderThread() {
    const person = currentPerson();
    document.getElementById("header-avatar").outerHTML = avatarMarkup(person, "avatar-lg");
    document.querySelector("#header-person .avatar").id = "header-avatar";
    document.getElementById("header-name").textContent = person.name;
    const presence = document.getElementById("header-presence");
    presence.textContent = person.presence;
    presence.classList.toggle("is-online", person.online);
    document.getElementById("profile-avatar").outerHTML = avatarMarkup(person, "avatar-profile");
    document.querySelector(".profile-orbit .avatar").id = "profile-avatar";
    document.getElementById("profile-name").textContent = person.name;
    document.getElementById("profile-handle").textContent = person.handle;
    document.getElementById("profile-status").textContent = person.presence;
    document.getElementById("profile-status").style.color = person.online ? "var(--green)" : "#a0a2b0";
    document.getElementById("profile-online").style.display = person.online ? "" : "none";
    document.getElementById("contact-bio").textContent = person.bio;
    document.getElementById("contact-phone").textContent = person.phone;
    messageList.innerHTML = person.messages.map((message) => {
      const mine = message.from === "me";
      const status = message.status === "queued" ? `<span class="message-status queued">${icon("clock")} Queued · will send when online</span>`
        : mine ? `<span class="message-status">${icon(message.status === "read" ? "checks" : "check")} ${message.status === "read" ? "Read" : "Sent"}</span>` : "";
      const content = message.attachment
        ? `<div class="message-attachment"><span class="file-chip">${icon("file")}</span><span>${escapeHTML(message.text)}</span></div>`
        : `<div class="message-bubble">${escapeHTML(message.text)}</div>`;
      return `<article class="message-row ${mine ? "mine" : ""}">
        ${!mine ? avatarMarkup(person) : ""}
        <div class="message-body">
          ${!mine ? `<div class="message-meta"><span>${escapeHTML(person.name.split(" ")[0])}</span><time>${escapeHTML(message.time)}</time></div>` : ""}
          ${content}
          ${mine ? `<div class="message-meta"><time>${escapeHTML(message.time)}</time></div>` : ""}
          ${status}
        </div>
      </article>`;
    }).join("");
    document.getElementById("mute-chat").innerHTML = `${icon("bell")} ${person.muted ? "Unmute notifications" : "Mute notifications"}`;
    document.getElementById("block-contact").innerHTML = `${icon("block")} ${person.blocked ? "Unblock contact" : "Block contact"}`;
    renderConversationList();
    requestAnimationFrame(() => { threadScroll.scrollTop = threadScroll.scrollHeight; });
  }

  function openConversation(id) {
    if (!people[id]) return;
    currentId = id;
    activeView = "chats";
    people[id].unread = 0;
    pageView.classList.add("hidden");
    app.classList.remove("page-mode");
    app.classList.add("mobile-thread-open");
    document.getElementById("details-panel").classList.remove("open");
    setNavActive("chats");
    renderThread();
    persist();
  }

  function setNavActive(view) {
    navButtons.forEach((button) => button.classList.toggle("active", button.dataset.view === view));
    activeView = view;
  }

  function showChatsList() {
    activeView = "chats";
    app.classList.remove("mobile-thread-open", "page-mode");
    pageView.classList.add("hidden");
    setNavActive("chats");
    renderConversationList();
  }

  function navigate(view) {
    if (view === "chats") {
      showChatsList();
      return;
    }
    setNavActive(view);
    app.classList.remove("mobile-thread-open");
    app.classList.add("page-mode");
    pageView.classList.remove("hidden");
    document.getElementById("details-panel").classList.remove("open");
    renderPage(view);
  }

  function pageHeading(kicker, title, description, action = "") {
    return `<div class="page-heading"><div><p class="eyebrow">${escapeHTML(kicker)}</p><h2>${escapeHTML(title)}</h2><p>${escapeHTML(description)}</p></div>${action}</div>`;
  }
  function demoNote(message) {
    return `<div class="demo-note">${icon("alert")}<span>${escapeHTML(message)}</span></div>`;
  }

  function renderPage(view) {
    currentPageQuery = "";
    if (view === "wallet") renderWallet();
    else if (view === "calls") renderCalls();
    else if (view === "contacts") renderContacts();
    else if (view === "settings") renderSettings();
    pageView.scrollTop = 0;
  }

  function renderWallet() {
    const rows = [
      { name: "Offline phone call", detail: "No recent activity · Preview", amount: "−$0.32", iconName: "phone", credit: false },
      { name: "Balance added", detail: "Sample transaction · Preview", amount: "+$5.00", iconName: "plus", credit: true },
      { name: "Offline phone call", detail: "Sample transaction · Preview", amount: "−$0.08", iconName: "phone", credit: false },
    ];
    pageView.innerHTML = `${pageHeading("CONNECTX BALANCE", "Your wallet", "A clear view of your communication balance and activity.", `<button class="primary-button" data-action="add-funds">${icon("plus")} Add funds</button>`)}
      ${demoNote("Preview balance only. Adding funds and call charges are not connected to a payment service.")}
      <div class="overview-grid">
        <section class="surface-card balance-card"><p class="card-label">AVAILABLE BALANCE · SAMPLE</p><p class="balance-amount">$12.40</p><p class="balance-subtitle">No funds are held or charged in this preview.</p><button class="primary-button" data-action="add-funds">${icon("plus")} Add funds</button></section>
        <section class="surface-card reachability-card"><div class="card-title-row"><div><p class="card-label">SPENDING CONTROL</p><h3 class="card-title">You're in control</h3><p class="card-description">Set a limit before trying Premium offline reachability.</p></div><span class="status-pill">Demo</span></div><div class="reachability-foot"><span>Daily call limit</span><strong>$${escapeHTML(dailyLimit)}.00</strong></div></section>
        <section class="surface-card section-card"><div class="section-title-row"><h3>Recent activity</h3><span class="status-pill">Sample history</span></div>
          ${rows.map((row) => `<div class="activity-row"><span class="activity-icon ${row.credit ? "credit" : ""}">${icon(row.iconName)}</span><span class="activity-copy"><strong>${row.name}</strong><span>${row.detail}</span></span><span class="activity-amount ${row.credit ? "credit" : ""}">${row.amount}</span></div>`).join("")}
        </section>
        <section class="surface-card section-card-small reachability-promo"><span class="promo-symbol">${icon("shield")}</span><p class="promo-label">SPEND WITH CONFIDENCE</p><h3>Nothing happens without your say-so.</h3><p>Every phone call shows its route, rate, and payer before you continue.</p><button class="text-button" data-action="open-reachability">Manage reachability ${icon("chevron")}</button></section>
      </div>`;
  }

  function renderCalls() {
    pageView.innerHTML = `${pageHeading("YOUR RECENT ACTIVITY", "Calls", "Stay in the loop. App calls and phone-network routes are always clearly labeled.", `<button class="primary-button" data-action="new-call">${icon("phone")} New call</button>`)}
      ${demoNote("Call history shown here is sample data. No calls can be placed from this preview.")}
      <section class="surface-card list-card"><div class="section-title-row"><h3>Recent calls</h3><button class="text-button" data-action="clear-calls">Clear history</button></div><div class="people-list call-list">${calls.length ? calls.map((call, index) => {
        const person = people[call.personId];
        const route = call.type === "phone";
        const directionIcon = call.direction === "incoming" ? "incoming" : "outgoing";
        const typeText = route ? "Phone network · Sample" : `${call.type === "video" ? "Video" : "Voice"} call · ConnectX`;
        return `<div class="person-row">${avatarMarkup(person)}<div class="person-copy"><strong>${escapeHTML(person.name)}</strong><span>${icon(directionIcon)} ${escapeHTML(call.when)} · ${escapeHTML(call.duration)}</span></div><span class="history-route">${route ? `${icon("phone")} Phone` : typeText}</span>${route ? "" : `<button class="icon-button" data-call-person="${person.id}" aria-label="Call ${escapeHTML(person.name)}">${icon("phone")}</button>`}</div>`;
      }).join("") : `<div class="empty-state">Your call history is clear.</div>`}</div></section>`;
  }

  function renderContacts() {
    const peopleFound = Object.values(people).filter((person) => `${person.name} ${person.handle}`.toLowerCase().includes(currentPageQuery.toLowerCase()));
    pageView.innerHTML = `${pageHeading("THE PEOPLE YOU CARE ABOUT", "Contacts", "Find someone by name or username, and pick up right where you left off.", `<button class="primary-button" data-action="new-contact">${icon("plus")} New message</button>`)}
      <div class="page-toolbar"><input class="page-search" id="contact-search" type="search" placeholder="Search people or usernames…" aria-label="Search people or usernames" value="${escapeHTML(currentPageQuery)}" /></div>
      <section class="surface-card list-card" style="margin-top:16px"><div class="section-title-row"><h3>Your people</h3><span class="status-pill">${peopleFound.length} contacts</span></div><div class="people-list">${peopleFound.length ? peopleFound.map((person) => `<div class="person-row">${avatarMarkup(person)}<div class="person-copy"><strong>${escapeHTML(person.name)}</strong><span>${escapeHTML(person.handle)} · ${escapeHTML(person.presence)}</span></div><button class="secondary-button" data-open-person="${person.id}">${icon("chat")} Message</button></div>`).join("") : `<div class="empty-state">No one found. Try a different name.</div>`}</div></section>`;
    const input = document.getElementById("contact-search");
    input.addEventListener("input", () => {
      const position = input.selectionStart;
      currentPageQuery = input.value;
      renderContacts();
      const next = document.getElementById("contact-search");
      next.focus();
      next.setSelectionRange(position, position);
    });
  }

  function renderSettings() {
    const self = { name: "Alex Morgan", initials: "AM", color: "violet" };
    pageView.innerHTML = `${pageHeading("MAKE CONNECTX YOURS", "Settings", "A few thoughtful controls to help you feel at home.")}
      <div class="settings-layout">
        <div class="settings-main">
          <section class="surface-card settings-group"><div class="settings-group-head"><h3>Offline reachability</h3><p>Let people you trust reach your phone when you can't get online. This is an interactive preview.</p></div>
            <div class="setting-row"><div class="setting-row-copy"><strong>Allow phone calls while offline</strong><span>Premium feature · You stay in control</span></div><button class="switch" role="switch" aria-checked="${reachabilityOn}" aria-label="Allow phone calls while offline" data-action="toggle-reachability"></button></div>
            <div class="setting-row"><div class="setting-row-copy"><strong>Who can call</strong><span>Only people already in your contacts</span></div><span class="status-pill">Contacts</span></div>
            <div class="setting-row"><div class="setting-row-copy"><strong>Daily spending limit</strong><span>Sample amount, not a real wallet limit</span></div><select class="select-control" id="daily-limit" aria-label="Daily spending limit"><option value="5" ${dailyLimit === "5" ? "selected" : ""}>$5 / day</option><option value="10" ${dailyLimit === "10" ? "selected" : ""}>$10 / day</option><option value="25" ${dailyLimit === "25" ? "selected" : ""}>$25 / day</option></select></div>
            <div class="setting-row"><div class="setting-row-copy"><strong>International phone calls</strong><span>Only enable destinations when supported</span></div><span class="status-pill">Not available</span></div>
          </section>
          <section class="surface-card settings-group" style="margin-top:14px"><div class="settings-group-head"><h3>Privacy</h3><p>You're in charge of what people can see and how they can reach you.</p></div>
            <div class="setting-row"><div class="setting-row-copy"><strong>Show my phone number</strong><span>Only contacts can see it</span></div><span class="status-pill enabled">Contacts only</span></div>
            <div class="setting-row"><div class="setting-row-copy"><strong>Last seen &amp; online</strong><span>Choose who sees when you're around</span></div><select class="select-control" aria-label="Last seen and online visibility"><option>Everyone</option><option selected>My contacts</option><option>Nobody</option></select></div>
            <div class="setting-row"><div class="setting-row-copy"><strong>Blocked people</strong><span>Review who can no longer contact you</span></div><button class="text-button" data-action="blocked-list">Manage ${icon("chevron")}</button></div>
          </section>
        </div>
        <aside class="settings-aside">
          <section class="surface-card account-summary">${avatarMarkup(self)}<h3>Alex Morgan</h3><p>@alexmorgan · Preview account</p><button class="secondary-button" data-action="edit-profile">Edit profile</button></section>
          <section class="surface-card settings-group" style="margin-top:13px"><div class="settings-group-head"><h3>Appearance</h3><p>Make yourself comfortable.</p></div><div class="setting-row"><div class="setting-row-copy"><strong>Theme</strong><span>Applies to this device</span></div><select class="select-control" id="theme-choice" aria-label="Choose an appearance"><option value="light" ${theme === "light" ? "selected" : ""}>Light</option><option value="dark" ${theme === "dark" ? "selected" : ""}>Dark</option></select></div></section>
          <section class="surface-card settings-group" style="margin-top:13px"><div class="settings-group-head"><h3>Your account</h3><p>Preview only · no sign-in or account service is connected.</p></div><div class="setting-row"><div class="setting-row-copy"><strong>Username</strong><span>@alexmorgan</span></div></div><div class="setting-row"><div class="setting-row-copy"><strong>Phone verification</strong><span>Not connected in this preview</span></div><span class="status-pill">Demo</span></div></section>
        </aside>
      </div>`;
  }

  function modal({ title, body, iconName = "spark", warning = false, actions = [], label = "" }) {
    modalRoot.innerHTML = `<div class="modal-backdrop" data-backdrop><section class="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" aria-describedby="dialog-copy">
      <div class="dialog-header"><button class="icon-button modal-close" data-action="close-modal" aria-label="Close dialog">${icon("close")}</button><span class="dialog-icon ${warning ? "warning" : ""}">${icon(iconName)}</span></div>
      <h2 id="dialog-title">${escapeHTML(title)}</h2><div class="dialog-copy" id="dialog-copy">${body}</div>${label}
      <div class="dialog-actions">${actions.map((action, index) => `<button class="${action.primary ? "primary-button" : "secondary-button"}" data-action="${escapeHTML(action.action)}" ${index === actions.length - 1 ? 'data-focus="true"' : ""}>${action.icon ? icon(action.icon) : ""}${escapeHTML(action.label)}</button>`).join("")}</div>
    </section></div>`;
    modalRoot.querySelector('[data-focus="true"]')?.focus();
    modalRoot.querySelector(".modal-backdrop").addEventListener("click", (event) => {
      if (event.target.matches("[data-backdrop]")) closeModal();
    });
  }

  function closeModal() { modalRoot.innerHTML = ""; }
  function showOfflineCall(person, payer = person.recipientPays ? "recipient" : "caller") {
    const payerName = payer === "recipient" ? `${person.name.split(" ")[0]}'s wallet` : "Your ConnectX balance";
    const payerText = payer === "recipient" ? `${person.name} has chosen to fund eligible calls.` : "The call would be charged to your balance.";
    modal({
      title: `Call ${person.name.split(" ")[0]}'s phone?`,
      iconName: "phone",
      warning: true,
      body: `${escapeHTML(person.name)} is offline. This preview shows how a telephone-network call would be presented before you choose whether to continue.`,
      label: `<div class="price-card"><div class="price-row"><span>Route</span><strong>Telephone network</strong></div><div class="price-row"><span>Estimated rate · sample</span><strong>$0.04 / minute</strong></div><div class="price-row"><span>Payer</span><strong>${escapeHTML(payerName)}</strong></div></div><p class="dialog-disclaimer">${icon("alert")} No call will be placed, and no balance will be charged. Phone calling is not connected in this preview.</p>`,
      actions: [{ label: "Not now", action: "close-modal" }, { label: "Continue (preview)", action: "confirm-offline-call", primary: true }],
    });
    modalRoot.dataset.pendingCall = person.id;
  }

  function showAppCall(person, type) {
    modal({
      title: `${type === "video" ? "Video" : "Voice"} call · ${person.name}`,
      iconName: type === "video" ? "video" : "phone",
      body: `This would start an Internet ${type} call with ${escapeHTML(person.name)}. The real-time calling service isn't connected in this preview.`,
      label: `<div class="price-card"><div class="price-row"><span>Connection</span><strong>ConnectX · app to app</strong></div><div class="price-row"><span>Network charges</span><strong>No ConnectX call charge</strong></div></div><p class="dialog-disclaimer">${icon("alert")} This is a design preview; no call will connect.</p>`,
      actions: [{ label: "Close", action: "close-modal" }, { label: "Got it", action: "close-modal", primary: true }],
    });
  }

  function showToast(message, tone = "success") {
    const region = document.getElementById("toast-region");
    region.innerHTML = `<div class="toast ${tone === "warning" ? "warning" : ""}">${icon(tone === "warning" ? "alert" : "check")}<span>${escapeHTML(message)}</span></div>`;
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => { region.innerHTML = ""; }, 3800);
  }

  function handleCall(person, type = "voice") {
    if (person.online) showAppCall(person, type);
    else showOfflineCall(person);
  }

  function addMessage(text, attachment = false) {
    const cleaned = text.trim();
    if (!cleaned) return;
    const person = currentPerson();
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    person.messages.push({ from: "me", text: cleaned, time, status: person.online ? "sent" : "queued", attachment });
    person.preview = attachment ? `File · ${cleaned}` : cleaned;
    person.time = time;
    renderThread();
    persist();
    if (!person.online) showToast("Message saved here and queued until your contact is online.", "warning");
  }

  function newChatDialog() {
    modal({
      title: "Start a conversation",
      iconName: "chat",
      body: "Choose someone from your ConnectX contacts to open a chat.",
      label: `<label class="input-label" for="new-chat-search">Find a person</label><input class="dialog-input" id="new-chat-search" type="search" placeholder="Name or username" autocomplete="off" />`,
      actions: [{ label: "Cancel", action: "close-modal" }, { label: "See contacts", action: "go-contacts", primary: true }],
    });
  }

  function addFundsDialog() {
    modal({
      title: "Add to your balance",
      iconName: "wallet",
      body: "In a real ConnectX account, you would choose a secure payment method. This preview never processes payments.",
      label: `<label class="input-label" for="fund-amount">Sample amount</label><select class="dialog-input" id="fund-amount"><option value="5">$5.00</option><option value="10">$10.00</option><option value="20">$20.00</option></select><p class="dialog-disclaimer">${icon("lock")} No payment details are collected and no money will be charged.</p>`,
      actions: [{ label: "Cancel", action: "close-modal" }, { label: "Preview top-up", action: "confirm-funds", primary: true }],
    });
  }

  function actionHandler(action, element) {
    const person = currentPerson();
    switch (action) {
      case "close-modal": closeModal(); break;
      case "confirm-offline-call":
        closeModal();
        showToast("Preview only. No call was placed and no balance was charged.", "warning");
        break;
      case "confirm-funds":
        closeModal();
        showToast("Preview only. No payment was taken.", "warning");
        break;
      case "add-funds": addFundsDialog(); break;
      case "open-reachability": navigate("settings"); break;
      case "toggle-reachability":
        reachabilityOn = !reachabilityOn;
        persist();
        renderSettings();
        showToast(reachabilityOn ? "Offline reachability is on in this preview." : "Offline reachability is off.", reachabilityOn ? "success" : "warning");
        break;
      case "new-chat": newChatDialog(); break;
      case "go-contacts": closeModal(); navigate("contacts"); break;
      case "new-contact": closeModal(); showToast("Contact syncing isn't connected in this preview.", "warning"); break;
      case "new-call": closeModal(); navigate("contacts"); break;
      case "clear-calls":
        calls.splice(0, calls.length);
        renderCalls();
        showToast("Sample call history cleared.");
        break;
      case "blocked-list": showToast("You haven't blocked anyone in this preview."); break;
      case "edit-profile": showToast("Profile editing isn't connected in this preview.", "warning"); break;
      case "close-details": document.getElementById("details-panel").classList.remove("open"); break;
      case "mute":
        person.muted = !person.muted;
        renderThread();
        persist();
        showToast(person.muted ? "Notifications muted for this chat." : "Notifications unmuted.");
        break;
      case "block":
        person.blocked = !person.blocked;
        renderThread();
        persist();
        showToast(person.blocked ? `${person.name} blocked in this preview.` : `${person.name} unblocked.`);
        break;
      default:
        if (element?.dataset.openPerson) openConversation(element.dataset.openPerson);
    }
  }

  document.addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-view]");
    if (viewButton) {
      if (viewButton.dataset.view === "chats" && window.matchMedia("(max-width: 700px)").matches && app.classList.contains("mobile-thread-open")) showChatsList();
      else navigate(viewButton.dataset.view);
      return;
    }
    const actionElement = event.target.closest("[data-action]");
    if (actionElement) {
      actionHandler(actionElement.dataset.action, actionElement);
      return;
    }
    const openPerson = event.target.closest("[data-open-person]");
    if (openPerson) { openConversation(openPerson.dataset.openPerson); return; }
    if (event.target.closest("#voice-call, #profile-audio")) { handleCall(currentPerson(), "voice"); return; }
    if (event.target.closest("#video-call, #profile-video")) { handleCall(currentPerson(), "video"); return; }
    if (event.target.closest("#header-person")) { document.getElementById("details-panel").classList.add("open"); return; }
    if (event.target.closest("#details-toggle")) { document.getElementById("details-panel").classList.toggle("open"); return; }
    if (event.target.closest("#details-close")) { document.getElementById("details-panel").classList.remove("open"); return; }
    if (event.target.closest("#profile-message")) { document.getElementById("details-panel").classList.remove("open"); return; }
    if (event.target.closest("#new-chat")) { newChatDialog(); return; }
    if (event.target.closest("#attach-button")) { document.getElementById("file-input").click(); return; }
    if (event.target.closest("#emoji-button")) { messageInput.value += " ✨"; messageInput.focus(); return; }
    if (event.target.closest("#mute-chat")) { actionHandler("mute"); return; }
    if (event.target.closest("#block-contact")) { actionHandler("block"); return; }
    if (event.target.closest("#shared-media")) { showToast("Shared media preview isn't connected yet.", "warning"); return; }
    const callButton = event.target.closest("[data-call-person]");
    if (callButton) {
      const person = people[callButton.dataset.callPerson];
      if (person) handleCall(person);
      return;
    }
    if (event.target.closest("#inbox-more, #chat-more")) { showToast("You're all caught up."); }
  });

  document.addEventListener("change", (event) => {
    if (event.target.id === "daily-limit") {
      dailyLimit = event.target.value;
      persist();
      showToast(`Daily sample limit set to $${dailyLimit}.`);
    }
    if (event.target.id === "theme-choice") {
      theme = event.target.value;
      document.documentElement.dataset.theme = theme;
      persist();
    }
    if (event.target.id === "file-input" && event.target.files?.[0]) {
      const file = event.target.files[0];
      addMessage(file.name, true);
      event.target.value = "";
    }
  });

  composer.addEventListener("submit", (event) => {
    event.preventDefault();
    addMessage(messageInput.value);
    messageInput.value = "";
    messageInput.style.height = "auto";
  });
  messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      composer.requestSubmit();
    }
  });
  messageInput.addEventListener("input", () => {
    messageInput.style.height = "auto";
    messageInput.style.height = `${Math.min(messageInput.scrollHeight, 120)}px`;
  });

  searchInput.addEventListener("input", () => {
    query = searchInput.value;
    renderConversationList();
  });
  filterTabs.forEach((tab) => tab.addEventListener("click", () => {
    activeFilter = tab.dataset.filter;
    filterTabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    renderConversationList();
  }));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalRoot.innerHTML) closeModal();
    if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName) && !modalRoot.innerHTML) {
      event.preventDefault();
      searchInput.focus();
    }
  });
  document.getElementById("back-to-list").addEventListener("click", showChatsList);
  navButtons.forEach((button) => button.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") navigate(button.dataset.view);
  }));
  document.documentElement.dataset.theme = theme;
  setNavActive("chats");
  renderThread();
})();
