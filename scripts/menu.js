window.onload = function () {
    // Initialize the menu state
    // Set as active the menu for the current page
    document
        .querySelectorAll(`.menu [data-menu-id='${nacara.pageId}']`)
        .forEach(function (menuItem) {
            menuItem.classList.add("is-active")
        });

    // Collapse menu-group which doesn't concerns the current page
    document
        .querySelectorAll(`.menu .menu-group`)
        .forEach(function (menuGroup) {
            var parentChildren = Array.from(menuGroup.parentElement.children);
            var subItems = parentChildren.find(function (child) {
                        return child.nodeName === "UL";
                    });

            var activeMenu =
                    Array.from(subItems.children)
                        .find(function (child) {
                        return child.firstChild.classList.contains("is-active")
                    });

            if (activeMenu === undefined) {
                menuGroup.classList.remove("is-expanded");
                subItems.style.display = "none";
            } else {
                menuGroup.classList.add("is-expanded");
                subItems.style.display = "block";
            }
        });

    // Register listener to handle menu-group
    document
        .querySelectorAll(`.menu .menu-group`)
        .forEach(function (menuGroup) {
            menuGroup.addEventListener("click", function (ev) {
                var parentChildren = Array.from(ev.target.parentElement.children);
                var subItems =
                    parentChildren.find(function (child) {
                        return child.nodeName === "UL";
                    });

                if (ev.target.classList.contains("is-expanded")) {
                    ev.target.classList.remove("is-expanded");
                    subItems.style.display = "none";
                } else {
                    ev.target.classList.add("is-expanded");
                    subItems.style.display = "block";
                }

            });
        });
};
