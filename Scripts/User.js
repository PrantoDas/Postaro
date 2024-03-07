import Renderable from './Renderable.js';

class User extends Renderable {
    constructor(id, userName, email, profilePicUrl = '') {
        super();
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.profilePicUrl = profilePicUrl;
    }

    render() {
        return `
            <div class="user-profile-card">
                <img src="${this.profilePicUrl}" alt="Profile Picture" class="profile-pic">
                <div class="user-info">
                    <h3>${this.userName}</h3>
                    <p>${this.email}</p>
                </div>
            </div>
        `;
    }
}

export default User;

