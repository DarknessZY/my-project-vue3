import * as UserModel from './user.model'
import prerequest from '@/utils/request'

class UserService {
  // 获取用户列表
  static getUserList(params: UserModel.GetUserListParm) {
    return prerequest.post<UserModel.GetUserListResp>(
      '/list',
      { params },
    )
  }
}

export default UserService