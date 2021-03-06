class UI{
    constructor() {
        this.profile = document.querySelector('.profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src=${user.avatar_url}>
                        <a href=${user.html_url} target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary mr-2">Public Repos:${user.public_repos}</span>
                        <span class="badge badge-secondary mr-2">Public Gists:${user.public_gists}</span>
                        <span class="badge badge-success mr-2">Followers:${user.followers}</span>
                        <span class="badge badge-info">Following:${user.following}</span>
                        <br> <br>
                        <ul class="list-group">
                            <li class="list-group-item">Company:${user.company}</li>
                            <li class="list-group-item">Website/Blog:${user.blog}</li>
                            <li class="list-group-item">Location:${user.location}</li>
                            <li class="list-group-item">Member Since:${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest-Repos:</h3>
            <div id="repos" class="mb-4"></div>
        `;
    }


    showRepos(repos) {
        let output = ``;

        repos.forEach(repo => {
            output += `
                <div class="card card-body">
                    <div class="row">
                        <div class=col-md-6>
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class=col-md-6>
                            <span class="badge badge-primary mr-2">Stars:${repo.stargazers_count}</span>
                            <span class="badge badge-primary mr-2">Watchers:${repo.watchers_count}</span>
                            <span class="badge badge-primary mr-2">Forks:${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        })

        document.getElementById('repos').innerHTML=output;
    }

    showError(mssg, className) {
        this.removeError();
        const div = document.createElement('div');

        div.className = className;

        div.appendChild(document.createTextNode(mssg));

        const container = document.querySelector('.search-container');

        const search = document.querySelector('.search');

        container.insertBefore(div, search);

        setTimeout(()=> {
            this.removeError()
        },3000)
    }

    removeError() {
        const alert = document.querySelector('.alert');

        if (alert) {
            alert.remove();
        }
    }

    removeProfile() {
        this.profile.innerHTML = '';
    }

}