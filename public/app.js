//Change theme of out Button
let link = document.querySelector('link').attributes;
const btn = document
    .querySelector(".btn");
btn.addEventListener("click", changeTheme);


function changeTheme() {
    if (link.href.nodeValue === "https://bootswatch.com/4/darkly/bootstrap.min.css") {
        link.href.nodeValue = "https://bootswatch.com/4/litera/bootstrap.min.css";
        btn.textContent='Switch to Dark Theme'
    } else {
        link.href.nodeValue ="https://bootswatch.com/4/darkly/bootstrap.min.css";
        btn.textContent = 'Switch to Light Theme';
    }
}


const github = new Github();
const ui = new UI();
const input = document.getElementById('search_user');

input.addEventListener('keyup', function (e) {
    const userTxt = e.target.value;

    if (userTxt != '') {
        //Make HTTP call
        github.getUser(userTxt)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //Show error
                    ui.showError('User Not Found!','alert alert-danger');
                } else {
                    //Show Profile
                    ui.showProfile(data.profile);
                    //Show repos
                    ui.showRepos(data.repos);
                }
            });
    } else {
        //Remove profile
        ui.removeProfile();
    }
})