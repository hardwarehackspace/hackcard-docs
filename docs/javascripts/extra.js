/* HackCard Docs — minor UX enhancements */
document.addEventListener("DOMContentLoaded", function () {
  /* Mark external links */
  document.querySelectorAll('a[href^="http"]').forEach(function (link) {
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
    }
  });
});
