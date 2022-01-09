class Github{
    constructor() {
        this.client_id = "Iv1.9f57145dc4e6d99d";
        this.client_secret = "1c9d74caf9133098b85f9037a32125f56b13fad3";
        this.repos_count = 5;
        this.repos_sort='created:asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        const reposResponse = await fetch(
          `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
        );
        const repos = await reposResponse.json();

        //Returning Object
        return {
            profile,
            repos
        }
    }
}