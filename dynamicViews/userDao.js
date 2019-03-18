const userDao = function () {
    this.userCollection = {
        totalUsers: 1,
        users: [
            { name: 'hemant sharma', id: 1 , role:'Architect'},
            { name: 'Aniket', id: 2, role: 'Developer' }
        ]
    }

    this.getAllUsers = function () {
        return this.userCollection;
    }

    this.getUserById = function(userId){
        return this.userCollection.users.find((user)=> 
            user.id == userId        
        );
    }
}

module.exports = new userDao;