import { ApiResp } from "./types"
//用来存放定义user该请求的参数及返回数据结构
export interface GetUserListParm {
    position: number
  }
  
  export interface GetUserListResp extends ApiResp {
    data: object
  }
  
  export interface GetUserListData {
    name: string
    position: number
  }
  