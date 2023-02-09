(()=>{document.addEventListener("alpine:init",()=>{Alpine.store("isOpen",!1),Alpine.store("showHeader",!0);let e=window.scrollY;window.addEventListener("scroll",l=>{window.scrollY>e&&window.scrollY>60?Alpine.store("showHeader",!1):Alpine.store("showHeader",!0),e=window.scrollY})});})();
//# sourceMappingURL=index.js.map
