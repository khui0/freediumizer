const observer = new MutationObserver(() => {
  attemptReplacement();
});

observer.observe(document.body, { childList: true, subtree: true });

attemptReplacement();

function attemptReplacement() {
  const IS_MEDIUM =
    document
      .querySelector(`head>meta[property="og:site_name"]`)
      ?.getAttribute("content") === "Medium";

  const IS_ARTICLE =
    document
      .querySelector(`head>meta[property="og:type"]`)
      ?.getAttribute("content") === "article";

  const IS_MEMBER_ONLY = Boolean(
    document.querySelector(`button[aria-label="Member-only story"]`)
  );

  if (IS_MEDIUM && IS_ARTICLE && IS_MEMBER_ONLY) {
    replaceURL();
  }
}

function replaceURL() {
  const URL = window.location;
  window.location.replace(`https://freedium.cfd/${URL.toString()}`);
}
