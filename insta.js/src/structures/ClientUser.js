const User = require('./User')

/**
 * Represents the logged in client's Instagram user.
 * @extends {User}
 */
class ClientUser extends User {
    /**
     * @param {Client} client The instantiating client
     * @param {object} data The data for the client user.
     */
    constructor (client, data) {
        super(client, data)
        this._patch(data)
    }

    _patch (data) {
        super._patch(data)
        /**
         * @type {boolean}
         * Whether the user has enabled contact synchronization
         */
        this.allowContactsSync = data.allowContactsSync
        /**
         * @type {string}
         * The phone number of the user
         */
        this.phoneNumber = data.phoneNumber
    }

    get follow () { return undefined }
    get unfollow () { return undefined }
    get block () { return undefined }
    get unblock () { return undefined }
    get approveFollow () { return undefined }
    get denyFollow () { return undefined }
    get removeFollower () { return undefined }
    get send () { return undefined }



    async rmProfilePicture() { 
        await this.client.ig.account.removeProfilePicture()
    }
    /**
     * Change the bot's biography
     * @param {string} content The new biography
     * @returns {Promise<string>} The new biography
     */
    async setBiography (content) {
        this.biography = content
        await this.client.ig.account.setBiography(content)
        return this.biography
    }

    async setPrivate () {
        await this.client.ig.account.setPrivate()
        
    }
    async setPublic () {
        await this.client.ig.account.setPublic()
        
    }
     /**
     * 
     * @param {string} oldPassword
     * @param {strings} newPassword
     * 
     * @returns {Promise<string>} 
     * @returns {Promise<strings>}
     */
    async changePassword(oldPassword, newPassword) { 
        this.old = oldPassword
        this.new = newPassword
        await this.client.ig.account.changePassword(oldPassword,newPassword)
    }

    toJSON () {
        return {
            ...super.toJSON(),
            ...{
                allowContactsSync: this.allowContactsSync,
                phoneNumber: this.phoneNumber
            }
        }
    }
}

module.exports = ClientUser
