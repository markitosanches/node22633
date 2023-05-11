//7 import view
import Dashboard from "./views/Dashboard.js"
import Posts from "./views/Posts.js"
import Settings from "./views/Settings.js"

//1 router
const router = async () => {
    const routes = [
        {path: "/", view: Dashboard},
        {path: "/posts", view: Posts},
        {path: "/settings", view: Settings}
    ]
//2 match function
    const potentialMatches = routes.map( route =>{
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })
    //console.log(potentialMatches)
//3 find view
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)
    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

   // console.log(match.route.view())
//8 Render view
    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml()

}

//9 use nav back button
window.addEventListener("popstate", router)

//5 navigate state
const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}

//4 executer la route
document.addEventListener("DOMContentLoaded", () =>{
    //6 SPA link 
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })
    router()
})
