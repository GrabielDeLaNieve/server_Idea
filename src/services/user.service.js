const BaseService = require("./base.service");
let _userRepository = null;

class UserService extends BaseService{
    constructor({ UserRepository }) {
        super(UserRepository)
        _userRepository = UserRepository;
    }

    async getUserByName(username) {
        return await _userRepository.getUserByUserName(username); 
    }
}

module.exports = UserService;