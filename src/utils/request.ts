import { PreQuest, create } from '@prequest/miniprogram'
import Lock from '@prequest/lock'
import { MiddlewareCallback } from '@prequest/types'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore() // 这里将token放在pinia user模块中
declare module '@prequest/types' {
  interface PQRequest {
    name?: string
    url?: string
    filePath?: string
    formData?: Common
    skipTokenCheck?: boolean
  }
}

// 全局配置
PreQuest.defaults.baseURL = '请求域名'
// 设置header
PreQuest.defaults.header = {}

const prequest = create(uni.request)

// 无痕刷新中间件
const lock = new Lock({
  getValue() {
    return Promise.resolve(userStore.token)
  },
  setValue(token) {
    userStore.token = token
  },
  clearValue() {
    userStore.token = ''
  },
})
const wrapper = Lock.createLockWrapper(lock)

const refreshToken: MiddlewareCallback = async (ctx, next) => {
  if (ctx.request.skipTokenCheck) return next()

  const token = await wrapper(
    () =>
      new Promise((resolve) => {
        uni.login({
          async success(res) {
            if (res.code) {
              // 登录获取token接口
              prequest('/login', {
                method: 'post',
                skipTokenCheck: true,
                data: { code: res.code },
              }).then((res1) => resolve(res1.data.data.token)) // 注意这里根据后台返回的token结构取值
            }
          },
        })
      }),
  )
  if (ctx.request.header) {
    // header中统一设置token
    ctx.request.header['Authorization'] = `Bearer ${token}`
  }
  await next()
}

// 解析响应
const parse: MiddlewareCallback = async (ctx, next) => {
  await next()
  // 这里抛出异常，会被错误重试中间件捕获
  const { statusCode } = ctx.response
  if (![200, 301, 302].includes(statusCode)) {
    // 在这里可以设置toast提示
    throw new Error(`${statusCode}`)
  }
}

// 实例中间件
prequest.use(refreshToken).use(parse)

export default prequest