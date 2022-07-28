import home from "./home.js";
import profile from "./profile.js";
import settings from "./settings.js";

(function () {

    const navigateTo = url => {
        history.pushState(null, null, url);
        ROUTER();
    }


    const ROUTER = async () => {
        const routes = [
            {
                path: "/index.html",
                view: home,
            },
            {
                path: "/index.html/profile",
                view: profile,
            },
            {
                path: "/index.html/settings",
                view: settings,
            },
        ]
        const potentialMatches = routes.map((route) => {
            return {
                route: route,
                isMatch: location.pathname === route.path,
            }
        })
        console.log(potentialMatches);
        let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);
        if (!match) {
            match = {
                route: routes[0],
                isMatch: true,
            }
        }
        const view = new match.route.view();
        document.querySelector('#app').innerHTML = await view.getHTML();
    }

    window.addEventListener("popstate", (e) => {
        console.log(e);
        navigateTo(e.target.href);
    })

    document.addEventListener('DOMContentLoaded', () => {
        document.body.addEventListener("click", e => {
            if (e.target.matches("[data-link]")) {
                e.preventDefault()
                navigateTo(e.target.href);
            }
        })
        ROUTER();
    })
})()