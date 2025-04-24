// Unified script for both desktop and mobile broker lists
(function () {
  const testVariable =
    typeof FXStreet !== "undefined" &&
    FXStreet.Global &&
    typeof FXStreet.Global.RandomClient === "number"
      ? FXStreet.Global.RandomClient % 2
      : Math.floor(Math.random() * 2);
  const desiredIndex = testVariable % 2;
  const configs = [
    {
      selector: "#brokerList",
      idSuffix: "",
    },
    {
      selector: "#brokerListMobile",
      idSuffix: "-m",
    },
  ];
  const brokersData = [
    {
      name: "Pepperstone",
      spreadsImageUrl:
        "https://editorial.fxsstatic.com/brokers/Pepperstone2_Gran.png",
      reviewUrl: "https://www.fxstreet.com/brokers/reviews/pepperstone",
      slug: "pepperstone-markets-limited",
      isPartner: true,
      liveAccountUrl:
        "http://pubads.g.doubleclick.net/gampad/clk?id=6720218572&iu=/7138/FXS30",
      disclosureMessage:
        "CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 81.4% of retail investor accounts lose money when trading CFDs with this provider. You should consider whether you understand how CFDs work, and whether you can afford to take the high risk of losing your money.",
      accountConditions: 8.2,
      toolsResources: 8.2,
      customerServiceSupport: 7.4,
      tradingSettings: 9.0,
      trust: 8.8,
      userExperience: 9.0,
    },
    {
      name: "XM Group",
      spreadsImageUrl:
        "https://editorial.fxsstatic.com/brokers/xm_2025_Gran.png",
      reviewUrl: "https://www.fxstreet.com/brokers/reviews/xm",
      slug: "xmgroup",
      isPartner: false,
      liveAccountUrl:
        "http://pubads.g.doubleclick.net/gampad/clk?id=6233579970&iu=/7138/FXS30",
      disclosureMessage:
        "Forex trading and trading in other leveraged products involves a significant level of risk and is not suitable for all investors.",
      accountConditions: 7.2,
      toolsResources: 9.2,
      customerServiceSupport: 9.6,
      tradingSettings: 8.4,
      trust: 7,
      userExperience: 8.4,
    },
    {
      name: "Moneta Markets",
      spreadsImageUrl:
        "https://editorial.fxsstatic.com/brokers/Moneta_2025-B_Gran.png",
      reviewUrl: "https://www.fxstreet.com/brokers/reviews/moneta-markets",
      slug: "monetamarkets",
      isPartner: false,
      liveAccountUrl:
        "http://pubads.g.doubleclick.net/gampad/clk?id=6293489453&iu=/7138/FXS30",
      disclosureMessage:
        "Risk Warning: CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage...",
      accountConditions: 7.4,
      toolsResources: 6.6,
      customerServiceSupport: 8.0,
      tradingSettings: 6.6,
      trust: 5.2,
      userExperience: 9.2,
    },
    {
      name: "TradingPro",
      spreadsImageUrl:
        "https://editorial.fxsstatic.com/brokers/tradingpro2_Gran.jpg",
      reviewUrl: "https://www.fxstreet.com/brokers/reviews/tradingpro",
      slug: "tradingpro",
      isPartner: false,
      liveAccountUrl:
        "http://pubads.g.doubleclick.net/gampad/clk?id=6890289095&iu=/7138/FXS30",
      disclosureMessage: "",
      accountConditions: 7.2,
      toolsResources: 5.2,
      customerServiceSupport: 6.6,
      tradingSettings: 8.0,
      trust: 5.0,
      userExperience: 7.0,
    }
  ];

  function brokerCardTemplate(broker, idSuffix = "") {
    return `
      <div class="broker-card">
          <div class="broker-top">
              <div class="broker-logo">
                  <a 
                      href="https://www.fxstreet.com/brokers/${broker.slug}" 
                      target="_blank"
                      rel="sponsored noopener noreferrer nofollow" 
                      class="broker-link-logo"
                      data-ga4event-clk-name="broker_review_click" 
                      data-ga4event-element="logo" 
                      data-ga4event-feature-1="${broker.slug}" 
                      data-ga4event-feature-2="test_0001" 
                      >
                      <img 
                          src="${broker.spreadsImageUrl}" 
                          alt="${broker.slug}"
                          class="broker-logo-img" 
                      />
                  </a>
              </div>
              <div class="broker-top-right">
                  <div class="broker-sponsored-wrapper">
                      <a 
                          title="${broker.name}" 
                          href="https://www.fxstreet.com/brokers/${broker.slug}"
                          target="_blank"
                          rel="sponsored noopener noreferrer nofollow" 
                          class="broker-name-link"
                          data-ga4event-clk-name="broker_review_click" 
                          data-ga4event-element="broker_name" 
                          data-ga4event-feature-1="${broker.slug}" 
                          data-ga4event-feature-2="test_0001" 
                          >${broker.name}</a>
                          ${broker.isPartner ? '<div class="broker-partner">Sponsor</div>' : ""}
                  </div>
                  ${broker.reviewUrl ? `
                  <a href="${broker.reviewUrl}"
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="review-link"
                      data-ga4event-clk-name="broker_review_click" 
                      data-ga4event-element="read_review" 
                      data-ga4event-feature-1="${broker.slug}" 
                      data-ga4event-feature-2="test_0001" 
                      >Read review</a>` : ''}
              </div>
          </div>
          <a 
              href="${broker.liveAccountUrl}" 
              target="_blank"
              rel="sponsored noopener noreferrer nofollow" 
              class="cta-button"
              data-ga4event-clk-name="broker_review_click" 
              data-ga4event-element="open_account" 
              data-ga4event-feature-1="${broker.slug}" 
              data-ga4event-feature-2="test_0001" 
              >Open Account
          </a>
          ${broker.disclosureMessage === '' ? `
          <div class="disclosure"></div>
          ` : `
          <div class="disclosure">
              <input 
                  type="checkbox" 
                  id="toggle-disclosure-1${idSuffix}-${broker.slug}" 
                  class="disclosure-checkbox">
              <label 
                  for="toggle-disclosure-1${idSuffix}-${broker.slug}" 
                  class="disclosure-label">
                  <p 
                      class="disclosure-content">
                      ${broker.disclosureMessage}
                  </p>
                  <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      stroke="currentColor" 
                      stroke-width="1" 
                      stroke-linecap="round" 
                      stroke-linejoin="round"
                      class="chevron-icon">
                      <path d="M6 9l6 6l6 -6"></path>
                  </svg>
              </label>
          </div>
          `}
      </div>
    `;
  }

  function brokerRatingTemplate(broker, idSuffix = "") {
    return `
      <div class="broker-card">
        <div class="broker-top">
            <div class="broker-logo">
                <a 
                    href="https://www.fxstreet.com/brokers/${broker.slug}" 
                    target="_blank"
                    rel="sponsored noopener noreferrer nofollow" 
                    class="broker-link-logo"
                    data-ga4event-clk-name="broker_review_click" 
                    data-ga4event-element="logo" 
                    data-ga4event-feature-1="${broker.slug}" 
                    data-ga4event-feature-2="test_0002" 
                    >
                    <img 
                        src="${broker.spreadsImageUrl}" 
                        alt="${broker.slug}"
                        class="broker-logo-img" 
                    />
                </a>
            </div>
            <div class="broker-top-right">
                <div class="broker-sponsored-wrapper">
                    <a 
                        title="${broker.name}" 
                        href="https://www.fxstreet.com/brokers/${broker.slug}"
                        target="_blank"
                        rel="sponsored noopener noreferrer nofollow" 
                        class="broker-name-link"
                        data-ga4event-clk-name="broker_review_click" 
                        data-ga4event-element="broker_name" 
                        data-ga4event-feature-1="${broker.slug}" 
                        data-ga4event-feature-2="test_0002" 
                        >${broker.name}</a>
                        ${broker.isPartner ? '<div class="broker-partner">Sponsor</div>' : ""}
                </div>
            </div>
        </div>
        <div class="chart-container">
            <div class="chart-item">
                <span class="chart-item-label">Account</span>
                <div class="chart-bar">
                    <div class="chart-bar-value" style="width: ${broker.accountConditions * 10}%;"></div>
                </div>
                <span class="chart-value">${broker.accountConditions}</span>
            </div>
            <div class="chart-item">
                <span class="chart-item-label">Tools</span>
                <div class="chart-bar">
                    <div class="chart-bar-value" style="width: ${broker.toolsResources * 10}%;"></div>
                </div>
                <span class="chart-value">${broker.toolsResources}</span>
            </div>
            <div class="chart-item">
                <span class="chart-item-label">Service</span>
                <div class="chart-bar">
                    <div class="chart-bar-value" style="width: ${broker.customerServiceSupport * 10}%;"></div>
                </div>
                <span class="chart-value">${broker.customerServiceSupport}</span>
            </div>
            <div class="chart-item">
                <span class="chart-item-label">Trading</span>
                <div class="chart-bar">
                    <div class="chart-bar-value" style="width: ${broker.tradingSettings * 10}%;"></div>
                </div>
                <span class="chart-value">${broker.tradingSettings}</span>
            </div>
            <div class="chart-item">
                <span class="chart-item-label">Trust</span>
                <div class="chart-bar">
                    <div class="chart-bar-value" style="width: ${broker.trust * 10}%;"></div>
                </div>
                <span class="chart-value">${broker.trust}</span>
            </div>
            <div class="chart-item">
                <span class="chart-item-label">Experience</span>
                <div class="chart-bar">
                    <div class="chart-bar-value" style="width: ${broker.userExperience * 10}%;"></div>
                </div>
                <span class="chart-value">${broker.userExperience}</span>
            </div>
        </div>
        ${broker.reviewUrl ? `
        <a 
            href="${broker.reviewUrl}"
            target="_blank"
            rel="sponsored noopener noreferrer nofollow" 
            class="cta-button"
            data-ga4event-clk-name="broker_review_click" 
            data-ga4event-element="read_review" 
            data-ga4event-feature-1="${broker.slug}" 
            data-ga4event-feature-2="test_0002"
            >Read Review
        </a>` : ''}
        ${broker.disclosureMessage === '' ? `
        <div class="disclosure">&nbsp;</div>
        ` : `
        <div class="disclosure">
            <input 
                type="checkbox" 
                id="toggle-disclosure-2${idSuffix}-${broker.slug}" 
                class="disclosure-checkbox">
            <label 
                for="toggle-disclosure-2${idSuffix}-${broker.slug}" 
                class="disclosure-label">
                <p 
                    class="disclosure-content">
                    ${broker.disclosureMessage}
                </p>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    stroke="currentColor" 
                    stroke-width="1" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                    class="chevron-icon">
                    <path d="M6 9l6 6l6 -6"></path>
                </svg>
            </label>
        </div>
        `}
      </div>
    `;
  }

  // Ensure only one disclosure is open at a time
  function setupDisclosureToggle() {
    const checkboxes = document.querySelectorAll('.disclosure-checkbox');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          checkboxes.forEach(cb => {
            if (cb !== this) cb.checked = false;
          });
        }
      });
    });
  }

  // Call this after rendering broker cards
  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', setupDisclosureToggle);
  }

  // If broker cards are rendered dynamically, call setupDisclosureToggle() after rendering

  // Render both lists
  configs.forEach(({ selector, idSuffix }) => {
    const brokerList = document.querySelector(selector);
    if (!brokerList) return;
    const loopIndex = desiredIndex === 0 ? 3 : 4;
    const template =
      desiredIndex === 0
        ? brokerRatingTemplate
        : (b) => brokerCardTemplate(b, idSuffix);
    let htmlBrokerList = "";
    for (let i = 0; i < loopIndex; i++) {
      htmlBrokerList += template(brokersData[i], idSuffix);
    }
    brokerList.innerHTML = htmlBrokerList;
  });
})();
